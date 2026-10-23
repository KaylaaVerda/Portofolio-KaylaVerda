'use client';

import React, { useEffect, useRef, useState, useCallback } from 'react';
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

  // Gestur swipe di perangkat layar sentuh (mobile touch gesture)
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
      // Geser ke kiri (gambar berikutnya)
      handleNext();
    } else if (distance < -minSwipeDistance) {
      // Geser ke kanan (gambar sebelumnya)
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
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 lg:p-10 select-none animate-fadeIn"
      ref={modalRef}
    >
      {/* Latar belakang redup berkabut hangat */}
      <div
        className="fixed inset-0 bg-bole-deep/75 backdrop-blur-md transition-opacity"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Kontainer modal bergaya glassmorphism */}
      <div
        className="relative z-10 flex flex-col lg:flex-row max-h-[92vh] w-full max-w-5xl overflow-hidden rounded-3xl bg-white/95 backdrop-blur-2xl border border-white shadow-[0_24px_60px_rgba(131,81,62,0.25)]"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {/* Tombol Tutup (Area sentuh minimal 44x44px) */}
        <button
          ref={closeButtonRef}
          type="button"
          onClick={onClose}
          className="absolute top-3 right-3 z-30 flex h-11 w-11 items-center justify-center rounded-full bg-white/90 text-bole shadow-sm border border-salmon-pink/30 hover:bg-salmon-pink hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-bole"
          aria-label="Tutup pratinjau karya"
        >
          <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>

        {/* Area Gambar dengan Tombol Navigasi Panah */}
        <div className="relative flex-1 bg-gradient-to-br from-wheat-light/70 via-misty-rose-light/40 to-white min-h-[260px] sm:min-h-[380px] lg:min-h-[500px] flex items-center justify-center p-4 sm:p-8">
          
          {/* Tombol Panah Kiri (Sebelumnya) */}
          <button
            type="button"
            onClick={handlePrev}
            className="absolute left-3 top-1/2 -translate-y-1/2 z-20 flex h-11 w-11 items-center justify-center rounded-full bg-white/80 text-bole shadow-sm border border-white hover:bg-salmon-pink hover:text-white transition-all hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-bole"
            aria-label="Lihat karya sebelumnya"
          >
            <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <polyline points="15 18 9 12 15 6" />
            </svg>
          </button>

          {/* Gambar Karya dengan SafeImage */}
          <div className="relative w-full h-full max-h-[65vh] flex items-center justify-center overflow-hidden rounded-2xl">
            <SafeImage
              src={currentItem.image}
              alt={currentItem.title}
              width={1200}
              height={900}
              className="max-h-[62vh] w-auto max-w-full object-contain rounded-xl drop-shadow-sm transition-transform duration-300"
              fallbackCategory="design"
              fallbackLabel={currentItem.title}
              fallbackSublabel="Gambar pratinjau belum tersedia"
              priority
            />
          </div>

          {/* Tombol Panah Kanan (Berikutnya) */}
          <button
            type="button"
            onClick={handleNext}
            className="absolute right-3 top-1/2 -translate-y-1/2 z-20 flex h-11 w-11 items-center justify-center rounded-full bg-white/80 text-bole shadow-sm border border-white hover:bg-salmon-pink hover:text-white transition-all hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-bole"
            aria-label="Lihat karya berikutnya"
          >
            <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </button>

          {/* Indikator Urutan Gambar (misal: 1 dari 8) */}
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 rounded-full bg-white/85 backdrop-blur-xs px-3.5 py-1 text-xs font-serif font-medium text-bole shadow-xs border border-white">
            {currentIndex + 1} dari {items.length}
          </div>
        </div>

        {/* Panel Keterangan dan Deskripsi Karya */}
        <div className="w-full lg:w-80 sm:w-96 p-6 sm:p-8 flex flex-col justify-between overflow-y-auto bg-white/60 border-t lg:border-t-0 lg:border-l border-salmon-pink/15">
          <div>
            {/* Tag / Lokasi / Tahun */}
            <div className="flex flex-wrap items-center gap-2 mb-3">
              {currentItem.year && (
                <span className="rounded-full bg-wheat-soft px-3 py-1 text-xs font-serif font-semibold text-bole">
                  Tahun {currentItem.year}
                </span>
              )}
              {currentItem.location && (
                <span className="rounded-full bg-misty-rose/60 px-3 py-1 text-xs font-serif font-medium text-bole">
                  {currentItem.location}
                </span>
              )}
            </div>

            {/* Judul Karya */}
            <h3 className="font-serif text-xl sm:text-2xl font-bold text-bole mb-3 leading-snug">
              {currentItem.title}
            </h3>

            {/* Deskripsi atau Caption */}
            <p className="font-serif text-sm text-bole-soft leading-relaxed mb-6">
              {currentItem.description || currentItem.caption || 'Deskripsi karya visual yang disajikan secara rapi.'}
            </p>

            {/* Daftar Tag Kreatif */}
            {currentItem.tags && currentItem.tags.length > 0 && (
              <div>
                <p className="text-xs uppercase tracking-wider text-salmon-pink font-semibold mb-2 font-serif">
                  Kategori dan Alat
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {currentItem.tags.map((tag, tagIdx) => (
                    <Chip key={tagIdx} label={tag} variant="misty" size="sm" />
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Petunjuk Interaksi Ramah Pengguna */}
          <div className="mt-6 pt-4 border-t border-salmon-pink/20 flex items-center justify-between text-[11px] text-bole/60 font-serif">
            <span>Gunakan panah keyboard atau geser layar</span>
            <span className="hidden sm:inline">Tekan Esc untuk tutup</span>
          </div>
        </div>

      </div>
    </div>
  );
}
