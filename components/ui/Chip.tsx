import React, { ReactNode } from 'react';

export interface ChipProps {
  label: string;
  sublabel?: string;
  variant?: 'salmon' | 'fawn' | 'wheat' | 'misty' | 'glass';
  size?: 'sm' | 'md';
  icon?: ReactNode;
  className?: string;
  onClick?: () => void;
}

export function Chip({
  label,
  sublabel,
  variant = 'misty',
  size = 'md',
  icon,
  className = '',
  onClick,
}: ChipProps) {
  const sizeStyles = {
    sm: 'text-xs px-3 py-1 gap-1.5',
    md: 'text-sm px-3.5 py-1.5 gap-2',
  };

  const variantStyles = {
    salmon:
      'bg-salmon-pink/15 text-bole border border-salmon-pink/30 hover:bg-salmon-pink/25',
    fawn:
      'bg-fawn-light text-bole border border-fawn/40 hover:bg-fawn-soft/50',
    wheat:
      'bg-wheat-soft text-bole border border-wheat hover:bg-wheat',
    misty:
      'bg-misty-rose/40 text-bole border border-misty-rose hover:bg-misty-rose/60',
    glass:
      'bg-white/60 backdrop-blur-sm text-bole border border-white/80 shadow-sm hover:bg-white/80',
  };

  const isClickable = Boolean(onClick);
  const interactiveStyles = isClickable
    ? 'cursor-pointer active:scale-95 transition-transform'
    : 'cursor-default';

  return (
    <span
      onClick={onClick}
      className={`inline-flex items-center rounded-full font-serif font-medium shadow-[0_2px_8px_rgba(131,81,62,0.04)] transition-all duration-200 select-none ${sizeStyles[size]} ${variantStyles[variant]} ${interactiveStyles} ${className}`}
    >
      {icon && <span className="inline-flex shrink-0 items-center justify-center">{icon}</span>}
      <span className="whitespace-nowrap">{label}</span>
      {sublabel && (
        <span className="text-[11px] opacity-75 whitespace-nowrap border-l border-bole/20 pl-1.5">
          {sublabel}
        </span>
      )}
    </span>
  );
}
