import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface StatCounterProps {
  target: number;
  suffix?: string;
  prefix?: string;
  duration?: number;
  label?: string;
  className?: string;
  variant?: 'green' | 'white';
}

export default function StatCounter({
  target,
  suffix = '',
  prefix = '',
  duration = 2,
  label,
  className = '',
  variant = 'green',
}: StatCounterProps) {
  const ref = useRef<HTMLDivElement>(null);
  const valueRef = useRef<HTMLSpanElement>(null);
  const [displayValue, setDisplayValue] = useState(0);
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (!ref.current) return;
    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: ref.current,
        start: 'top 85%',
        once: true,
        onEnter: () => {
          if (hasAnimated.current) return;
          hasAnimated.current = true;
          const obj = { value: 0 };
          gsap.to(obj, {
            value: target,
            duration,
            ease: 'power2.out',
            onUpdate: () => {
              setDisplayValue(Math.round(obj.value));
            },
          });
        },
      });
    }, ref);
    return () => ctx.revert();
  }, [target, duration]);

  return (
    <div ref={ref} className={`text-center ${className}`}>
      <span
        ref={valueRef}
        className={`font-mono text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight ${
          variant === 'green' ? 'text-green' : 'text-offwhite'
        }`}
      >
        {prefix}{displayValue.toLocaleString()}{suffix}
      </span>
      {label && (
        <p className="mt-2 text-sm text-gray uppercase tracking-wider">{label}</p>
      )}
    </div>
  );
}
