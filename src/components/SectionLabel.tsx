interface SectionLabelProps {
  text: string;
  className?: string;
}

export default function SectionLabel({ text, className = '' }: SectionLabelProps) {
  return (
    <span className={`section-label ${className}`}>
      {text}
    </span>
  );
}
