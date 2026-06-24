import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SectionLabel from '../components/SectionLabel';
import CaseStudyCard from '../components/CaseStudyCard';
import { ArrowRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const caseStudies = [
  {
    category: 'E-commerce',
    title: 'How a DTC brand achieved 340% ROAS during their Q4 product launch',
    metrics: [
      { value: '340%', label: 'ROAS' },
      { value: '2.4M', label: 'Reach' },
      { value: '12x', label: 'Engagement' },
    ],
    color: '#00E676',
  },
  {
    category: 'SaaS',
    title: 'B2B SaaS startup grew organic signups by 800% in 90 days',
    metrics: [
      { value: '800%', label: 'Signup Growth' },
      { value: '45K', label: 'New Users' },
      { value: '3.2x', label: 'Conversion' },
    ],
    color: '#2962FF',
  },
  {
    category: 'Consumer App',
    title: 'Viral loop strategy drove 1M downloads in 6 weeks',
    metrics: [
      { value: '1M+', label: 'Downloads' },
      { value: '28%', label: 'Retention' },
      { value: '5.1x', label: 'Viral K-Factor' },
    ],
    color: '#FFD600',
  },
];

export default function CaseStudiesPreview() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.case-preview-header',
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: { trigger: sectionRef.current, start: 'top 80%', once: true },
        }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative py-24 md:py-32 bg-black">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-10">
        <div className="case-preview-header flex flex-col md:flex-row md:items-end md:justify-between gap-4">
          <div>
            <SectionLabel text="Case Studies" />
            <h2
              className="mt-6 font-display font-bold text-offwhite leading-tight"
              style={{ fontSize: 'clamp(2rem, 5vw, 4rem)', letterSpacing: '-0.02em' }}
            >
              Results that <span className="text-green">speak</span> for themselves
            </h2>
          </div>
          <Link
            to="/case-studies"
            className="flex items-center gap-2 text-green hover:text-offwhite transition-colors duration-300 font-medium text-sm"
          >
            View all case studies
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          {caseStudies.map((study, i) => (
            <CaseStudyCard key={i} {...study} index={i} />
          ))}
        </div>
      </div>

      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-green/5 rounded-full blur-[150px] pointer-events-none" />
    </section>
  );
}
