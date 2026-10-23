import React from 'react';

export interface ImagePlaceholderProps {
  category?: 'design' | 'photo' | 'profile' | 'video' | 'project';
  aspectRatio?: 'square' | 'portrait' | 'landscape' | 'video' | 'auto';
  label?: string;
  sublabel?: string;
  className?: string;
  showDottedBorder?: boolean;
}

export function ImagePlaceholder({
  category = 'design',
  aspectRatio = 'landscape',
  label = 'Pratinjau Karya Segera Hadir',
  sublabel = 'Simpan file gambar di folder public/images',
  className = '',
  showDottedBorder = true,
}: ImagePlaceholderProps) {
  const aspectStyles = {
    square: 'aspect-square',
    portrait: 'aspect-[3/4]',
    landscape: 'aspect-[4/3]',
    video: 'aspect-video',
    auto: 'h-full w-full min-h-[220px]',
  };

  // Ikon SVG inline yang ramah palet warna bakery
  const renderIcon = () => {
    switch (category) {
      case 'profile':
        return (
          <svg
            className="h-16 w-16 text-salmon-pink"
            viewBox="0 0 64 64"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            {/* Siluet profil manis dengan lengkung lembut */}
            <circle cx="32" cy="24" r="14" fill="#FAD6D3" stroke="#83513E" strokeWidth="2" />
            <path
              d="M14 54C14 43 22 38 32 38C42 38 50 43 50 54"
              fill="#F6DFB3"
              stroke="#83513E"
              strokeWidth="2"
              strokeLinecap="round"
            />
            {/* Hiasan pita mungil di rambut */}
            <circle cx="42" cy="16" r="3.5" fill="#F28AA1" />
            <circle cx="45" cy="18" r="3" fill="#E7AE75" />
          </svg>
        );

      case 'photo':
        return (
          <svg
            className="h-14 w-14 text-salmon-pink"
            viewBox="0 0 64 64"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            {/* Bodi kamera dengan sudut membulat */}
            <rect
              x="10"
              y="18"
              width="44"
              height="34"
              rx="8"
              fill="#FCE3E1"
              stroke="#83513E"
              strokeWidth="2"
            />
            <path
              d="M22 18L25 12H39L42 18"
              fill="#F6DFB3"
              stroke="#83513E"
              strokeWidth="2"
              strokeLinejoin="round"
            />
            {/* Lensa kamera bulat berhias rona pink */}
            <circle cx="32" cy="35" r="11" fill="#FFF5F4" stroke="#83513E" strokeWidth="2" />
            <circle cx="32" cy="35" r="6" fill="#F28AA1" />
            <circle cx="30" cy="33" r="2" fill="#FFFFFF" />
            {/* Lampu flash */}
            <circle cx="45" cy="25" r="2.5" fill="#E7AE75" />
          </svg>
        );

      case 'video':
        return (
          <svg
            className="h-14 w-14 text-salmon-pink"
            viewBox="0 0 64 64"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            {/* Layar pemutar video */}
            <rect
              x="8"
              y="14"
              width="48"
              height="36"
              rx="8"
              fill="#FAEDCE"
              stroke="#83513E"
              strokeWidth="2"
            />
            {/* Tombol segitiga play */}
            <path
              d="M27 24L43 32L27 40V24Z"
              fill="#F28AA1"
              stroke="#83513E"
              strokeWidth="2"
              strokeLinejoin="round"
            />
          </svg>
        );

      case 'project':
        return (
          <svg
            className="h-14 w-14 text-salmon-pink"
            viewBox="0 0 64 64"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            {/* Jendela peramban web */}
            <rect
              x="8"
              y="12"
              width="48"
              height="40"
              rx="6"
              fill="#FFF5F4"
              stroke="#83513E"
              strokeWidth="2"
            />
            <line x1="8" y1="22" x2="56" y2="22" stroke="#83513E" strokeWidth="1.5" />
            {/* Titik jendela pastel */}
            <circle cx="15" cy="17" r="2" fill="#F28AA1" />
            <circle cx="21" cy="17" r="2" fill="#E7AE75" />
            <circle cx="27" cy="17" r="2" fill="#F6DFB3" />
            {/* Simbol kurung kode manis */}
            <path
              d="M25 31L19 36L25 41"
              stroke="#83513E"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M39 31L45 36L39 41"
              stroke="#83513E"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <line
              x1="34"
              y1="29"
              x2="30"
              y2="43"
              stroke="#F28AA1"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        );

      case 'design':
      default:
        return (
          <svg
            className="h-14 w-14 text-salmon-pink"
            viewBox="0 0 64 64"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            {/* Kanvas palet seni dengan lekukan halus */}
            <path
              d="M32 10C18 10 10 20 10 32C10 44 20 54 32 54C37 54 41 50 41 46C41 44.5 40.5 43 39.5 42C38.5 41 38 39.5 38 38C38 35 41 32 44 32H48C52.5 32 56 28.5 56 24C56 16 45 10 32 10Z"
              fill="#FDF9EE"
              stroke="#83513E"
              strokeWidth="2"
            />
            {/* Titik cat warna palet */}
            <circle cx="22" cy="22" r="3.5" fill="#F28AA1" />
            <circle cx="33" cy="18" r="3.5" fill="#E7AE75" />
            <circle cx="44" cy="24" r="3.5" fill="#FAD6D3" />
            <circle cx="20" cy="34" r="3.5" fill="#83513E" />
          </svg>
        );
    }
  };

  const borderStyle = showDottedBorder
    ? 'border-2 border-dashed border-salmon-pink/35'
    : 'border border-salmon-pink/20';

  return (
    <div
      className={`relative flex flex-col items-center justify-center overflow-hidden rounded-2xl bg-gradient-to-br from-wheat-light via-misty-rose-light to-salmon-pink-light/30 p-6 text-center select-none ${aspectStyles[aspectRatio]} ${borderStyle} ${className}`}
      role="img"
      aria-label={`${label}. ${sublabel}`}
    >
      {/* Latar motif taburan sprinkle transparan lembut */}
      <div className="absolute inset-0 opacity-15 pointer-events-none" aria-hidden="true">
        <div className="absolute top-4 left-6 h-2 w-5 -rotate-45 rounded-full bg-salmon-pink" />
        <div className="absolute top-8 right-10 h-2 w-4 rotate-12 rounded-full bg-fawn" />
        <div className="absolute bottom-6 left-12 h-2 w-4 rotate-45 rounded-full bg-wheat" />
        <div className="absolute bottom-8 right-6 h-2 w-5 -rotate-12 rounded-full bg-salmon-pink" />
      </div>

      {/* Konten ikon dan keterangan */}
      <div className="relative z-10 flex flex-col items-center">
        <div className="mb-3 transform transition-transform duration-300 hover:scale-105">
          {renderIcon()}
        </div>
        <p className="font-serif text-sm font-semibold text-bole">{label}</p>
        {sublabel && (
          <p className="mt-1 font-serif text-xs text-bole-soft max-w-[240px]">
            {sublabel}
          </p>
        )}
      </div>
    </div>
  );
}
