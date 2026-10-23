'use client';

import React, { useState } from 'react';
import Image, { ImageProps } from 'next/image';
import { ImagePlaceholder, ImagePlaceholderProps } from './ImagePlaceholder';

export interface SafeImageProps extends Omit<ImageProps, 'onError'> {
  fallbackCategory?: ImagePlaceholderProps['category'];
  fallbackLabel?: string;
  fallbackSublabel?: string;
  fallbackAspectRatio?: ImagePlaceholderProps['aspectRatio'];
  containerClassName?: string;
}

export function SafeImage({
  src,
  alt,
  fallbackCategory = 'design',
  fallbackLabel,
  fallbackSublabel,
  fallbackAspectRatio,
  containerClassName = '',
  className = '',
  ...rest
}: SafeImageProps) {
  const [hasError, setHasError] = useState(false);

  // Jika sumber gambar kosong atau gambar gagal dimuat, tampilkan placeholder manis
  if (!src || hasError) {
    return (
      <ImagePlaceholder
        category={fallbackCategory}
        label={fallbackLabel || (typeof alt === 'string' ? alt : 'Pratinjau Gambar')}
        sublabel={fallbackSublabel}
        aspectRatio={fallbackAspectRatio}
        className={containerClassName || className}
      />
    );
  }

  return (
    <Image
      src={src}
      alt={alt}
      className={className}
      onError={() => setHasError(true)}
      {...rest}
    />
  );
}
