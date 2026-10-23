'use client';

import React, { useState } from 'react';
import { photographyIntro, photographyItems } from '@/data/photography';
import { SectionTitle } from '@/components/ui/SectionTitle';
import { SafeImage } from '@/components/ui/SafeImage';
import { Reveal } from '@/components/ui/Reveal';
import { Lightbox, LightboxItem } from '@/components/ui/Lightbox';
import { Sparkle, Sprinkles } from '@/components/decor/SweetIcons';
import { ScallopedEdge } from '@/components/decor/ScallopedEdge';

export function PhotographySection() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  // Variasi rotasi scrapbook polaroid agar tampak organik dan artistik
  const rotations = [
    '-rotate-1.5 hover:rotate-0',
    'rotate-2 hover:rotate-0',
    '-rotate-2 hover:rotate-0',
    'rotate-1.5 hover:rotate-0',
    '-rotate-1 hover:rotate-0',
    'rotate-2 hover:rotate-0',
  ];

  // Variasi warna selotip washi tape pastel di atas polaroid
  const tapeColors = [
    'bg-salmon-pink/35 border-salmon-pink/40',
    'bg-wheat/55 border-fawn/40',
    'bg-misty-rose/60 border-salmon-pink/30',
    'bg-fawn-soft/45 border-fawn/40',
    'bg-salmon-pink/35 border-salmon-pink/40',
    'bg-wheat/55 border-fawn/40',
  ];

  // Konversi data foto ke format LightboxItem (tanpa deskripsi sesuai permintaan agar fokus ke foto)
  const lightboxItems: LightboxItem[] = photographyItems.map((item) => ({
    id: item.id,
    title: item.title,
    image: item.image,
    tags: item.tags,
    location: item.location,
    category: 'photo',
  }));

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  return (
    <section
      id="fotografi"
      className="relative py-20 sm:py-24 overflow-hidden"
      aria-label="Bagian Galeri Fotografi"
    >
      {/* Hiasan latar belakang taburan sprinkle dan kilau */}
      <div className="absolute top-16 left-6 pointer-events-none opacity-40" aria-hidden="true">
        <Sprinkles variant="cluster" />
      </div>
      <div className="absolute bottom-16 right-8 pointer-events-none opacity-50" aria-hidden="true">
        <Sparkle size="lg" color="salmon" />
      </div>

      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        
        {/* Judul Section Fotografi */}
        <SectionTitle
          kicker="Hobi dan Lensa"
          title={photographyIntro.title}
          subtitle={photographyIntro.description}
          align="center"
        />

        {/* Galeri Grid Gaya Polaroid Scrapbook */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 pt-4">
          {photographyItems.map((item, index) => {
            const rotClass = rotations[index % rotations.length];
            const tapeClass = tapeColors[index % tapeColors.length];

            return (
              <Reveal key={item.id} direction="up" delay={0.12 * (index + 1)}>
                <div
                  role="button"
                  tabIndex={0}
                  onClick={() => openLightbox(index)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      openLightbox(index);
                    }
                  }}
                  className={`group relative cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-bole rounded-3xl transition-all duration-300 ${rotClass}`}
                  aria-label={`Buka foto: ${item.title}`}
                >
                  {/* Kartu Fisik Foto Polaroid */}
                  <div className="relative p-4 sm:p-5 pb-5 sm:pb-6 bg-white/95 backdrop-blur-md rounded-2xl shadow-[0_12px_32px_rgba(131,81,62,0.12)] border border-white hover:shadow-[0_20px_48px_rgba(242,138,161,0.26)] transition-shadow">
                    
                    {/* Potongan Selotip Washi Tape Scrapbook di Atas Foto */}
                    <div
                      className={`absolute -top-3 left-1/2 -translate-x-1/2 w-16 h-4.5 border-t border-b shadow-xs backdrop-blur-xs select-none pointer-events-none -rotate-1 z-20 ${tapeClass}`}
                      style={{
                        clipPath: 'polygon(5% 0%, 95% 0%, 100% 100%, 0% 100%)',
                      }}
                      aria-hidden="true"
                    />

                    {/* Wadah Foto Persegi Seragam */}
                    <div className="relative w-full aspect-square overflow-hidden rounded-xl bg-wheat-light/40 mb-4 border border-bole/10">
                      <SafeImage
                        src={item.image}
                        alt={item.title}
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                        fallbackCategory="photo"
                        fallbackLabel={item.title}
                        fallbackSublabel="Klik untuk memperbesar foto"
                      />

                      {/* Efek Kilau Transparan saat Hover */}
                      <div className="absolute inset-0 bg-salmon-pink/10 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center pointer-events-none">
                        <span className="rounded-full bg-white/95 px-3.5 py-1.5 font-serif text-xs font-semibold text-bole shadow-sweet transform translate-y-1 group-hover:translate-y-0 transition-transform">
                          Lihat Penuh
                        </span>
                      </div>
                    </div>

                    {/* Bagian Bawah Khas Polaroid (Teks Tulisan Tangan Script dan Lokasi) */}
                    <div className="text-center px-1">
                      {/* Judul Foto Gaya Tulisan Tangan Script */}
                      <h3 className="font-script text-2xl sm:text-3xl text-salmon-pink group-hover:scale-102 transition-transform line-clamp-1">
                        {item.title}
                      </h3>

                      {/* Lokasi Pemotretan */}
                      {item.location && (
                        <div className="mt-1 flex items-center justify-center gap-1 text-xs font-serif text-bole-soft">
                          <svg
                            className="h-3.5 w-3.5 text-salmon-pink shrink-0"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            aria-hidden="true"
                          >
                            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                            <circle cx="12" cy="10" r="3" />
                          </svg>
                          <span>{item.location}</span>
                        </div>
                      )}
                    </div>

                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>

      </div>

      {/* Tepi Bergelombang Lembut di Bagian Bawah Section */}
      <div className="mt-16 sm:mt-20">
        <ScallopedEdge position="bottom" fillColor="#FFF5F4" height={18} />
      </div>

      {/* Lightbox Reusable untuk Menampilkan Foto Resolusi Tinggi */}
      <Lightbox
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        items={lightboxItems}
        currentIndex={lightboxIndex}
        onNavigate={(newIndex) => setLightboxIndex(newIndex)}
      />
    </section>
  );
}
