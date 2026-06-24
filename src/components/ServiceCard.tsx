import type { LucideIcon } from 'lucide-react';

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  variant?: 'dark' | 'light';
}

export default function ServiceCard({ icon: Icon, title, description, variant = 'dark' }: ServiceCardProps) {
  const isDark = variant === 'dark';

  return (
    <div
      className={`group rounded-2xl p-8 transition-all duration-300 border ${
        isDark
          ? 'bg-white/5 border-white/10 hover:border-green/30 hover:shadow-glow-green'
          : 'bg-cream border-charcoal/10 hover:shadow-card-hover'
      }`}
      style={{ transitionTimingFunction: 'var(--ease-primary)' }}
    >
      {/* Icon */}
      <div
        className={`w-14 h-14 rounded-full flex items-center justify-center transition-transform duration-300 group-hover:scale-110 ${
          isDark ? 'bg-green/10' : 'bg-green/10'
        }`}
      >
        <Icon className="w-6 h-6 text-green" />
      </div>

      {/* Title */}
      <h3
        className={`mt-6 font-display font-bold text-xl md:text-2xl ${
          isDark ? 'text-offwhite' : 'text-charcoal'
        }`}
      >
        {title}
      </h3>

      {/* Description */}
      <p className={`mt-3 text-sm leading-relaxed ${isDark ? 'text-gray' : 'text-charcoal/60'}`}>
        {description}
      </p>
    </div>
  );
}
