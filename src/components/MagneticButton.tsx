import { useRef } from 'react';
import { Link } from 'react-router-dom';

interface MagneticButtonProps {
  children: React.ReactNode;
  to?: string;
  href?: string;
  variant?: 'primary' | 'secondary';
  onClick?: () => void;
  className?: string;
  type?: 'button' | 'submit';
}

export default function MagneticButton({
  children,
  to,
  href,
  variant = 'primary',
  onClick,
  className = '',
  type = 'button',
}: MagneticButtonProps) {
  const btnRef = useRef<HTMLButtonElement | HTMLAnchorElement>(null);

  const handleMouseMove = (e: React.MouseEvent) => {
    const btn = btnRef.current;
    if (!btn) return;
    const rect = btn.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    const maxOffset = 4;
    const offsetX = (x / rect.width) * maxOffset * 2;
    const offsetY = (y / rect.height) * maxOffset * 2;
    btn.style.transform = `translate(${offsetX}px, ${offsetY}px)`;
  };

  const handleMouseLeave = () => {
    const btn = btnRef.current;
    if (!btn) return;
    btn.style.transform = 'translate(0, 0)';
  };

  const handleMouseDown = () => {
    const btn = btnRef.current;
    if (!btn) return;
    btn.style.transform = 'scale(0.96)';
  };

  const handleMouseUp = () => {
    const btn = btnRef.current;
    if (!btn) return;
    btn.style.transform = 'translate(0, 0)';
  };

  const baseClasses = `magnetic-btn ${variant === 'primary' ? 'magnetic-btn-primary' : 'magnetic-btn-secondary'} ${className}`;
  const handlers = {
    onMouseMove: handleMouseMove,
    onMouseLeave: handleMouseLeave,
    onMouseDown: handleMouseDown,
    onMouseUp: handleMouseUp,
  };

  if (to) {
    return (
      <Link
        ref={btnRef as React.Ref<HTMLAnchorElement>}
        to={to}
        className={baseClasses}
        {...handlers}
      >
        {children}
      </Link>
    );
  }

  if (href) {
    return (
      <a
        ref={btnRef as React.Ref<HTMLAnchorElement>}
        href={href}
        className={baseClasses}
        {...handlers}
        target="_blank"
        rel="noopener noreferrer"
      >
        {children}
      </a>
    );
  }

  return (
    <button
      ref={btnRef as React.Ref<HTMLButtonElement>}
      type={type}
      onClick={onClick}
      className={baseClasses}
      {...handlers}
    >
      {children}
    </button>
  );
}
