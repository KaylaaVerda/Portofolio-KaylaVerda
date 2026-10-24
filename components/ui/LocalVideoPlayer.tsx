'use client';

import React, { useState } from 'react';
import { ImagePlaceholder } from './ImagePlaceholder';

export interface LocalVideoPlayerProps {
  title: string;
  videoSrc: string;
  posterSrc?: string;
  className?: string;
}

export function LocalVideoPlayer({
  title,
  videoSrc,
  posterSrc,
  className = '',
}: LocalVideoPlayerProps) {
  const [hasError, setHasError] = useState(!videoSrc.trim());

  if (hasError) {
    return (
      <ImagePlaceholder
        category="video"
        aspectRatio="video"
        label="Video segera hadir"
        sublabel="Simpan berkas di folder public/videos"
        className={className}
      />
    );
  }

  return (
    <div
      className={`relative aspect-video w-full overflow-hidden rounded-2xl bg-bole ${className}`}
    >
      <video
        className="h-full w-full object-cover"
        controls
        preload="none"
        playsInline
        poster={posterSrc}
        onError={() => setHasError(true)}
        aria-label={title}
      >
        <source src={videoSrc} type="video/mp4" />
        Peramban Anda belum mendukung pemutar video.
      </video>
    </div>
  );
}
