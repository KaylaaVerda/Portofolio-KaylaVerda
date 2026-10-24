'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { ImagePlaceholder } from './ImagePlaceholder';

export interface YouTubeLazyEmbedProps {
  videoId: string;
  title: string;
  customThumbnail?: string;
  className?: string;
}

export function YouTubeLazyEmbed({
  videoId,
  title,
  customThumbnail,
  className = '',
}: YouTubeLazyEmbedProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [thumbError, setThumbError] = useState(false);

  const trimmedId = videoId.trim();

  if (!trimmedId) {
    return (
      <ImagePlaceholder
        category="video"
        aspectRatio="video"
        label="Video segera hadir"
        sublabel="Isi videoId di berkas data/videos.ts"
        className={className}
      />
    );
  }

  const thumbnailSrc =
    customThumbnail || `https://i.ytimg.com/vi/${trimmedId}/hqdefault.jpg`;

  if (isPlaying) {
    return (
      <div
        className={`relative aspect-video w-full overflow-hidden rounded-2xl bg-bole ${className}`}
      >
        <iframe
          src={`https://www.youtube-nocookie.com/embed/${trimmedId}?autoplay=1&rel=0`}
          title={title}
          className="absolute inset-0 h-full w-full border-0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          loading="lazy"
        />
      </div>
    );
  }

  return (
    <div
      className={`relative aspect-video w-full overflow-hidden rounded-2xl bg-wheat-light ${className}`}
    >
      {!thumbError ? (
        <Image
          src={thumbnailSrc}
          alt={`Pratinjau video ${title}`}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 380px"
          className="object-cover"
          onError={() => setThumbError(true)}
        />
      ) : (
        <div className="absolute inset-0">
          <ImagePlaceholder
            category="video"
            aspectRatio="auto"
            label={title}
            sublabel="Ketuk untuk memutar"
            showDottedBorder={false}
            className="h-full w-full rounded-none"
          />
        </div>
      )}

      <div
        className="absolute inset-0 bg-bole/15"
        aria-hidden="true"
      />

      <button
        type="button"
        onClick={() => setIsPlaying(true)}
        className="absolute inset-0 z-10 flex min-h-[44px] min-w-[44px] items-center justify-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-bole focus-visible:ring-offset-2"
        aria-label={`Putar video ${title}`}
      >
        <span className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-salmon-pink text-white shadow-sweet transition-transform duration-200 hover:scale-105">
          <svg
            viewBox="0 0 24 24"
            className="h-6 w-6 translate-x-[1px]"
            fill="currentColor"
            aria-hidden="true"
          >
            <path d="M8 6.5v11l10-5.5L8 6.5z" />
          </svg>
        </span>
      </button>
    </div>
  );
}
