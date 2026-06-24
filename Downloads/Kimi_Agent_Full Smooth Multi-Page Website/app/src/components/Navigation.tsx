import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import gsap from 'gsap';

const navLinks = [
  { label: 'Work', href: '/case-studies' },
  { label: 'Services', href: '/#services' },
  { label: 'Growth System', href: '/#growth-system' },
  { label: 'World Cup', href: '/world-cup' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Close mobile menu on route change
    setMobileOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
      // Stagger animation for mobile links
      gsap.fromTo(
        '.mobile-nav-link',
        { x: -60, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.4, stagger: 0.08, ease: 'power2.out', delay: 0.1 }
      );
    } else {
      document.body.style.overflow = '';
    }
  }, [mobileOpen]);

  const handleServicesClick = (e: React.MouseEvent) => {
    if (location.pathname === '/') {
      e.preventDefault();
      const el = document.getElementById('services');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleGrowthClick = (e: React.MouseEvent) => {
    if (location.pathname === '/') {
      e.preventDefault();
      const el = document.getElementById('growth-system');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <nav
        className="fixed top-0 left-0 right-0 z-50 h-[72px] flex items-center transition-all duration-300"
        style={{
          backgroundColor: scrolled ? 'rgba(0, 0, 0, 0.7)' : 'transparent',
          backdropFilter: scrolled ? 'blur(20px)' : 'none',
          WebkitBackdropFilter: scrolled ? 'blur(20px)' : 'none',
          borderBottom: scrolled ? '1px solid rgba(245, 242, 234, 0.12)' : '1px solid transparent',
        }}
      >
        <div className="w-full max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-10 flex items-center justify-between">
          {/* Logo */}
          <Link
            to="/"
            className="font-display font-bold text-xl tracking-[0.1em] text-offwhite hover:text-green transition-colors duration-300"
          >
            SWAY
          </Link>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.href ||
                (link.href === '/case-studies' && location.pathname === '/case-studies');
              return (
                <Link
                  key={link.label}
                  to={link.href}
                  onClick={link.href === '/#services' ? handleServicesClick : link.href === '/#growth-system' ? handleGrowthClick : undefined}
                  className={`nav-link ${isActive ? 'active' : ''}`}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>

          {/* Desktop CTAs */}
          <div className="hidden lg:flex items-center gap-3">
            <Link to="/contact" className="magnetic-btn magnetic-btn-primary text-[13px]">
              Sway It
            </Link>
            <Link to="/contact" className="magnetic-btn magnetic-btn-secondary text-[13px]">
              Let's Talk
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            className="lg:hidden flex flex-col gap-1.5 p-2"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            <span
              className="w-6 h-0.5 bg-offwhite transition-all duration-300"
              style={{
                transform: mobileOpen ? 'rotate(45deg) translateY(4px)' : 'none',
              }}
            />
            <span
              className="w-6 h-0.5 bg-offwhite transition-all duration-300"
              style={{
                opacity: mobileOpen ? 0 : 1,
              }}
            />
            <span
              className="w-6 h-0.5 bg-offwhite transition-all duration-300"
              style={{
                transform: mobileOpen ? 'rotate(-45deg) translateY(-4px)' : 'none',
              }}
            />
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {mobileOpen && (
        <div className="fixed inset-0 z-40 bg-black flex flex-col items-center justify-center gap-8">
          <button
            className="absolute top-6 right-6 text-offwhite p-2"
            onClick={() => setMobileOpen(false)}
            aria-label="Close menu"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="4" y1="4" x2="20" y2="20" />
              <line x1="20" y1="4" x2="4" y2="20" />
            </svg>
          </button>
          {navLinks.map((link) => (
            <Link
              key={link.label}
              to={link.href}
              onClick={() => setMobileOpen(false)}
              className="mobile-nav-link font-display text-4xl md:text-5xl text-offwhite hover:text-green transition-colors duration-300"
            >
              {link.label}
            </Link>
          ))}
          <div className="mobile-nav-link flex flex-col gap-4 mt-4">
            <Link
              to="/contact"
              onClick={() => setMobileOpen(false)}
              className="magnetic-btn magnetic-btn-primary text-center"
            >
              Sway It
            </Link>
          </div>
        </div>
      )}
    </>
  );
}
