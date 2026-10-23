'use client';

import React, { ReactNode } from 'react';
import { motion, useReducedMotion } from 'framer-motion';

export interface RevealProps {
  children: ReactNode;
  delay?: number;
  duration?: number;
  direction?: 'up' | 'down' | 'left' | 'right' | 'none';
  distance?: number;
  className?: string;
  once?: boolean;
}

export function Reveal({
  children,
  delay = 0,
  duration = 0.6,
  direction = 'up',
  distance = 24,
  className = '',
  once = true,
}: RevealProps) {
  // Hormati pengaturan prefers-reduced-motion dari sistem operasi pengguna
  const shouldReduceMotion = useReducedMotion();

  // Jika pengguna menyalakan prefers-reduced-motion, tampilkan elemen tanpa animasi perpindahan
  if (shouldReduceMotion) {
    return <div className={className}>{children}</div>;
  }

  // Hitung offset perpindahan koordinat berdasarkan arah
  const getOffset = () => {
    switch (direction) {
      case 'up':
        return { x: 0, y: distance };
      case 'down':
        return { x: 0, y: -distance };
      case 'left':
        return { x: distance, y: 0 };
      case 'right':
        return { x: -distance, y: 0 };
      case 'none':
      default:
        return { x: 0, y: 0 };
    }
  };

  const offset = getOffset();

  return (
    <motion.div
      initial={{
        opacity: 0,
        x: offset.x,
        y: offset.y,
      }}
      whileInView={{
        opacity: 1,
        x: 0,
        y: 0,
      }}
      viewport={{ once, margin: '-40px' }}
      transition={{
        duration,
        delay,
        ease: [0.22, 1, 0.36, 1], // Kurva easeOutCubic yang halus dan tenang
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
