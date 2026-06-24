import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SectionLabel from '../components/SectionLabel';

gsap.registerPlugin(ScrollTrigger);

const steps = [
  { num: '01', title: 'Research', desc: 'Deep-dive into culture, audiences, platforms, and competitors.', color: '#00E676' },
  { num: '02', title: 'Insight', desc: 'Extract actionable patterns from data and behavioral signals.', color: '#2962FF' },
  { num: '03', title: 'Content Strategy', desc: 'Design content systems engineered for engagement and sharing.', color: '#00E676' },
  { num: '04', title: 'Viral Distribution', desc: 'Deploy across channels with precision timing and amplification.', color: '#FF3D00' },
  { num: '05', title: 'Conversion', desc: 'Turn engagement into leads, sales, and measurable outcomes.', color: '#FFD600' },
  { num: '06', title: 'Retention', desc: 'Build loops that keep audiences coming back and advocating.', color: '#2962FF' },
  { num: '07', title: 'Measurement', desc: 'Track, analyze, and optimize every touchpoint continuously.', color: '#00E676' },
];

export default function GrowthSystem() {
  const sectionRef = useRef<HTMLElement>(null);
  const pathRef = useRef<SVGPathElement>(null);
  const stepsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate the SVG connecting line
      if (pathRef.current) {
        const pathLength = pathRef.current.getTotalLength();
        gsap.set(pathRef.current, {
          strokeDasharray: pathLength,
          strokeDashoffset: pathLength,
        });
        gsap.to(pathRef.current, {
          strokeDashoffset: 0,
          duration: 2.5,
          ease: 'none',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 60%',
            end: 'bottom 60%',
            scrub: 1,
          },
        });
      }

      // Stagger the steps
      stepsRef.current.forEach((step, i) => {
        if (!step) return;
        gsap.fromTo(
          step,
          { opacity: 0, x: i % 2 === 0 ? -40 : 40 },
          {
            opacity: 1,
            x: 0,
            duration: 0.6,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: step,
              start: 'top 85%',
              once: true,
            },
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="growth-system" className="relative py-24 md:py-32 bg-cream overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-10">
        <SectionLabel text="The Growth System" className="!text-green !before:bg-green" />

        <h2
          className="mt-6 font-display font-bold text-charcoal leading-tight max-w-3xl"
          style={{ fontSize: 'clamp(2rem, 5vw, 4rem)', letterSpacing: '-0.02em' }}
        >
          From Research to <span className="text-green">Retention</span> — A Proven 7-Step System
        </h2>

        <p className="mt-4 text-lg text-charcoal/60 max-w-2xl leading-relaxed">
          Every campaign follows our structured growth methodology. Each phase builds on the last, 
          creating compounding momentum that drives sustainable results.
        </p>

        {/* Timeline */}
        <div className="relative mt-20">
          {/* SVG connecting line */}
          <svg
            className="absolute left-1/2 top-0 h-full w-4 -translate-x-1/2 hidden lg:block"
            viewBox="0 0 4 1000"
            preserveAspectRatio="none"
          >
            <path
              ref={pathRef}
              d="M2 0 L2 1000"
              stroke="url(#lineGradient)"
              strokeWidth="2"
              fill="none"
            />
            <defs>
              <linearGradient id="lineGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#00E676" />
                <stop offset="33%" stopColor="#2962FF" />
                <stop offset="66%" stopColor="#FF3D00" />
                <stop offset="100%" stopColor="#FFD600" />
              </linearGradient>
            </defs>
          </svg>

          {/* Steps */}
          <div className="space-y-12 lg:space-y-0 relative">
            {steps.map((step, i) => (
              <div
                key={i}
                ref={(el) => { stepsRef.current[i] = el; }}
                className={`lg:flex lg:items-center ${i % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} lg:mb-16`}
              >
                {/* Content card */}
                <div className={`lg:w-5/12 ${i % 2 === 0 ? 'lg:pr-12 lg:text-right' : 'lg:pl-12'}`}>
                  <div className="bg-white rounded-2xl p-6 md:p-8 shadow-card border border-charcoal/10 transition-all duration-300 hover:shadow-card-hover hover:-translate-y-1">
                    <span
                      className="font-mono text-sm font-bold"
                      style={{ color: step.color }}
                    >
                      {step.num}
                    </span>
                    <h3 className="mt-2 font-display font-bold text-xl md:text-2xl text-charcoal">
                      {step.title}
                    </h3>
                    <p className="mt-2 text-sm text-charcoal/60 leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                </div>

                {/* Center node */}
                <div className="hidden lg:flex lg:w-2/12 justify-center relative">
                  <div
                    className="w-5 h-5 rounded-full border-4 bg-cream z-10 transition-transform duration-300 hover:scale-150"
                    style={{ borderColor: step.color }}
                  />
                </div>

                {/* Spacer for opposite side */}
                <div className="hidden lg:block lg:w-5/12" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
