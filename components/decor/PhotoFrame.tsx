import React, { ReactNode } from 'react';
import { RibbonBow } from './RibbonBow';
import { Flower } from './Flower';

export interface PhotoFrameProps {
  children: ReactNode;
  shape?: 'oval' | 'arch';
  showRibbon?: boolean;
  showFlowers?: boolean;
  className?: string;
}

export function PhotoFrame({
  children,
  shape = 'arch',
  showRibbon = true,
  showFlowers = true,
  className = '',
}: PhotoFrameProps) {
  // Bentuk arch (kubah atas melengkung anggun, bawah datar) atau oval penuh
  const shapeClasses =
    shape === 'arch'
      ? 'rounded-t-[140px] rounded-b-3xl'
      : 'rounded-full aspect-[3/4]';

  return (
    <div className={`relative inline-block select-none ${className}`}>
      {/* Bingkai luar berlapis ganda gaya scrapbook */}
      <div
        className={`relative p-3.5 sm:p-4 bg-gradient-to-b from-white/90 via-misty-rose-soft/80 to-wheat-soft/90 border-2 border-salmon-pink/40 shadow-[0_16px_40px_rgba(131,81,62,0.12)] ${shapeClasses}`}
      >
        {/* Garis putus-putus aksen jahitan renda */}
        <div
          className={`relative p-2 border-2 border-dashed border-salmon-pink/50 overflow-hidden ${shapeClasses}`}
        >
          {/* Kontainer foto dengan pemotongan rapi (overflow-hidden) */}
          <div
            className={`relative w-64 sm:w-72 md:w-80 h-80 sm:h-96 md:h-[410px] overflow-hidden bg-white/50 ${
              shape === 'arch' ? 'rounded-t-[120px] rounded-b-2xl' : 'rounded-full'
            }`}
          >
            {children}
          </div>
        </div>
      </div>

      {/* Dekorasi pita di puncak bingkai */}
      {showRibbon && (
        <div
          className="absolute -top-5 left-1/2 -translate-x-1/2 z-20 pointer-events-none drop-shadow-sm"
          aria-hidden="true"
        >
          <RibbonBow variant="center" color="salmon" size="md" animate={true} />
        </div>
      )}

      {/* Dekorasi karangan bunga di sudut bawah kiri */}
      {showFlowers && (
        <div
          className="absolute -bottom-4 -left-4 z-20 pointer-events-none drop-shadow-sm"
          aria-hidden="true"
        >
          <Flower variant="blossom" color="salmon" size="md" animate={true} />
        </div>
      )}

      {/* Dekorasi bunga mawar kecil di sudut bawah kanan */}
      {showFlowers && (
        <div
          className="absolute -bottom-3 -right-3 z-20 pointer-events-none drop-shadow-sm"
          aria-hidden="true"
        >
          <Flower variant="rose" color="fawn" size="sm" animate={true} />
        </div>
      )}

      {/* Titik kilau sparkle manis di samping bingkai */}
      <div
        className="absolute top-12 -right-3 z-20 pointer-events-none"
        aria-hidden="true"
      >
        <span className="block h-2.5 w-2.5 rotate-45 rounded-[1px] bg-salmon-pink animate-sparkle-pulse" />
      </div>
    </div>
  );
}
