'use client';

import React from 'react';
import { profileData } from '@/data/profile';
import { PhotoFrame } from '@/components/decor/PhotoFrame';
import { SafeImage } from '@/components/ui/SafeImage';
import { Button } from '@/components/ui/Button';
import { Reveal } from '@/components/ui/Reveal';
import { ScrapbookSticker } from '@/components/decor/ScrapbookSticker';
import { Sparkle, Sprinkles } from '@/components/decor/SweetIcons';

export function HeroSection() {
  return (
    <section
      id="beranda"
      className="relative min-h-[calc(100vh-80px)] flex items-center justify-center overflow-hidden py-12 sm:py-16 lg:py-20"
      aria-label="Bagian Beranda"
    >
      {/* Dekorasi taburan sprinkle dan kilau latar belakang */}
      <div className="absolute inset-0 pointer-events-none select-none" aria-hidden="true">
        <div className="absolute top-10 left-6 sm:left-16 opacity-40">
          <Sprinkles variant="cluster" />
        </div>
        <div className="absolute top-24 right-8 sm:right-20 opacity-60">
          <Sparkle size="lg" color="salmon" />
        </div>
        <div className="absolute bottom-16 left-12 sm:left-28 opacity-60">
          <Sparkle size="md" color="fawn" />
        </div>
        <div className="absolute bottom-24 right-10 sm:right-32 opacity-40">
          <Sprinkles variant="scatter" />
        </div>
      </div>

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Kolom Teks dan Pengenalan (Layar Lebar: 7 Kolom) */}
          <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left z-10">
            
            {/* Stiker Informasi Kampus dan Domisili */}
            <Reveal direction="down" delay={0.1}>
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2.5 sm:gap-3 mb-6">
                <ScrapbookSticker variant="washi" color="misty" rotation="left">
                  Teknik Informatika Udinus
                </ScrapbookSticker>
                <ScrapbookSticker variant="scalloped" color="wheat" rotation="right">
                  Semarang
                </ScrapbookSticker>
              </div>
            </Reveal>

            {/* Sapaan dan Nama Panggilan Verda */}
            <Reveal direction="up" delay={0.2}>
              <p className="font-script text-3xl sm:text-4xl md:text-5xl text-salmon-pink mb-1 sm:mb-2">
                {profileData.heroGreeting}
              </p>
              <h1 className="font-script text-6xl sm:text-7xl md:text-8xl lg:text-9xl text-salmon-pink drop-shadow-sm leading-none mb-6">
                {profileData.shortName}
              </h1>
            </Reveal>

            {/* Tagline Positioning Menjembatani Desain dan Kode */}
            <Reveal direction="up" delay={0.3}>
              <p className="font-serif text-lg sm:text-xl text-bole-soft leading-relaxed max-w-xl mb-8">
                {profileData.tagline}
              </p>
            </Reveal>

            {/* Dua Tombol Aksi Utama */}
            <Reveal direction="up" delay={0.4}>
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 w-full sm:w-auto">
                <Button href="#desain" variant="primary" size="lg" className="w-full sm:w-auto">
                  Lihat Karya
                </Button>
                <Button href="#kontak" variant="outline" size="lg" className="w-full sm:w-auto">
                  Hubungi Saya
                </Button>
              </div>
            </Reveal>

            {/* Catatan Keterangan Singkat */}
            <Reveal direction="up" delay={0.5}>
              <div className="mt-8 pt-6 border-t border-salmon-pink/20 flex items-center justify-center lg:justify-start gap-3 text-xs sm:text-sm text-bole-soft font-serif">
                <span className="h-2 w-2 rounded-full bg-salmon-pink animate-pulse" aria-hidden="true" />
                <span>Terbuka untuk program magang, pelatihan, dan kolaborasi kreatif</span>
              </div>
            </Reveal>

          </div>

          {/* Kolom Foto Profil Berbingkai Dekoratif (Layar Lebar: 5 Kolom) */}
          <div className="lg:col-span-5 flex justify-center items-center z-10">
            <Reveal direction="up" delay={0.3} duration={0.8}>
              <div className="relative">
                {/* Bingkai foto dekoratif gaya arch dengan pita dan bunga */}
                <PhotoFrame shape="arch" showRibbon={true} showFlowers={true}>
                  <SafeImage
                    src={profileData.profileImage}
                    alt={`${profileData.fullName} (${profileData.shortName})`}
                    fill
                    priority
                    sizes="(max-width: 640px) 256px, (max-width: 768px) 288px, 320px"
                    className="object-cover"
                    fallbackCategory="profile"
                    fallbackLabel="Kayla Verda"
                    fallbackSublabel="Simpan foto di public/images/profile.jpg"
                  />
                </PhotoFrame>

                {/* Hiasan stiker nama lengkap di bagian bawah frame */}
                <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 w-max max-w-[90%] z-30 drop-shadow-sm">
                  <div className="rounded-2xl bg-white/95 backdrop-blur-md px-4 py-2 border border-salmon-pink/30 shadow-sweet text-center">
                    <p className="font-serif font-semibold text-xs sm:text-sm text-bole truncate">
                      {profileData.fullName}
                    </p>
                    <p className="font-serif text-[11px] text-bole-soft">
                      Desain Visual & Kode Web
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>

        </div>
      </div>
    </section>
  );
}
