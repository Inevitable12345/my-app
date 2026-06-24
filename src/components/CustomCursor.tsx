import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const trailRefs = useRef<(HTMLDivElement | null)[]>([]);
  const glowRef = useRef<HTMLDivElement>(null);
  const [isHovering, setIsHovering] = useState(false);
  const [cursorLabel, setCursorLabel] = useState('');
  const isTouch = useRef(false);

  useEffect(() => {
    // Detect touch device
    isTouch.current = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    if (isTouch.current) return;

    const cursor = cursorRef.current;
    if (!cursor) return;

    // QuickTo setters for smooth following
    const xSet = gsap.quickTo(cursor, 'x', { duration: 0.15, ease: 'power2.out' });
    const ySet = gsap.quickTo(cursor, 'y', { duration: 0.15, ease: 'power2.out' });

    // Trail dot setters with decreasing speed
    const trailSetters = trailRefs.current.map((trail, i) => {
      if (!trail) return null;
      const duration = 0.18 + i * 0.04;
      return {
        x: gsap.quickTo(trail, 'x', { duration, ease: 'power2.out' }),
        y: gsap.quickTo(trail, 'y', { duration, ease: 'power2.out' }),
      };
    });

    // Glow setter
    const glowXSet = gsap.quickTo(glowRef.current, 'x', { duration: 0.3, ease: 'power2.out' });
    const glowYSet = gsap.quickTo(glowRef.current, 'y', { duration: 0.3, ease: 'power2.out' });

    let mouseX = 0;
    let mouseY = 0;

    const onMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      xSet(mouseX);
      ySet(mouseY);
      glowXSet(mouseX);
      glowYSet(mouseY);

      trailSetters.forEach((setter) => {
        if (setter) {
          setter.x(mouseX);
          setter.y(mouseY);
        }
      });
    };

    // Detect hover on interactive elements
    const onMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const interactive = target.closest('a, button, [role="button"], input, textarea, select, [data-cursor]');
      if (interactive) {
        setIsHovering(true);
        const label = interactive.getAttribute('data-cursor-label') || '';
        setCursorLabel(label);
      }
    };

    const onMouseOut = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const interactive = target.closest('a, button, [role="button"], input, textarea, select, [data-cursor]');
      if (interactive) {
        setIsHovering(false);
        setCursorLabel('');
      }
    };

    window.addEventListener('mousemove', onMouseMove, { passive: true });
    document.addEventListener('mouseover', onMouseOver, { passive: true });
    document.addEventListener('mouseout', onMouseOut, { passive: true });

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseover', onMouseOver);
      document.removeEventListener('mouseout', onMouseOut);
    };
  }, []);

  // Don't render on touch devices
  if (typeof window !== 'undefined' && ('ontouchstart' in window || navigator.maxTouchPoints > 0)) {
    return null;
  }

  const trailColors = [
    'rgba(0, 230, 118, 0.4)',
    'rgba(41, 98, 255, 0.35)',
    'rgba(255, 61, 0, 0.3)',
    'rgba(255, 214, 0, 0.25)',
    'rgba(138, 138, 138, 0.2)',
  ];
  const trailSizes = [8, 6, 5, 4, 3];

  return (
    <div className="fixed inset-0 pointer-events-none z-[9999]" aria-hidden="true">
      {/* Ambient glow */}
      <div
        ref={glowRef}
        className="absolute w-[200px] h-[200px] rounded-full"
        style={{
          transform: 'translate(-50%, -50%)',
          background: 'radial-gradient(circle, rgba(0, 230, 118, 0.08) 0%, transparent 70%)',
        }}
      />

      {/* Trail dots */}
      {trailColors.map((color, i) => (
        <div
          key={i}
          ref={(el) => { trailRefs.current[i] = el; }}
          className="absolute rounded-full"
          style={{
            width: trailSizes[i],
            height: trailSizes[i],
            backgroundColor: color,
            transform: 'translate(-50%, -50%)',
          }}
        />
      ))}

      {/* Main cursor */}
      <div
        ref={cursorRef}
        className="absolute flex items-center justify-center transition-[width,height] duration-300"
        style={{
          width: isHovering ? 48 : 12,
          height: isHovering ? 48 : 12,
          borderRadius: '50%',
          border: '2px solid #00E676',
          backgroundColor: isHovering ? 'rgba(0, 230, 118, 0.1)' : 'transparent',
          transform: 'translate(-50%, -50%)',
          transitionTimingFunction: 'var(--ease-primary)',
        }}
      >
        {cursorLabel && (
          <span className="text-[8px] font-mono text-green uppercase tracking-wider">
            {cursorLabel}
          </span>
        )}
      </div>
    </div>
  );
}
