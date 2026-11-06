'use client';

import React from 'react';
import { profileData } from '@/data/profile';
import { Button } from '@/components/ui/Button';
import { GlassCard } from '@/components/ui/GlassCard';
import { SectionTitle } from '@/components/ui/SectionTitle';
import { Reveal } from '@/components/ui/Reveal';
import { ScrapbookSticker } from '@/components/decor/ScrapbookSticker';
import { Flower } from '@/components/decor/Flower';

function SocialIcon({ platform }: { platform: string }) {
  const commonClasses = 'h-5 w-5';

  switch (platform) {
    case 'instagram':
      return (
        <svg viewBox="0 0 24 24" className={commonClasses} fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <rect x="2.5" y="2.5" width="19" height="19" rx="5" />
          <circle cx="12" cy="12" r="4.2" />
          <circle cx="17.5" cy="6.5" r="1.2" fill="currentColor" stroke="none" />
        </svg>
      );
    case 'linkedin':
      return (
        <svg viewBox="0 0 24 24" className={commonClasses} fill="currentColor" aria-hidden="true">
          <path d="M6.94 8.5A1.56 1.56 0 1 1 6.93 5.4a1.56 1.56 0 0 1 .01 3.1Zm-1.37 1.15h2.72v8.35H5.57V9.65Zm4.28 0h2.61v1.14h.04c.36-.69 1.25-1.42 2.58-1.42 2.75 0 3.25 1.81 3.25 4.16v4.47h-2.72v-4.18c0-1-.02-2.29-1.4-2.29-1.4 0-1.61 1.09-1.61 2.22v4.25H9.85V9.65Z" />
        </svg>
      );
    case 'github':
      return (
        <svg viewBox="0 0 24 24" className={commonClasses} fill="currentColor" aria-hidden="true">
          <path d="M12 2C6.48 2 2 6.58 2 12.26c0 4.52 2.87 8.35 6.84 9.71.5.1.68-.22.68-.49 0-.24-.01-.87-.01-1.71-2.78.62-3.37-1.37-3.37-1.37-.45-1.18-1.11-1.5-1.11-1.5-.91-.64.07-.63.07-.63 1 .07 1.53 1.06 1.53 1.06.9 1.57 2.36 1.12 2.94.85.09-.67.35-1.12.63-1.38-2.22-.26-4.56-1.14-4.56-5.07 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.71 0 0 .84-.27 2.75 1.05A9.3 9.3 0 0 1 12 6.84c.85 0 1.71.12 2.51.35 1.9-1.32 2.74-1.05 2.74-1.05.55 1.41.2 2.45.1 2.71.64.72 1.03 1.63 1.03 2.75 0 3.94-2.34 4.8-4.58 5.06.36.32.68.94.68 1.9 0 1.37-.01 2.47-.01 2.81 0 .27.18.6.69.49A10.04 10.04 0 0 0 22 12.26C22 6.58 17.52 2 12 2Z" />
        </svg>
      );
    case 'email':
    default:
      return (
        <svg viewBox="0 0 24 24" className={commonClasses} fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M4 6.5A2.5 2.5 0 0 1 6.5 4h11A2.5 2.5 0 0 1 20 6.5v11A2.5 2.5 0 0 1 17.5 20h-11A2.5 2.5 0 0 1 4 17.5v-11Z" />
          <path d="m4.5 6.5 7.5 6 7.5-6" />
        </svg>
      );
  }
}

export function ContactSection() {
  return (
    <section id="kontak" className="relative py-20 sm:py-24 overflow-hidden" aria-label="Bagian Kontak">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionTitle
          kicker="Kontak"
          title="Mari Berkolaborasi"
          subtitle={profileData.contactDescription}
          align="center"
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mt-10">
          <div className="lg:col-span-5">
            <Reveal direction="left" delay={0.15}>
              <GlassCard variant="tint" hoverEffect={true} className="relative overflow-hidden p-6 sm:p-7">
                <div className="absolute right-4 top-4 opacity-80" aria-hidden="true">
                  <Flower variant="blossom" color="salmon" size="sm" />
                </div>

                <ScrapbookSticker variant="tag" color="wheat" rotation="left" className="mb-4">
                  Siap berkomunikasi
                </ScrapbookSticker>

                <h3 className="font-serif text-2xl font-bold text-bole leading-snug">
                  {profileData.contactHeading}
                </h3>

                <p className="mt-4 font-serif text-base text-bole-soft leading-relaxed">
                  Saya terbuka untuk kesempatan magang, program pelatihan UI/UX, diskusi desain visual, serta kolaborasi dalam proyek web dan kampus.
                </p>

                <div className="mt-6 flex flex-col sm:flex-row gap-3">
                  <Button href="mailto:kaylaaverda@gmail.com" variant="primary" size="md" isFullWidth>
                    Kirim Email
                  </Button>
                  <Button href="https://www.instagram.com/kaylaaver_/" isExternal variant="outline" size="md" isFullWidth>
                    Instagram
                  </Button>
                </div>
              </GlassCard>
            </Reveal>
          </div>

          <div className="lg:col-span-7">
            <Reveal direction="right" delay={0.2}>
              <GlassCard variant="default" hoverEffect={true} className="p-5 sm:p-6">
                <div className="space-y-3">
                  {profileData.socialLinks.map((link) => (
                    <a
                      key={link.platform}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center gap-4 rounded-2xl border border-white/80 bg-white/55 px-4 py-3.5 text-left transition-all duration-200 hover:-translate-y-0.5 hover:border-salmon-pink/40 hover:bg-misty-rose/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-bole focus-visible:ring-offset-2"
                      aria-label={`Buka ${link.label} Verda di tab baru`}
                    >
                      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white/90 text-bole shadow-xs group-hover:bg-salmon-pink group-hover:text-white transition-colors">
                        <SocialIcon platform={link.platform} />
                      </span>

                      <span className="min-w-0 flex-1">
                        <span className="block text-xs font-semibold uppercase tracking-[0.12em] text-salmon-pink">
                          {link.label}
                        </span>
                        <span className="mt-0.5 block font-serif text-base sm:text-lg text-bole break-all">
                          {link.displayValue || link.url}
                        </span>
                      </span>
                    </a>
                  ))}
                </div>
              </GlassCard>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
