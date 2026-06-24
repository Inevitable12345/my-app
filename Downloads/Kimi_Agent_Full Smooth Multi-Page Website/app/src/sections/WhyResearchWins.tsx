import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SectionLabel from '../components/SectionLabel';
import { Brain, Eye, Target, Lightbulb, Layers, LineChart } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const points = [
  {
    icon: Brain,
    title: 'Audience Psychology',
    desc: 'We decode what makes your audience tick — their fears, desires, triggers, and behaviors.',
  },
  {
    icon: Eye,
    title: 'Content Signals',
    desc: 'Every like, share, comment, and save is data. We analyze patterns to predict what content wins.',
  },
  {
    icon: Target,
    title: 'Cultural Timing',
    desc: 'Being right is good. Being right at the right moment is everything. We track cultural velocity.',
  },
  {
    icon: Lightbulb,
    title: 'Platform Mechanics',
    desc: 'Each platform has its own language. We fluently speak algorithm, engagement, and distribution.',
  },
  {
    icon: Layers,
    title: 'Conversion Psychology',
    desc: 'Growth without conversion is vanity. We engineer the psychological path from view to value.',
  },
  {
    icon: LineChart,
    title: 'Continuous Optimization',
    desc: 'We never set and forget. Every campaign is a live experiment with real-time optimization.',
  },
];

export default function WhyResearchWins() {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (headingRef.current) {
        const words = headingRef.current.querySelectorAll('.word');
        gsap.fromTo(
          words,
          { opacity: 0, y: 50, rotateX: -20 },
          {
            opacity: 1,
            y: 0,
            rotateX: 0,
            duration: 0.6,
            stagger: 0.06,
            ease: 'power3.out',
            scrollTrigger: { trigger: headingRef.current, start: 'top 80%', once: true },
          }
        );
      }

      gsap.fromTo(
        '.research-point',
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
          stagger: 0.08,
          ease: 'power2.out',
          scrollTrigger: { trigger: '.research-points-grid', start: 'top 85%', once: true },
        }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative py-24 md:py-32 bg-charcoal overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-10">
        <SectionLabel text="Why Research Wins" />

        <h2
          ref={headingRef}
          className="mt-6 font-display font-bold text-offwhite leading-tight max-w-4xl"
          style={{ fontSize: 'clamp(2rem, 5vw, 4rem)', letterSpacing: '-0.02em', perspective: '1000px' }}
        >
          <span className="word inline-block">We</span>{' '}
          <span className="word inline-block">do</span>{' '}
          <span className="word inline-block">not</span>{' '}
          <span className="word inline-block text-green">guess</span>{' '}
          <span className="word inline-block">trends.</span>{' '}
          <span className="word inline-block">We</span>{' '}
          <span className="word inline-block text-blue">study</span>{' '}
          <span className="word inline-block">them.</span>
        </h2>

        <p className="mt-6 text-lg text-offwhite/60 max-w-2xl leading-relaxed">
          Sway's competitive advantage is research. While others chase trends, we anticipate them. 
          While others copy what worked, we discover what will work next. Our growth engine is 
          powered by insights, not assumptions.
        </p>

        <div className="research-points-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-16">
          {points.map((point, i) => (
            <div
              key={i}
              className="research-point group p-6 rounded-2xl bg-white/5 border border-white/10 transition-all duration-300 hover:border-green/30 hover:bg-green/5"
            >
              <div className="w-12 h-12 rounded-full bg-green/10 flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110">
                <point.icon className="w-5 h-5 text-green" />
              </div>
              <h3 className="font-display font-bold text-lg text-offwhite mb-2">{point.title}</h3>
              <p className="text-sm text-gray leading-relaxed">{point.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Subtle background decoration */}
      <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-blue/5 rounded-full blur-[100px] pointer-events-none" />
    </section>
  );
}
