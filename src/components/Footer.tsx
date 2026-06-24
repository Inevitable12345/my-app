import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'World Cup Playbook', href: '/world-cup' },
  { label: 'Marketing Materials', href: '/marketing' },
  { label: 'Case Studies', href: '/case-studies' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
];

const serviceLinks = [
  'Social Media Growth',
  'Viral Content Systems',
  'Campaign Research',
  'Creator Strategy',
  'Conversion Funnels',
  'Analytics',
];

const socialLinks = [
  { label: 'Instagram', href: '#' },
  { label: 'Twitter/X', href: '#' },
  { label: 'LinkedIn', href: '#' },
  { label: 'TikTok', href: '#' },
];

export default function Footer() {
  const footerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!footerRef.current) return;
    const ctx = gsap.context(() => {
      gsap.fromTo(
        footerRef.current,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: footerRef.current,
            start: 'top 90%',
            once: true,
          },
        }
      );
    }, footerRef);
    return () => ctx.revert();
  }, []);

  return (
    <footer ref={footerRef} className="w-full bg-black border-t border-border-light">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-10 py-16">
        {/* Top section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Column 1: Brand */}
          <div>
            <Link to="/" className="font-display font-bold text-xl tracking-[0.1em] text-offwhite">
              SWAY
            </Link>
            <p className="mt-4 text-sm text-gray leading-relaxed max-w-xs">
              Research-driven growth at the intersection of social media, content, and virality.
            </p>
            <div className="mt-6 flex flex-wrap gap-4">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="font-mono text-xs uppercase tracking-wider text-gray hover:text-green transition-colors duration-300"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Navigate */}
          <div>
            <h4 className="font-mono text-xs uppercase tracking-[0.08em] text-gray mb-6">Navigate</h4>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.href}
                    className="text-sm text-offwhite/60 hover:text-offwhite transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Services */}
          <div>
            <h4 className="font-mono text-xs uppercase tracking-[0.08em] text-gray mb-6">Services</h4>
            <ul className="space-y-3">
              {serviceLinks.map((link) => (
                <li key={link}>
                  <span className="text-sm text-offwhite/60 hover:text-offwhite transition-colors duration-300 cursor-default">
                    {link}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="my-10 h-px bg-border-light" />

        {/* Bottom row */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-gray">
            &copy; {new Date().getFullYear()} Sway Agency. All rights reserved.
          </p>
          <div className="flex gap-6">
            <span className="text-xs text-gray hover:text-offwhite transition-colors duration-300 cursor-pointer">
              Privacy Policy
            </span>
            <span className="text-xs text-gray hover:text-offwhite transition-colors duration-300 cursor-pointer">
              Terms of Service
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
