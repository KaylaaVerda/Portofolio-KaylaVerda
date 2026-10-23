'use client';

import React, { useEffect, useRef, useCallback } from 'react';
import { SafeImage } from './SafeImage';
import { Chip } from './Chip';

export interface LightboxItem {
  id: string;
  title: string;
  image: string;
  description?: string;
  caption?: string;
  tags?: string[];
  year?: string;
  location?: string;
  category?: 'design' | 'photo' | 'profile' | 'video' | 'project';
}

export interface LightboxProps {
  isOpen: boolean;
  onClose: () => void;
  items: LightboxItem[];
  currentIndex: number;
  onNavigate: (newIndex: number) => void;
}

export function Lightbox({
  isOpen,
  onClose,
  items,
  currentIndex,
  onNavigate,
}: LightboxProps) {
  const currentItem = items[currentIndex];
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);
  const modalRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  // Navigasi ke gambar berikutnya
  const handleNext = useCallback(() => {
    if (currentIndex < items.length - 1) {
      onNavigate(currentIndex + 1);
    } else {
      onNavigate(0); // Kembali ke awal (looping)
    }
  }, [currentIndex, items.length, onNavigate]);

  // Navigasi ke gambar sebelumnya
  const handlePrev = useCallback(() => {
    if (currentIndex > 0) {
      onNavigate(currentIndex - 1);
    } else {
      onNavigate(items.length - 1); // Melompat ke akhir (looping)
    }
  }, [currentIndex, items.length, onNavigate]);

  // Aksesibilitas keyboard (Escape untuk tutup, panah kiri/kanan untuk navigasi)
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      } else if (e.key === 'ArrowRight') {
        handleNext();
      } else if (e.key === 'ArrowLeft') {
        handlePrev();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden'; // Kunci scroll layar utama
    closeButtonRef.current?.focus(); // Pindahkan fokus ke tombol tutup

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [isOpen, handleNext, handlePrev, onClose]);

  // Gestur swipe di layar sentuh
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;
    const distance = touchStartX.current - touchEndX.current;
    const minSwipeDistance = 50; // Ambang batas geser minimal 50px

    if (distance > minSwipeDistance) {
      handleNext();
    } else if (distance < -minSwipeDistance) {
      handlePrev();
    }

    touchStartX.current = null;
    touchEndX.current = null;
  };

  if (!isOpen || !currentItem) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={`Pratinjau detail karya: ${currentItem.title}`}
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 lg:p-8 select-none animate-fadeIn"
      ref={modalRef}
    >
      {/* Latar belakang redup berkabut hangat */}
      <div
        className="fixed inset-0 bg-bole-deep/80 backdrop-blur-md transition-opacity"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Kontainer modal vertikal dengan gambar di atas dan teks keterangan di bawah */}
      <div
        className="relative z-10 flex flex-col max-h-[92vh] w-full max-w-4xl overflow-hidden rounded-3xl bg-white/95 backdrop-blur-2xl border border-white shadow-[0_24px_60px_rgba(131,81,62,0.25)]"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {/* Tombol Tutup (Pojok Kanan Atas) */}
        <button
          ref={closeButtonRef}
          type="button"
          onClick={onClose}
          className="absolute top-3 right-3 sm:top-4 sm:right-4 z-30 flex h-11 w-11 items-center justify-center rounded-full bg-white/90 text-bole shadow-sm border border-salmon-pink/30 hover:bg-salmon-pink hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-bole"
          aria-label="Tutup pratinjau karya"
        >
          <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>

        {/* 1. Area Gambar Utama di Bagian Atas */}
        <div className="relative flex-1 w-full bg-gradient-to-br from-wheat-light/70 via-misty-rose-light/40 to-white min-h-[280px] sm:min-h-[400px] lg:min-h-[460px] flex items-center justify-center p-4 sm:p-6 overflow-hidden">
          
          {/* Tombol Panah Kiri (Sebelumnya) */}
          <button
            type="button"
            onClick={handlePrev}
            className="absolute left-3 sm:left-4 top-1/2 -translate-y-1/2 z-20 flex h-11 w-11 items-center justify-center rounded-full bg-white/85 text-bole shadow-sm border border-white hover:bg-salmon-pink hover:text-white transition-all hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-bole"
            aria-label="Lihat karya sebelumnya"
          >
            <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <polyline points="15 18 9 12 15 6" />
            </svg>
          </button>

          {/* Gambar Karya dengan SafeImage */}
          <div className="relative w-full h-full max-h-[58vh] flex items-center justify-center overflow-hidden rounded-2xl">
            <SafeImage
              src={currentItem.image}
              alt={currentItem.title}
              width={1200}
              height={900}
              className="max-h-[55vh] w-auto max-w-full object-contain rounded-xl drop-shadow-sm transition-transform duration-300"
              fallbackCategory={currentItem.category || (currentItem.location ? 'photo' : 'design')}
              fallbackLabel={currentItem.title}
              fallbackSublabel="Gambar pratinjau belum tersedia"
              priority
            />
          </div>

          {/* Tombol Panah Kanan (Berikutnya) */}
          <button
            type="button"
            onClick={handleNext}
            className="absolute right-3 sm:right-4 top-1/2 -translate-y-1/2 z-20 flex h-11 w-11 items-center justify-center rounded-full bg-white/85 text-bole shadow-sm border border-white hover:bg-salmon-pink hover:text-white transition-all hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-bole"
            aria-label="Lihat karya berikutnya"
          >
            <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </button>
        </div>

        {/* 2. Panel Keterangan di Bagian Bawah Gambar */}
        <div className="w-full p-4 sm:p-6 bg-white/95 border-t border-salmon-pink/20 overflow-y-auto max-h-[30vh]">
          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
            
            {/* Bagian Kiri: Judul, Lokasi/Tahun, Deskripsi, dan Tag */}
            <div className="flex-1 space-y-2">
              <div className="flex flex-wrap items-center gap-2">
                {/* Judul Karya */}
                <h3 className="font-serif text-lg sm:text-2xl font-bold text-bole leading-tight">
                  {currentItem.title}
                </h3>

                {/* Badge Lokasi atau Tahun */}
                {currentItem.location && (
                  <span className="inline-flex items-center gap-1 rounded-full bg-misty-rose/60 px-3 py-1 text-xs font-serif font-medium text-bole">
                    <svg className="h-3 w-3 text-salmon-pink" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                    {currentItem.location}
                  </span>
                )}

                {currentItem.year && (
                  <span className="rounded-full bg-wheat-soft px-3 py-1 text-xs font-serif font-semibold text-bole">
                    Tahun {currentItem.year}
                  </span>
                )}
              </div>

              {/* Deskripsi Khusus Desain (Bila Tersedia) */}
              {currentItem.description && (
                <p className="font-serif text-xs sm:text-sm text-bole-soft leading-relaxed max-w-2xl">
                  {currentItem.description}
                </p>
              )}

              {/* Daftar Tag Kreatif */}
              {currentItem.tags && currentItem.tags.length > 0 && (
                <div className="flex flex-wrap items-center gap-1.5 pt-1">
                  {currentItem.tags.map((tag, tagIdx) => (
                    <Chip key={tagIdx} label={tag} variant="misty" size="sm" />
                  ))}
                </div>
              )}
            </div>

            {/* Bagian Kanan: Indikator Urutan dan Petunjuk */}
            <div className="flex sm:flex-col items-center sm:items-end justify-between sm:justify-center gap-2 shrink-0 pt-2 sm:pt-0 border-t sm:border-t-0 border-salmon-pink/15">
              <div className="rounded-full bg-misty-rose-soft px-3.5 py-1 text-xs font-serif font-semibold text-bole shadow-xs border border-salmon-pink/20">
                {currentIndex + 1} dari {items.length}
              </div>
              <span className="text-[11px] text-bole/50 font-serif hidden sm:inline">
                Panah / Geser Layar
              </span>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}
