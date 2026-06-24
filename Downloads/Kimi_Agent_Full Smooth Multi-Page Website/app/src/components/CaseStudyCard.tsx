import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

interface CaseStudyCardProps {
  category: string;
  title: string;
  metrics: { value: string; label: string }[];
  color: string;
  index?: number;
}

export default function CaseStudyCard({ category, title, metrics, color, index = 0 }: CaseStudyCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!cardRef.current) return;
    const ctx = gsap.context(() => {
      gsap.fromTo(
        cardRef.current,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'power3.out',
          delay: index * 0.15,
          scrollTrigger: {
            trigger: cardRef.current,
            start: 'top 90%',
            once: true,
          },
        }
      );
    }, cardRef);
    return () => ctx.revert();
  }, [index]);

  return (
    <div
      ref={cardRef}
      className="group relative rounded-2xl overflow-hidden bg-charcoal border border-white/10 transition-all duration-500 hover:border-green/30 hover:shadow-glow-green"
      style={{ transitionTimingFunction: 'var(--ease-primary)' }}
    >
      {/* Color banner */}
      <div className="h-3 w-full" style={{ backgroundColor: color }} />

      {/* Content */}
      <div className="p-6 md:p-8">
        {/* Category tag */}
        <span
          className="inline-block font-mono text-xs uppercase tracking-wider px-3 py-1 rounded-full mb-4"
          style={{ backgroundColor: `${color}20`, color }}
        >
          {category}
        </span>

        {/* Title */}
        <h3 className="font-display font-bold text-xl md:text-2xl text-offwhite group-hover:text-green transition-colors duration-300">
          {title}
        </h3>

        {/* Metrics */}
        <div className="mt-6 flex flex-wrap gap-6">
          {metrics.map((metric, i) => (
            <div key={i}>
              <p className="font-mono text-2xl md:text-3xl font-bold" style={{ color }}>
                {metric.value}
              </p>
              <p className="text-xs text-gray mt-1">{metric.label}</p>
            </div>
          ))}
        </div>

        {/* View link */}
        <div className="mt-6 flex items-center gap-2 text-sm text-gray group-hover:text-green transition-colors duration-300">
          <span>View Case Study</span>
          <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
        </div>
      </div>
    </div>
  );
}
