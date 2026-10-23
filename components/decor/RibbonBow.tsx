import React from 'react';

export interface RibbonBowProps {
  variant?: 'center' | 'corner' | 'divider';
  color?: 'salmon' | 'fawn' | 'misty';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  animate?: boolean;
}

export function RibbonBow({
  variant = 'center',
  color = 'salmon',
  size = 'md',
  className = '',
  animate = false,
}: RibbonBowProps) {
  // Pengaturan warna pita berdasarkan palet bakery
  const colorMap = {
    salmon: {
      main: '#F28AA1',
      dark: '#E27690',
      light: '#FBD4DC',
      stroke: '#83513E',
    },
    fawn: {
      main: '#E7AE75',
      dark: '#D69B60',
      light: '#F8E7D4',
      stroke: '#83513E',
    },
    misty: {
      main: '#FAD6D3',
      dark: '#EDB8B4',
      light: '#FFF5F4',
      stroke: '#83513E',
    },
  };

  const c = colorMap[color];

  const sizeMap = {
    sm: 'w-8 h-8',
    md: 'w-12 h-12',
    lg: 'w-16 h-16',
  };

  const animClass = animate ? 'animate-float-gentle' : '';

  // Varian divider memanjang horizontal dengan pita di tengah
  if (variant === 'divider') {
    return (
      <div
        className={`flex items-center justify-center w-full gap-3 ${className}`}
        aria-hidden="true"
      >
        <div className="h-[1.5px] flex-1 bg-gradient-to-r from-transparent via-salmon-pink/40 to-salmon-pink/60 rounded-full" />
        <svg
          viewBox="0 0 48 36"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-8 h-6 shrink-0"
        >
          {/* Ekor pita kiri */}
          <path
            d="M21 21C17 28 12 32 6 34C10 27 12 25 15 20L21 21Z"
            fill={c.dark}
            stroke={c.stroke}
            strokeWidth="1.2"
            strokeLinejoin="round"
          />
          {/* Ekor pita kanan */}
          <path
            d="M27 21C31 28 36 32 42 34C38 27 36 25 33 20L27 21Z"
            fill={c.dark}
            stroke={c.stroke}
            strokeWidth="1.2"
            strokeLinejoin="round"
          />
          {/* Sayap pita kiri */}
          <path
            d="M22 17C17 10 9 7 4 10C-1 14 3 24 13 22C18 21 21 19 22 17Z"
            fill={c.main}
            stroke={c.stroke}
            strokeWidth="1.2"
          />
          {/* Lipatan dalam sayap kiri */}
          <path
            d="M17 14C12 12 8 13 6 15"
            stroke={c.stroke}
            strokeWidth="1"
            strokeLinecap="round"
          />
          {/* Sayap pita kanan */}
          <path
            d="M26 17C31 10 39 7 44 10C49 14 45 24 35 22C30 21 27 19 26 17Z"
            fill={c.main}
            stroke={c.stroke}
            strokeWidth="1.2"
          />
          {/* Lipatan dalam sayap kanan */}
          <path
            d="M31 14C36 12 40 13 42 15"
            stroke={c.stroke}
            strokeWidth="1"
            strokeLinecap="round"
          />
          {/* Simpul tengah */}
          <ellipse
            cx="24"
            cy="17"
            rx="4.5"
            ry="4"
            fill={c.light}
            stroke={c.stroke}
            strokeWidth="1.2"
          />
        </svg>
        <div className="h-[1.5px] flex-1 bg-gradient-to-l from-transparent via-salmon-pink/40 to-salmon-pink/60 rounded-full" />
      </div>
    );
  }

  // Varian corner: pita miring untuk sudut kartu atau foto
  if (variant === 'corner') {
    return (
      <svg
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`${sizeMap[size]} ${animClass} ${className}`}
        aria-hidden="true"
      >
        <g transform="rotate(-25 24 24)">
          {/* Ekor kiri menjuntai */}
          <path
            d="M20 26C15 36 9 42 2 46C7 38 9 34 14 26L20 26Z"
            fill={c.dark}
            stroke={c.stroke}
            strokeWidth="1.2"
            strokeLinejoin="round"
          />
          {/* Ekor kanan menjuntai */}
          <path
            d="M28 26C33 36 39 42 46 46C41 38 39 34 34 26L28 26Z"
            fill={c.dark}
            stroke={c.stroke}
            strokeWidth="1.2"
            strokeLinejoin="round"
          />
          {/* Sayap pita kiri */}
          <path
            d="M22 20C17 12 8 8 3 12C-2 17 3 27 14 24C19 23 21 21 22 20Z"
            fill={c.main}
            stroke={c.stroke}
            strokeWidth="1.2"
          />
          <path
            d="M17 17C12 14 7 15 5 18"
            stroke={c.stroke}
            strokeWidth="1"
            strokeLinecap="round"
          />
          {/* Sayap pita kanan */}
          <path
            d="M26 20C31 12 40 8 45 12C50 17 45 27 34 24C29 23 27 21 26 20Z"
            fill={c.main}
            stroke={c.stroke}
            strokeWidth="1.2"
          />
          <path
            d="M31 17C36 14 41 15 43 18"
            stroke={c.stroke}
            strokeWidth="1"
            strokeLinecap="round"
          />
          {/* Simpul tengah pita */}
          <ellipse
            cx="24"
            cy="20.5"
            rx="5"
            ry="4.5"
            fill={c.light}
            stroke={c.stroke}
            strokeWidth="1.2"
          />
        </g>
      </svg>
    );
  }

  // Varian center: pita simetris klasik dengan dua ekor menjuntai
  return (
    <svg
      viewBox="0 0 56 46"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`${sizeMap[size]} ${animClass} ${className}`}
      aria-hidden="true"
    >
      {/* Ekor pita kiri */}
      <path
        d="M24 24C19 33 13 40 4 44C10 35 12 32 17 25L24 24Z"
        fill={c.dark}
        stroke={c.stroke}
        strokeWidth="1.4"
        strokeLinejoin="round"
      />
      {/* Ekor pita kanan */}
      <path
        d="M32 24C37 33 43 40 52 44C46 35 44 32 39 25L32 24Z"
        fill={c.dark}
        stroke={c.stroke}
        strokeWidth="1.4"
        strokeLinejoin="round"
      />
      {/* Sayap kiri */}
      <path
        d="M25 18C19 9 9 5 3 9C-3 14 3 26 16 23C21 22 24 20 25 18Z"
        fill={c.main}
        stroke={c.stroke}
        strokeWidth="1.4"
      />
      <path
        d="M20 15C14 12 8 13 5 16"
        stroke={c.stroke}
        strokeWidth="1.1"
        strokeLinecap="round"
      />
      {/* Sayap kanan */}
      <path
        d="M31 18C37 9 47 5 53 9C59 14 53 26 40 23C35 22 32 20 31 18Z"
        fill={c.main}
        stroke={c.stroke}
        strokeWidth="1.4"
      />
      <path
        d="M36 15C42 12 48 13 51 16"
        stroke={c.stroke}
        strokeWidth="1.1"
        strokeLinecap="round"
      />
      {/* Simpul tengah */}
      <ellipse
        cx="28"
        cy="18.5"
        rx="5.5"
        ry="5"
        fill={c.light}
        stroke={c.stroke}
        strokeWidth="1.4"
      />
      {/* Lipatan simpul */}
      <path
        d="M27 15V22"
        stroke={c.stroke}
        strokeWidth="1"
        strokeLinecap="round"
      />
    </svg>
  );
}
