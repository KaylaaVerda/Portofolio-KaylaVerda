import React from 'react';

export interface SectionTitleProps {
  kicker?: string;
  title: string;
  subtitle?: string;
  align?: 'center' | 'left';
  className?: string;
  id?: string;
}

export function SectionTitle({
  kicker,
  title,
  subtitle,
  align = 'center',
  className = '',
  id,
}: SectionTitleProps) {
  const isCenter = align === 'center';

  return (
    <div
      className={`mb-12 sm:mb-16 flex flex-col ${
        isCenter ? 'items-center text-center' : 'items-start text-left'
      } ${className}`}
    >
      {/* Kicker atau badge kecil di atas judul */}
      {kicker && (
        <span className="mb-3 inline-flex items-center gap-1.5 rounded-full bg-misty-rose/70 px-4 py-1 text-xs sm:text-sm font-medium tracking-wider text-bole uppercase shadow-sm">
          <span className="inline-block h-1.5 w-1.5 rounded-full bg-salmon-pink" aria-hidden="true" />
          {kicker}
        </span>
      )}

      {/* Judul utama dengan font script manis */}
      <h2
        id={id}
        className="font-script text-4xl sm:text-5xl md:text-6xl text-salmon-pink drop-shadow-sm leading-tight"
      >
        {title}
      </h2>

      {/* Garis aksen lembut berhias titik tengah */}
      <div
        className={`my-3 flex items-center gap-2 ${
          isCenter ? 'justify-center' : 'justify-start'
        }`}
        aria-hidden="true"
      >
        <span className="h-[2px] w-8 rounded-full bg-salmon-pink/30" />
        <span className="h-2 w-2 rotate-45 rounded-[2px] bg-salmon-pink" />
        <span className="h-[2px] w-8 rounded-full bg-salmon-pink/30" />
      </div>

      {/* Paragraf pengantar dengan font serif nyaman dibaca */}
      {subtitle && (
        <p className="mt-2 max-w-2xl font-serif text-base sm:text-lg text-bole-soft leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
}
