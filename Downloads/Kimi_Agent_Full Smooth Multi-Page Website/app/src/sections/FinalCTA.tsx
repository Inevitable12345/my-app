import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function FinalCTA() {
  const sectionRef = useRef<HTMLElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const particlesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Kinetic headline reveal
      if (headlineRef.current) {
        const words = headlineRef.current.querySelectorAll('.word');
        gsap.fromTo(
          words,
          { opacity: 0, y: 80, rotateX: -30 },
          {
            opacity: 1,
            y: 0,
            rotateX: 0,
            duration: 0.8,
            stagger: 0.1,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: headlineRef.current,
              start: 'top 80%',
              once: true,
            },
          }
        );
      }

      // Animated particles
      if (particlesRef.current) {
        const particles = particlesRef.current.children;
        gsap.to(particles, {
          y: 'random(-30, 30)',
          x: 'random(-20, 20)',
          duration: 'random(2, 4)',
          repeat: -1,
          yoyo: true,
          ease: 'sine.inOut',
          stagger: { each: 0.3, from: 'random' },
        });
      }
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative py-32 md:py-48 bg-black overflow-hidden flex items-center justify-center"
    >
      {/* Radial gradient background */}
      <div className="absolute inset-0 bg-gradient-radial from-green/10 via-transparent to-transparent opacity-50" />

      {/* Animated particles */}
      <div ref={particlesRef} className="absolute inset-0 pointer-events-none">
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full"
            style={{
              width: Math.random() * 6 + 2,
              height: Math.random() * 6 + 2,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              backgroundColor: ['#00E676', '#2962FF', '#FF3D00', '#FFD600'][i % 4],
              opacity: 0.3 + Math.random() * 0.3,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-10 text-center">
        <h2
          ref={headlineRef}
          className="font-display font-bold text-offwhite leading-[0.95]"
          style={{
            fontSize: 'clamp(2.5rem, 7vw, 6rem)',
            letterSpacing: '-0.03em',
            perspective: '1000px',
          }}
        >
          <span className="word inline-block">Ready</span>{' '}
          <span className="word inline-block">to</span>{' '}
          <span className="word inline-block text-green">sway</span>{' '}
          <span className="word inline-block">attention</span>
          <br className="hidden md:block" />{' '}
          <span className="word inline-block">into</span>{' '}
          <span className="word inline-block text-blue">growth?</span>
        </h2>

        <p className="mt-8 text-lg md:text-xl text-offwhite/50 max-w-xl mx-auto leading-relaxed">
          Let's turn your audience into customers. Start with a free growth audit 
          and discover what's possible.
        </p>

        <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            to="/contact"
            className="magnetic-btn magnetic-btn-primary text-base px-10 py-4 shadow-glow-green hover:shadow-[0_0_50px_rgba(0,230,118,0.4)]"
          >
            Sway It
          </Link>
          <Link to="/case-studies" className="magnetic-btn magnetic-btn-secondary text-base px-10 py-4">
            See Our Work
          </Link>
        </div>
      </div>
    </section>
  );
}
