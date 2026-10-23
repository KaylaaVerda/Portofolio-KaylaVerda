import React from 'react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { HeroSection } from '@/components/sections/HeroSection';
import { AboutSection } from '@/components/sections/AboutSection';
import { DesignSection } from '@/components/sections/DesignSection';

export default function HomePage() {
  return (
    <div className="relative min-h-screen flex flex-col justify-between">
      <Navbar />

      <main id="konten-utama" className="flex-1">
        <HeroSection />
        <AboutSection />
        <DesignSection />
      </main>

      <Footer />
    </div>
  );
}
