import React, { ReactNode } from 'react';

export interface ScrapbookStickerProps {
  children: ReactNode;
  variant?: 'scalloped' | 'washi' | 'tag';
  color?: 'wheat' | 'misty' | 'fawn' | 'white';
  rotation?: 'none' | 'left' | 'right';
  className?: string;
}

export function ScrapbookSticker({
  children,
  variant = 'washi',
  color = 'wheat',
  rotation = 'none',
  className = '',
}: ScrapbookStickerProps) {
  const colorStyles = {
    wheat: 'bg-wheat-soft border-wheat text-bole shadow-sm',
    misty: 'bg-misty-rose-soft border-misty-rose text-bole shadow-sm',
    fawn: 'bg-fawn-light border-fawn/40 text-bole shadow-sm',
    white: 'bg-white/90 border-white text-bole shadow-sm',
  };

  const rotationStyles = {
    none: 'rotate-0',
    left: '-rotate-2',
    right: 'rotate-2',
  };

  // Varian Washi Tape: Stiker dengan potongan selotip transparan di atasnya
  if (variant === 'washi') {
    return (
      <div
        className={`relative inline-flex items-center justify-center pt-3 pb-2 px-5 rounded-xl border ${colorStyles[color]} ${rotationStyles[rotation]} transition-transform hover:scale-105 duration-200 ${className}`}
      >
        {/* Potongan selotip washi tape pastel di atas stiker */}
        <div
          className="absolute -top-2 left-1/2 -translate-x-1/2 w-14 h-4 bg-salmon-pink/35 border-t border-b border-salmon-pink/40 shadow-xs backdrop-blur-xs -rotate-2 select-none pointer-events-none"
          style={{
            clipPath: 'polygon(5% 0%, 95% 0%, 100% 100%, 0% 100%)',
          }}
          aria-hidden="true"
        />
        <div className="font-serif font-medium text-xs sm:text-sm tracking-wide z-10">
          {children}
        </div>
      </div>
    );
  }

  // Varian Scalloped: Stiker dengan tepi bergerigi membulat manis
  if (variant === 'scalloped') {
    return (
      <div
        className={`relative inline-flex items-center justify-center py-2 px-6 rounded-full border-2 border-dashed border-salmon-pink/40 ${colorStyles[color]} ${rotationStyles[rotation]} transition-transform hover:scale-105 duration-200 ${className}`}
      >
        <span className="font-serif font-medium text-xs sm:text-sm tracking-wide">
          {children}
        </span>
      </div>
    );
  }

  // Varian Tag: Label gantung dengan lubang kecil
  return (
    <div
      className={`relative inline-flex items-center justify-center py-2 pl-7 pr-4 rounded-lg border ${colorStyles[color]} ${rotationStyles[rotation]} transition-transform hover:scale-105 duration-200 ${className}`}
    >
      {/* Lubang gantungan stiker */}
      <span
        className="absolute left-2.5 top-1/2 -translate-y-1/2 h-2.5 w-2.5 rounded-full bg-bole/20 border border-white"
        aria-hidden="true"
      />
      <span className="font-serif font-medium text-xs sm:text-sm tracking-wide">
        {children}
      </span>
    </div>
  );
}
