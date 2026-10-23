'use client';

import React from 'react';
import { profileData } from '@/data/profile';
import { skillGroups } from '@/data/skills';
import { SectionTitle } from '@/components/ui/SectionTitle';
import { GlassCard } from '@/components/ui/GlassCard';
import { Chip } from '@/components/ui/Chip';
import { Reveal } from '@/components/ui/Reveal';
import { ScrapbookSticker } from '@/components/decor/ScrapbookSticker';
import { Flower } from '@/components/decor/Flower';
import { FrostingDrip } from '@/components/decor/FrostingDrip';

export function AboutSection() {
  return (
    <section
      id="tentang"
      className="relative py-20 sm:py-24 overflow-hidden"
      aria-label="Bagian Tentang Saya"
    >
      {/* Efek lelehan frosting manis di bagian atas section */}
      <FrostingDrip fillColor="#FFF5F4" height={36} showShadow={true} />

      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 mt-10">
        
        {/* Judul Section dengan Tipografi Script Manis */}
        <SectionTitle
          kicker="Tentang Saya"
          title="Mengenal Lebih Dekat"
          subtitle="Titik temu antara kecintaan terhadap estetika grafis dan eksplorasi logika antarmuka web."
          align="center"
        />

        {/* Bagian Perkenalan Diri dan Kartu Pendidikan */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">
          
          {/* Kolom Kiri: Paragraf Narasi Perkenalan */}
          <div className="lg:col-span-7 flex flex-col gap-5">
            {profileData.aboutParagraphs.map((paragraph, idx) => (
              <Reveal key={idx} direction="up" delay={0.15 * (idx + 1)}>
                <GlassCard variant="default" hoverEffect={false} className="p-6 sm:p-7">
                  <p className="font-serif text-base sm:text-lg text-bole leading-relaxed">
                    {paragraph}
                  </p>
                </GlassCard>
              </Reveal>
            ))}
          </div>

          {/* Kolom Kanan: Kartu Pendidikan dan Fokus Minat */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            
            {/* Kartu Informasi Pendidikan Resmi */}
            <Reveal direction="left" delay={0.2}>
              <GlassCard
                variant="tint"
                hoverEffect={true}
                className="relative overflow-hidden border-salmon-pink/30"
              >
                {/* Hiasan bunga kecil di sudut kartu */}
                <div className="absolute top-4 right-4 pointer-events-none opacity-85" aria-hidden="true">
                  <Flower variant="blossom" color="salmon" size="sm" />
                </div>

                <div className="mb-4">
                  <ScrapbookSticker variant="washi" color="wheat" rotation="left">
                    Latar Belakang Pendidikan
                  </ScrapbookSticker>
                </div>

                <div className="space-y-3 font-serif">
                  <div>
                    <h3 className="text-xl font-bold text-bole">
                      {profileData.education.university}
                    </h3>
                    <p className="text-sm text-bole-soft mt-0.5">
                      {profileData.education.city}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-salmon-pink/20 flex items-center justify-between">
                    <div>
                      <span className="text-xs uppercase tracking-wider text-salmon-pink font-semibold block">
                        Program Studi
                      </span>
                      <span className="text-base font-medium text-bole">
                        {profileData.education.degree} {profileData.education.major}
                      </span>
                    </div>

                    <span className="inline-flex items-center rounded-full bg-white/80 px-3 py-1 text-xs font-medium text-bole shadow-xs border border-white">
                      Mahasiswa Aktif
                    </span>
                  </div>
                </div>
              </GlassCard>
            </Reveal>

            {/* Kartu Pendekatan Berkarya (Bridging Design & Code) */}
            <Reveal direction="left" delay={0.35}>
              <GlassCard variant="frosted" hoverEffect={true} className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <span className="h-2 w-2 rounded-full bg-salmon-pink" aria-hidden="true" />
                  <h4 className="font-serif font-semibold text-base text-bole">
                    Fokus dan Minat Utama
                  </h4>
                </div>
                <p className="font-serif text-sm text-bole-soft leading-relaxed">
                  Menaruh perhatian besar pada kejelasan hierarki visual, kenyamanan pengalaman pengguna, serta penyusunan struktur kode yang rapi agar desain dapat terealisasi secara efisien.
                </p>
              </GlassCard>
            </Reveal>

          </div>

        </div>

        {/* Bagian Keahlian dan Alat Bantu (Skills & Tools) */}
        <div className="mt-8">
          <div className="text-center mb-10">
            <Reveal direction="up" delay={0.1}>
              <h3 className="font-script text-3xl sm:text-4xl text-salmon-pink mb-2">
                Keahlian dan Alat Kerja
              </h3>
              <p className="font-serif text-sm sm:text-base text-bole-soft max-w-lg mx-auto">
                Kumpulan alat bantu visual dan dasar teknologi web yang saya pelajari dan gunakan dalam proses eksplorasi karya.
              </p>
            </Reveal>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {skillGroups.map((group, groupIdx) => {
              // Pemilihan varian warna kartu dan chip agar bervariasi manis
              const cardVariants: Array<'default' | 'tint' | 'frosted'> = ['tint', 'default', 'frosted'];
              const chipVariants: Array<'salmon' | 'fawn' | 'wheat'> = ['salmon', 'fawn', 'wheat'];

              return (
                <Reveal key={group.id} direction="up" delay={0.15 * (groupIdx + 1)}>
                  <GlassCard
                    variant={cardVariants[groupIdx % cardVariants.length]}
                    hoverEffect={true}
                    className="h-full flex flex-col justify-between"
                  >
                    <div>
                      {/* Judul Kategori Keahlian */}
                      <div className="flex items-center justify-between mb-3">
                        <h4 className="font-serif font-bold text-lg text-bole">
                          {group.title}
                        </h4>
                        <span className="h-2 w-2 rounded-full bg-salmon-pink/60" aria-hidden="true" />
                      </div>

                      <p className="font-serif text-xs sm:text-sm text-bole-soft mb-6 leading-relaxed">
                        {group.description}
                      </p>

                      {/* Daftar Stiker / Chip Keahlian */}
                      <div className="flex flex-wrap gap-2">
                        {group.skills.map((skill) => (
                          <Chip
                            key={skill.id}
                            label={skill.name}
                            sublabel={skill.level}
                            variant={chipVariants[groupIdx % chipVariants.length]}
                            size="sm"
                          />
                        ))}
                      </div>
                    </div>

                    {/* Catatan kaki kecil ramah di bawah kartu */}
                    <div className="mt-6 pt-4 border-t border-bole/10 flex items-center gap-1.5 text-[11px] text-bole-soft font-serif">
                      <span className="text-salmon-pink font-semibold">Status:</span>
                      <span>{groupIdx === 1 ? 'Tingkat dasar dan terus berkembang' : 'Eksplorasi aktif'}</span>
                    </div>
                  </GlassCard>
                </Reveal>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
