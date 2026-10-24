'use client';

import React from 'react';
import { videosData } from '@/data/videos';
import { SectionTitle } from '@/components/ui/SectionTitle';
import { GlassCard } from '@/components/ui/GlassCard';
import { Reveal } from '@/components/ui/Reveal';
import { YouTubeLazyEmbed } from '@/components/ui/YouTubeLazyEmbed';
import { LocalVideoPlayer } from '@/components/ui/LocalVideoPlayer';
import { Cupcake, Sparkle } from '@/components/decor/SweetIcons';
import { ScallopedEdge } from '@/components/decor/ScallopedEdge';

export function VideoSection() {
  const hasLocalVideos = videosData.localVideos.length > 0;

  return (
    <section
      id="video"
      className="relative py-20 sm:py-24 overflow-hidden"
      aria-label="Bagian Video"
    >
      <div className="absolute top-0 left-0 right-0" aria-hidden="true">
        <ScallopedEdge position="top" fillColor="#FFF5F4" height={16} />
      </div>

      <div className="absolute top-16 right-8 hidden sm:block pointer-events-none opacity-50" aria-hidden="true">
        <Sparkle size="lg" color="salmon" />
      </div>
      <div className="absolute bottom-20 left-8 hidden sm:block pointer-events-none opacity-70" aria-hidden="true">
        <Cupcake size="md" animate={true} />
      </div>

      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionTitle
          kicker="Cuplikan Bergerak"
          title="Video"
          subtitle={videosData.sectionIntro}
          align="center"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {videosData.youtubeVideos.map((item, index) => (
            <Reveal key={item.id} direction="up" delay={0.1 * (index + 1)}>
              <GlassCard
                variant="default"
                hoverEffect={true}
                className="h-full flex flex-col p-4 sm:p-5"
              >
                <YouTubeLazyEmbed
                  videoId={item.videoId}
                  title={item.title}
                  customThumbnail={item.customThumbnail}
                />
                <div className="mt-4 flex flex-col gap-2">
                  <h3 className="font-serif text-lg font-bold text-bole leading-snug">
                    {item.title}
                  </h3>
                  <p className="font-serif text-sm text-bole-soft leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </GlassCard>
            </Reveal>
          ))}
        </div>

        {hasLocalVideos && (
          <div className="mt-12">
            <Reveal direction="up" delay={0.1}>
              <h3 className="font-script text-3xl text-salmon-pink text-center mb-8">
                Video Lokal
              </h3>
            </Reveal>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {videosData.localVideos.map((item, index) => (
                <Reveal key={item.id} direction="up" delay={0.12 * (index + 1)}>
                  <GlassCard
                    variant="tint"
                    hoverEffect={true}
                    className="h-full flex flex-col p-4 sm:p-5"
                  >
                    <LocalVideoPlayer
                      title={item.title}
                      videoSrc={item.videoSrc}
                      posterSrc={item.posterSrc}
                    />
                    <div className="mt-4 flex flex-col gap-2">
                      <h3 className="font-serif text-lg font-bold text-bole leading-snug">
                        {item.title}
                      </h3>
                      <p className="font-serif text-sm text-bole-soft leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </GlassCard>
                </Reveal>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
