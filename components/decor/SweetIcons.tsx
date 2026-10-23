import React from 'react';

// ==========================================
// 1. CHERRY (Buah Ceri Manis)
// ==========================================
export interface CherryProps {
  variant?: 'single' | 'twin';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  animate?: boolean;
}

export function Cherry({
  variant = 'twin',
  size = 'md',
  className = '',
  animate = false,
}: CherryProps) {
  const sizeMap = {
    sm: 'w-5 h-5',
    md: 'w-7 h-7',
    lg: 'w-10 h-10',
  };

  const animClass = animate ? 'animate-float-gentle' : '';

  if (variant === 'single') {
    return (
      <svg
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`${sizeMap[size]} ${animClass} ${className}`}
        aria-hidden="true"
      >
        {/* Tangkai ceri melengkung */}
        <path
          d="M15 19C16 12 21 6 25 5"
          stroke="#83513E"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        {/* Daun mungil */}
        <path
          d="M21 7C24 6 27 8 26 11C23 11 21 9 21 7Z"
          fill="#E7AE75"
          stroke="#83513E"
          strokeWidth="0.8"
        />
        {/* Buah ceri */}
        <circle cx="14" cy="21" r="7" fill="#F28AA1" stroke="#83513E" strokeWidth="1.2" />
        <circle cx="12" cy="19" r="2" fill="#FFF5F4" />
      </svg>
    );
  }

  // Ceri kembar berpasangan
  return (
    <svg
      viewBox="0 0 36 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`${sizeMap[size]} ${animClass} ${className}`}
      aria-hidden="true"
    >
      {/* Daun penghubung tangkai atas */}
      <path
        d="M18 5C22 3 26 6 24 9C20 9 18 7 18 5Z"
        fill="#E7AE75"
        stroke="#83513E"
        strokeWidth="1"
      />
      {/* Tangkai kiri */}
      <path
        d="M12 21C13 14 16 9 18 5"
        stroke="#83513E"
        strokeWidth="1.3"
        strokeLinecap="round"
      />
      {/* Tangkai kanan */}
      <path
        d="M24 23C23 15 20 9 18 5"
        stroke="#83513E"
        strokeWidth="1.3"
        strokeLinecap="round"
      />
      {/* Buah ceri kiri */}
      <circle cx="11" cy="23" r="6" fill="#F28AA1" stroke="#83513E" strokeWidth="1.1" />
      <circle cx="9.5" cy="21" r="1.8" fill="#FFF5F4" />

      {/* Buah ceri kanan */}
      <circle cx="25" cy="24" r="6" fill="#F28AA1" stroke="#83513E" strokeWidth="1.1" />
      <circle cx="23.5" cy="22" r="1.8" fill="#FFF5F4" />
    </svg>
  );
}

// ==========================================
// 2. CUPCAKE (Kue Mungil)
// ==========================================
export interface CupcakeProps {
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  animate?: boolean;
}

export function Cupcake({
  size = 'md',
  className = '',
  animate = false,
}: CupcakeProps) {
  const sizeMap = {
    sm: 'w-6 h-6',
    md: 'w-9 h-9',
    lg: 'w-14 h-14',
  };

  const animClass = animate ? 'animate-float-gentle' : '';

  return (
    <svg
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`${sizeMap[size]} ${animClass} ${className}`}
      aria-hidden="true"
    >
      {/* Cup / Mangkuk kertas berlipit */}
      <path
        d="M9 20L12 34C12.2 35.1 13.2 36 14.4 36H25.6C26.8 36 27.8 35.1 28 34L31 20H9Z"
        fill="#E7AE75"
        stroke="#83513E"
        strokeWidth="1.3"
        strokeLinejoin="round"
      />
      {/* Garis lipit kertas mangkuk */}
      <path d="M15 21L16 35" stroke="#83513E" strokeWidth="0.9" strokeLinecap="round" />
      <path d="M20 21L20 35" stroke="#83513E" strokeWidth="0.9" strokeLinecap="round" />
      <path d="M25 21L24 35" stroke="#83513E" strokeWidth="0.9" strokeLinecap="round" />

      {/* Lapisan krim bawah */}
      <path
        d="M8 20C7 16 11 14 14 15C15 11 20 10 22 13C25 11 29 13 30 16C32 17 33 19 32 21C30 23 10 23 8 20Z"
        fill="#FAD6D3"
        stroke="#83513E"
        strokeWidth="1.2"
      />

      {/* Pusaran krim atas manis */}
      <path
        d="M11 17C10.5 14 13 12 15 13C16 10 21 9 22.5 11C25 10 28 12 28.5 14C30 15 29.5 17 28 18C25 19 13 19 11 17Z"
        fill="#F28AA1"
      />

      {/* Buah ceri di puncak cupcake */}
      <circle cx="20" cy="8" r="3.8" fill="#F28AA1" stroke="#83513E" strokeWidth="1" />
      <circle cx="19" cy="7" r="1" fill="#FFF5F4" />
      <path
        d="M20.5 5C21.5 3 24 2.5 25 3"
        stroke="#83513E"
        strokeWidth="1"
        strokeLinecap="round"
      />
    </svg>
  );
}

// ==========================================
// 3. SPRINKLES (Taburan Manis)
// ==========================================
export interface SprinklesProps {
  variant?: 'cluster' | 'scatter';
  className?: string;
}

export function Sprinkles({
  variant = 'cluster',
  className = '',
}: SprinklesProps) {
  if (variant === 'scatter') {
    return (
      <svg
        viewBox="0 0 60 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`w-14 h-10 ${className}`}
        aria-hidden="true"
      >
        {/* Butir sprinkle berbentuk kapsul memanjang */}
        <rect x="8" y="10" width="7" height="2.5" rx="1.2" transform="rotate(-30 8 10)" fill="#F28AA1" />
        <rect x="25" y="8" width="8" height="2.5" rx="1.2" transform="rotate(20 25 8)" fill="#E7AE75" />
        <rect x="44" y="12" width="7" height="2.5" rx="1.2" transform="rotate(-15 44 12)" fill="#F6DFB3" />
        <rect x="16" y="26" width="8" height="2.5" rx="1.2" transform="rotate(45 16 26)" fill="#FAD6D3" />
        <rect x="36" y="24" width="7" height="2.5" rx="1.2" transform="rotate(-25 36 24)" fill="#F28AA1" />
        {/* Titik sprinkle bulat */}
        <circle cx="12" cy="18" r="1.5" fill="#E7AE75" />
        <circle cx="34" cy="16" r="1.5" fill="#FAD6D3" />
        <circle cx="48" cy="28" r="1.5" fill="#F28AA1" />
      </svg>
    );
  }

  // Gugusan sprinkle rapat untuk aksen sudut
  return (
    <svg
      viewBox="0 0 36 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`w-9 h-6 ${className}`}
      aria-hidden="true"
    >
      <rect x="6" y="6" width="6" height="2.2" rx="1.1" transform="rotate(-25 6 6)" fill="#F28AA1" />
      <rect x="18" y="4" width="7" height="2.2" rx="1.1" transform="rotate(35 18 4)" fill="#E7AE75" />
      <rect x="22" y="14" width="6" height="2.2" rx="1.1" transform="rotate(-40 22 14)" fill="#F6DFB3" />
      <circle cx="10" cy="16" r="1.3" fill="#FAD6D3" />
      <circle cx="28" cy="8" r="1.3" fill="#F28AA1" />
    </svg>
  );
}

// ==========================================
// 4. SPARKLE (Kilau Bintang Manis)
// ==========================================
export interface SparkleProps {
  size?: 'sm' | 'md' | 'lg';
  color?: 'salmon' | 'fawn' | 'wheat';
  className?: string;
  animate?: boolean;
}

export function Sparkle({
  size = 'md',
  color = 'salmon',
  className = '',
  animate = true,
}: SparkleProps) {
  const colorMap = {
    salmon: '#F28AA1',
    fawn: '#E7AE75',
    wheat: '#F6DFB3',
  };

  const sizeMap = {
    sm: 'w-4 h-4',
    md: 'w-6 h-6',
    lg: 'w-8 h-8',
  };

  const animClass = animate ? 'animate-sparkle-pulse' : '';

  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`${sizeMap[size]} ${animClass} ${className}`}
      aria-hidden="true"
    >
      {/* Bintang 4 sudut dengan kurva bezier lembut */}
      <path
        d="M12 2C12 7.5 16.5 12 22 12C16.5 12 12 16.5 12 22C12 16.5 7.5 12 2 12C7.5 12 12 7.5 12 2Z"
        fill={colorMap[color]}
      />
    </svg>
  );
}
