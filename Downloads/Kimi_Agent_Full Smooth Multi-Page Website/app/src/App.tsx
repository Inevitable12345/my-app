import { Routes, Route, useLocation } from 'react-router-dom';
import { useEffect, useRef, Suspense, lazy } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useSmoothScroll, getLenis } from './hooks/useSmoothScroll';

// Layout components
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';

// Lazy-loaded Pages
const Home = lazy(() => import('./pages/Home'));
const WorldCupPlaybook = lazy(() => import('./pages/WorldCupPlaybook'));
const MarketingMaterials = lazy(() => import('./pages/MarketingMaterials'));
const CaseStudies = lazy(() => import('./pages/CaseStudies'));
const About = lazy(() => import('./pages/About'));
const Contact = lazy(() => import('./pages/Contact'));

// Loading fallback
function PageLoader() {
  return (
    <div className="min-h-screen bg-black flex items-center justify-center">
      <div className="w-3 h-3 rounded-full bg-green animate-pulse" />
    </div>
  );
}

gsap.registerPlugin(ScrollTrigger);

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    const lenis = getLenis();
    if (lenis) {
      lenis.scrollTo(0, { immediate: true });
    } else {
      window.scrollTo(0, 0);
    }
    // Kill any orphaned ScrollTrigger instances
    ScrollTrigger.getAll().forEach(st => st.kill());
    // Refresh after content change
    setTimeout(() => ScrollTrigger.refresh(), 100);
  }, [pathname]);
  return null;
}

function PageTransitionWrapper({ children }: { children: React.ReactNode }) {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const location = useLocation();
  const prevPathRef = useRef(location.pathname);

  useEffect(() => {
    if (!wrapperRef.current) return;
    if (prevPathRef.current === location.pathname) return;
    prevPathRef.current = location.pathname;

    // Entrance animation
    gsap.fromTo(
      wrapperRef.current,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.4, ease: 'power2.out' }
    );
  }, [location.pathname]);

  return (
    <div ref={wrapperRef} key={location.pathname}>
      {children}
    </div>
  );
}

function App() {
  useSmoothScroll();

  return (
    <div className="relative min-h-screen bg-black">
      <CustomCursor />
      <Navigation />
      <ScrollToTop />
      <Suspense fallback={<PageLoader />}>
        <PageTransitionWrapper>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/world-cup" element={<WorldCupPlaybook />} />
            <Route path="/marketing" element={<MarketingMaterials />} />
            <Route path="/case-studies" element={<CaseStudies />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </PageTransitionWrapper>
      </Suspense>
      <Footer />
    </div>
  );
}

export default App;
