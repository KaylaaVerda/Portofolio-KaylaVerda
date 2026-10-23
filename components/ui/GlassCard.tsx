import React, { ElementType, ReactNode } from 'react';

export interface GlassCardProps {
  children: ReactNode;
  as?: ElementType;
  variant?: 'default' | 'tint' | 'frosted' | 'solid';
  hoverEffect?: boolean;
  className?: string;
  id?: string;
}

export function GlassCard({
  children,
  as: Component = 'div',
  variant = 'default',
  hoverEffect = false,
  className = '',
  id,
}: GlassCardProps) {
  // Penentuan gaya dasar glassmorphism dengan dukungan fallback browser
  const variantStyles = {
    // Putih transparan lembut dengan pantulan cahaya
    default:
      'bg-white/70 backdrop-blur-md border border-white/80 shadow-[0_8px_30px_rgba(131,81,62,0.06)]',
    // Sentuhan warna Misty Rose manis
    tint:
      'bg-misty-rose/35 backdrop-blur-md border border-white/70 shadow-[0_8px_32px_rgba(242,138,161,0.12)]',
    // Efek buram pekat seperti gula halus (frosting)
    frosted:
      'bg-white/85 backdrop-blur-lg border border-white/90 shadow-[0_10px_35px_rgba(131,81,62,0.08)]',
    // Solid ramah performa dengan latar krem lembut
    solid:
      'bg-wheat-light border border-misty-rose shadow-[0_6px_24px_rgba(131,81,62,0.05)]',
  };

  // Efek hover halus yang menghormati prefers-reduced-motion
  const hoverStyles = hoverEffect
    ? 'transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-[0_14px_40px_rgba(242,138,161,0.2)] hover:border-salmon-pink/40'
    : '';

  return (
    <Component
      id={id}
      className={`relative rounded-3xl p-6 sm:p-8 transition-colors ${variantStyles[variant]} ${hoverStyles} ${className}`}
    >
      {children}
    </Component>
  );
}
