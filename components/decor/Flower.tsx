import React from 'react';

export interface FlowerProps {
  variant?: 'blossom' | 'rose' | 'bud' | 'bouquet';
  color?: 'salmon' | 'misty' | 'fawn' | 'wheat';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  animate?: boolean;
}

export function Flower({
  variant = 'blossom',
  color = 'salmon',
  size = 'md',
  className = '',
  animate = false,
}: FlowerProps) {
  const colorMap = {
    salmon: {
      petal: '#F28AA1',
      petalSoft: '#FBD4DC',
      center: '#F6DFB3',
      stroke: '#83513E',
      leaf: '#E7AE75',
    },
    misty: {
      petal: '#FAD6D3',
      petalSoft: '#FFF5F4',
      center: '#E7AE75',
      stroke: '#83513E',
      leaf: '#FAEDCE',
    },
    fawn: {
      petal: '#E7AE75',
      petalSoft: '#F8E7D4',
      center: '#F28AA1',
      stroke: '#83513E',
      leaf: '#F6DFB3',
    },
    wheat: {
      petal: '#F6DFB3',
      petalSoft: '#FDF9EE',
      center: '#F28AA1',
      stroke: '#83513E',
      leaf: '#E7AE75',
    },
  };

  const c = colorMap[color];

  const sizeMap = {
    sm: 'w-6 h-6',
    md: 'w-9 h-9',
    lg: 'w-14 h-14',
  };

  const animClass = animate ? 'animate-float-gentle' : '';

  // Varian 1: Blossom (Bunga mekar 5 kelopak halus)
  if (variant === 'blossom') {
    return (
      <svg
        viewBox="0 0 44 44"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`${sizeMap[size]} ${animClass} ${className}`}
        aria-hidden="true"
      >
        <g transform="translate(22, 22)">
          {/* 5 Kelopak dengan kurva bezier membulat */}
          {[0, 72, 144, 216, 288].map((angle, idx) => (
            <g key={idx} transform={`rotate(${angle})`}>
              <path
                d="M0 0 C-6 -8, -10 -18, 0 -21 C10 -18, 6 -8, 0 0 Z"
                fill={c.petal}
                stroke={c.stroke}
                strokeWidth="1.1"
              />
              <path
                d="M0 -3 C-3 -9, -4 -14, 0 -17 C4 -14, 3 -9, 0 -3 Z"
                fill={c.petalSoft}
                opacity="0.8"
              />
            </g>
          ))}
          {/* Titik tengah sari bunga */}
          <circle cx="0" cy="0" r="4.5" fill={c.center} stroke={c.stroke} strokeWidth="1.1" />
          <circle cx="-1" cy="-1" r="1.2" fill="#FFFFFF" opacity="0.9" />
        </g>
      </svg>
    );
  }

  // Varian 2: Rose (Bunga bulat berlapis / rosette)
  if (variant === 'rose') {
    return (
      <svg
        viewBox="0 0 44 44"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`${sizeMap[size]} ${animClass} ${className}`}
        aria-hidden="true"
      >
        {/* Daun belakang */}
        <path
          d="M8 32C4 28 6 18 16 22C14 28 10 32 8 32Z"
          fill={c.leaf}
          stroke={c.stroke}
          strokeWidth="1.1"
        />
        <path
          d="M36 32C40 28 38 18 28 22C30 28 34 32 36 32Z"
          fill={c.leaf}
          stroke={c.stroke}
          strokeWidth="1.1"
        />
        {/* Lapisan kelopak luar mawar */}
        <circle cx="22" cy="22" r="15" fill={c.petalSoft} stroke={c.stroke} strokeWidth="1.1" />
        {/* Kelopak tengah bergelombang */}
        <path
          d="M12 20C12 14 18 10 24 11C29 12 32 17 31 22C30 27 24 31 18 29C14 27 12 24 12 20Z"
          fill={c.petal}
          stroke={c.stroke}
          strokeWidth="1.1"
        />
        {/* Lipatan pusaran kelopak dalam */}
        <path
          d="M17 18C18 15 22 14 25 16C28 18 27 22 24 24C21 26 18 24 17 22"
          fill={c.petalSoft}
          stroke={c.stroke}
          strokeWidth="1.1"
          strokeLinecap="round"
        />
        {/* Titik pusat kuncup mawar */}
        <circle cx="22" cy="19" r="2.5" fill={c.center} />
      </svg>
    );
  }

  // Varian 3: Bud (Kuntum bunga kecil dengan tangkai dan daun)
  if (variant === 'bud') {
    return (
      <svg
        viewBox="0 0 36 36"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`${sizeMap[size]} ${animClass} ${className}`}
        aria-hidden="true"
      >
        {/* Tangkai melengkung halus */}
        <path
          d="M18 32C18 24 16 18 18 14"
          stroke={c.stroke}
          strokeWidth="1.4"
          strokeLinecap="round"
        />
        {/* Daun kecil kiri */}
        <path
          d="M17 25C12 24 9 20 11 16C15 17 17 21 17 25Z"
          fill={c.leaf}
          stroke={c.stroke}
          strokeWidth="1"
        />
        {/* Daun kecil kanan */}
        <path
          d="M18 21C22 20 25 17 24 13C20 14 18 17 18 21Z"
          fill={c.leaf}
          stroke={c.stroke}
          strokeWidth="1"
        />
        {/* Kelopak kuncup */}
        <path
          d="M13 14C11 8 16 4 18 4C20 4 25 8 23 14C21 17 15 17 13 14Z"
          fill={c.petal}
          stroke={c.stroke}
          strokeWidth="1.1"
        />
        <path
          d="M15 12C14 8 17 5 18 5C19 5 22 8 21 12C19 14 16 14 15 12Z"
          fill={c.petalSoft}
        />
      </svg>
    );
  }

  // Varian 4: Bouquet (Karangan bunga mini cantik dengan daun dan kuntum pendukung)
  return (
    <svg
      viewBox="0 0 64 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`w-16 h-12 ${animClass} ${className}`}
      aria-hidden="true"
    >
      {/* Daun latar kiri */}
      <path
        d="M22 28C14 26 8 20 10 12C16 14 20 20 22 28Z"
        fill="#E7AE75"
        stroke="#83513E"
        strokeWidth="1.1"
      />
      {/* Daun latar kanan */}
      <path
        d="M42 28C50 26 56 20 54 12C48 14 44 20 42 28Z"
        fill="#E7AE75"
        stroke="#83513E"
        strokeWidth="1.1"
      />
      {/* Bunga samping kiri (kuntum) */}
      <circle cx="20" cy="28" r="7" fill="#FAD6D3" stroke="#83513E" strokeWidth="1" />
      <circle cx="20" cy="28" r="2.5" fill="#E7AE75" />

      {/* Bunga samping kanan (kuntum) */}
      <circle cx="44" cy="28" r="7" fill="#F6DFB3" stroke="#83513E" strokeWidth="1" />
      <circle cx="44" cy="28" r="2.5" fill="#F28AA1" />

      {/* Bunga mekar utama di tengah */}
      <circle cx="32" cy="24" r="11" fill="#F28AA1" stroke="#83513E" strokeWidth="1.2" />
      <circle cx="32" cy="24" r="7.5" fill="#FBD4DC" />
      <circle cx="32" cy="24" r="3.5" fill="#F6DFB3" stroke="#83513E" strokeWidth="0.8" />
      <circle cx="31" cy="23" r="1" fill="#FFFFFF" />
    </svg>
  );
}
