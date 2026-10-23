import React from 'react';

export interface FrostingDripProps {
  fillColor?: string;
  className?: string;
  height?: number;
  showShadow?: boolean;
}

export function FrostingDrip({
  fillColor = '#FFF5F4',
  className = '',
  height = 42,
  showShadow = true,
}: FrostingDripProps) {
  return (
    <div
      className={`w-full overflow-hidden leading-none pointer-events-none select-none relative z-10 ${className}`}
      style={{ height: `${height}px` }}
      aria-hidden="true"
    >
      <svg
        className="w-full h-full block"
        viewBox="0 0 1200 60"
        preserveAspectRatio="none"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Bayangan lembut di bawah lelehan frosting */}
        {showShadow && (
          <path
            d="M0 0H1200V12
               C1160 12 1150 36 1120 36C1090 36 1080 14 1040 14
               C1000 14 990 48 950 48C910 48 900 18 860 18
               C820 18 810 56 770 56C730 56 720 20 680 20
               C640 20 630 38 590 38C550 38 540 16 500 16
               C460 16 450 52 410 52C370 52 360 22 320 22
               C280 22 270 42 230 42C190 42 180 18 140 18
               C100 18 90 46 50 46C20 46 10 16 0 16V0Z"
            fill="rgba(131, 81, 62, 0.05)"
            transform="translate(0, 3)"
          />
        )}

        {/* Lelehan krim frosting utama */}
        <path
          d="M0 0H1200V10
             C1160 10 1150 34 1120 34C1090 34 1080 12 1040 12
             C1000 12 990 46 950 46C910 46 900 16 860 16
             C820 16 810 54 770 54C730 54 720 18 680 18
             C640 18 630 36 590 36C550 36 540 14 500 14
             C460 14 450 50 410 50C370 50 360 20 320 20
             C280 20 270 40 230 40C190 40 180 16 140 16
             C100 16 90 44 50 44C20 44 10 14 0 14V0Z"
          fill={fillColor}
        />

        {/* Kilau putih lembut di puncak tetesan krim */}
        <circle cx="50" cy="38" r="3" fill="#FFFFFF" opacity="0.6" />
        <circle cx="410" cy="44" r="3.5" fill="#FFFFFF" opacity="0.6" />
        <circle cx="770" cy="48" r="4" fill="#FFFFFF" opacity="0.6" />
        <circle cx="950" cy="40" r="3.5" fill="#FFFFFF" opacity="0.6" />
        <circle cx="1120" cy="28" r="2.5" fill="#FFFFFF" opacity="0.6" />
      </svg>
    </div>
  );
}
