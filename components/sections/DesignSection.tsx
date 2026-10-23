'use client';

import React, { useState } from 'react';
import { designCategories, designItems } from '@/data/design';
import { DesignCategory } from '@/data/types';
import { SectionTitle } from '@/components/ui/SectionTitle';
import { GlassCard } from '@/components/ui/GlassCard';
import { SafeImage } from '@/components/ui/SafeImage';
import { Chip } from '@/components/ui/Chip';
import { Reveal } from '@/components/ui/Reveal';
import { Lightbox, LightboxItem } from '@/components/ui/Lightbox';
import { ScrapbookSticker } from '@/components/decor/ScrapbookSticker';
import { RibbonBow } from '@/components/decor/RibbonBow';
import { Sparkle } from '@/components/decor/SweetIcons';

export function DesignSection() {
  const [activeCategory, setActiveCategory] = useState<DesignCategory>('umum');
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  // Filter karya berdasarkan kategori tab aktif
  const filteredItems = designItems.filter((item) => item.category === activeCategory);

  // Informasi pengantar kategori terpilih
  const currentCategoryInfo = designCategories.find((cat) => cat.id === activeCategory);

  // Konversi karya desain ke format LightboxItem
  const lightboxItems: LightboxItem[] = filteredItems.map((item) => ({
    id: item.id,
    title: item.title,
    image: item.image,
    description: item.description,
    tags: item.tags,
    year: item.year,
  }));

  // Buka lightbox pada karya tertentu
  const openLightbox = (index: number) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  return (
    <section
      id="desain"
      className="relative py-20 sm:py-24 overflow-hidden"
      aria-label="Bagian Galeri Desain"
    >
      {/* Dekorasi kilau manis di sisi kiri dan kanan */}
      <div className="absolute top-12 left-8 pointer-events-none opacity-50" aria-hidden="true">
        <Sparkle size="md" color="salmon" />
      </div>
      <div className="absolute top-28 right-10 pointer-events-none opacity-50" aria-hidden="true">
        <Sparkle size="lg" color="fawn" />
      </div>

      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        
        {/* Judul Section Galeri Desain */}
        <SectionTitle
          kicker="Portofolio Visual"
          title="Galeri Desain"
          subtitle="Rangkaian eksplorasi antarmuka digital, komposisi poster, dan materi publikasi kreatif yang dirancang dengan pertimbangan estetika serta kemudahan implementasi kode."
          align="center"
        />

        {/* Tab Navigasi Kategori (Umum, HMTI Udinus, Masa SMA) */}
        <div className="flex justify-center mb-10">
          <div
            role="tablist"
            aria-label="Kategori karya desain"
            className="inline-flex flex-wrap items-center justify-center gap-2 p-1.5 rounded-full bg-white/70 backdrop-blur-md border border-white/80 shadow-sm"
          >
            {designCategories.map((category) => {
              const isActive = activeCategory === category.id;
              return (
                <button
                  key={category.id}
                  role="tab"
                  id={`tab-${category.id}`}
                  aria-selected={isActive}
                  aria-controls={`panel-${category.id}`}
                  tabIndex={isActive ? 0 : -1}
                  type="button"
                  onClick={() => setActiveCategory(category.id)}
                  className={`px-5 py-2.5 min-h-[44px] rounded-full font-serif text-sm sm:text-base font-medium transition-all duration-200 select-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-bole ${
                    isActive
                      ? 'bg-salmon-pink text-white shadow-sweet scale-102 font-semibold'
                      : 'text-bole-soft hover:text-bole hover:bg-white/60'
                  }`}
                >
                  {category.title}
                </button>
              );
            })}
          </div>
        </div>

        {/* Kotak Pengantar Kategori Terpilih */}
        {currentCategoryInfo && (
          <Reveal direction="up" delay={0.15}>
            <div className="mb-12 max-w-2xl mx-auto text-center">
              <div className="rounded-2xl bg-white/50 backdrop-blur-sm p-5 border border-salmon-pink/20 shadow-xs">
                <p className="font-serif text-sm sm:text-base text-bole leading-relaxed">
                  {currentCategoryInfo.subtitle}
                </p>

                {/* Placeholder Peran Khusus untuk HMTI */}
                {currentCategoryInfo.rolePlaceholder && (
                  <div className="mt-3 flex justify-center">
                    <ScrapbookSticker variant="washi" color="misty" rotation="none">
                      {currentCategoryInfo.rolePlaceholder}
                    </ScrapbookSticker>
                  </div>
                )}
              </div>
            </div>
          </Reveal>
        )}

        {/* Grid Kartu Karya Desain Responsif dan Seragam */}
        <div
          role="tabpanel"
          id={`panel-${activeCategory}`}
          aria-labelledby={`tab-${activeCategory}`}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
        >
          {filteredItems.map((item, index) => (
            <Reveal key={item.id} direction="up" delay={0.1 * (index + 1)}>
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
                className="group cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-bole rounded-3xl h-full block"
                aria-label={`Buka pratinjau karya: ${item.title}`}
              >
                <GlassCard
                  variant="default"
                  hoverEffect={true}
                  className="h-full flex flex-col justify-between p-4 sm:p-5 border-white/90 transition-all duration-300 group-hover:border-salmon-pink/50 group-hover:shadow-[0_16px_36px_rgba(242,138,161,0.22)]"
                >
                  <div>
                    {/* Kontainer Gambar Karya Seragam 4:3 agar seluruh kartu sejajar rapi */}
                    <div className="relative w-full aspect-[4/3] overflow-hidden rounded-2xl bg-wheat-light/50 mb-4">
                      <SafeImage
                        src={item.image}
                        alt={item.title}
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                        fallbackCategory="design"
                        fallbackLabel={item.title}
                        fallbackSublabel="Klik kartu untuk memperbesar"
                      />

                      {/* Stiker Tahun di Sudut Kanan Atas */}
                      <div className="absolute top-3 right-3 z-10 pointer-events-none">
                        <span className="rounded-full bg-white/90 backdrop-blur-xs px-2.5 py-1 text-xs font-serif font-semibold text-bole shadow-xs border border-white">
                          {item.year}
                        </span>
                      </div>

                      {/* Indikator Hover Sentuhan Manis */}
                      <div className="absolute inset-0 bg-salmon-pink/15 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center pointer-events-none">
                        <span className="rounded-full bg-white/95 px-4 py-2 font-serif text-xs font-semibold text-bole shadow-sweet transform translate-y-2 group-hover:translate-y-0 transition-transform">
                          Perbesar Karya
                        </span>
                      </div>
                    </div>

                    {/* Judul Karya */}
                    <h3 className="font-serif text-lg font-bold text-bole mb-2 group-hover:text-salmon-pink transition-colors line-clamp-1">
                      {item.title}
                    </h3>

                    {/* Deskripsi Singkat */}
                    <p className="font-serif text-xs sm:text-sm text-bole-soft leading-relaxed line-clamp-2 mb-4">
                      {item.description}
                    </p>
                  </div>

                  {/* Tag / Kategori di Bagian Bawah Kartu */}
                  <div className="pt-3 border-t border-salmon-pink/15 flex flex-wrap gap-1.5">
                    {item.tags.map((tag, tagIdx) => (
                      <Chip key={tagIdx} label={tag} variant="fawn" size="sm" />
                    ))}
                  </div>
                </GlassCard>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Garis Pembatas Pita Manis di Akhir Section */}
        <div className="mt-16 sm:mt-20">
          <RibbonBow variant="divider" color="salmon" />
        </div>

      </div>

      {/* Komponen Lightbox Reusable untuk Memperbesar Gambar */}
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
