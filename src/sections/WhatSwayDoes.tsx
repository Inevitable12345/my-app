import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SectionLabel from '../components/SectionLabel';
import { Search, TrendingUp, Users, Zap } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const researchAreas = [
  {
    icon: Search,
    title: 'Culture & Trends',
    desc: 'We analyze cultural moments, trending topics, and platform dynamics to identify growth opportunities before they peak.',
  },
  {
    icon: Users,
    title: 'Audience Behavior',
    desc: 'Deep research into audience psychographics, content consumption patterns, and conversion triggers that drive action.',
  },
  {
    icon: TrendingUp,
    title: 'Platform Mechanics',
    desc: 'Understanding algorithm behavior, engagement signals, and distribution patterns across every major social platform.',
  },
  {
    icon: Zap,
    title: 'Conversion Psychology',
    desc: 'Mapping the psychological journey from first impression to purchase decision through data-backed insights.',
  },
];

export default function WhatSwayDoes() {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Kinetic headline
      if (headingRef.current) {
        const words = headingRef.current.querySelectorAll('.word');
        gsap.fromTo(
          words,
          { opacity: 0, y: 60, rotateX: -25 },
          {
            opacity: 1,
            y: 0,
            rotateX: 0,
            duration: 0.7,
            stagger: 0.08,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: headingRef.current,
              start: 'top 80%',
              once: true,
            },
          }
        );
      }

      // Cards stagger
      gsap.fromTo(
        '.research-card',
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: '.research-cards-grid',
            start: 'top 85%',
            once: true,
          },
        }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative py-24 md:py-32 bg-charcoal">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-10">
        <SectionLabel text="What We Do" />

        <h2
          ref={headingRef}
          className="mt-6 font-display font-bold text-offwhite leading-tight"
          style={{ fontSize: 'clamp(2rem, 5vw, 4rem)', letterSpacing: '-0.02em', perspective: '1000px' }}
        >
          <span className="word inline-block">We</span>{' '}
          <span className="word inline-block">research</span>{' '}
          <span className="word inline-block text-green">culture,</span>{' '}
          <span className="word inline-block">audience</span>{' '}
          <span className="word inline-block">behavior,</span>{' '}
          <span className="word inline-block">and</span>{' '}
          <span className="word inline-block">platform</span>{' '}
          <span className="word inline-block text-blue">trends</span>{' '}
          <span className="word inline-block">to</span>{' '}
          <span className="word inline-block">design</span>{' '}
          <span className="word inline-block text-green">growth</span>{' '}
          <span className="word inline-block">campaigns</span>
        </h2>

        <p className="mt-6 text-lg text-offwhite/60 max-w-2xl leading-relaxed">
          Sway does not create content in a vacuum. We study audience behavior, content signals, 
          cultural timing, platform mechanics, and conversion psychology to engineer campaigns 
          that turn attention into revenue.
        </p>

        {/* Research areas grid */}
        <div className="research-cards-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
          {researchAreas.map((area, i) => (
            <div
              key={i}
              className="research-card group rounded-2xl p-6 bg-white/5 border border-white/10 transition-all duration-300 hover:border-green/30 hover:shadow-glow-green"
            >
              <div className="w-12 h-12 rounded-full bg-green/10 flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110">
                <area.icon className="w-5 h-5 text-green" />
              </div>
              <h3 className="font-display font-bold text-lg text-offwhite mb-2">{area.title}</h3>
              <p className="text-sm text-gray leading-relaxed">{area.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
