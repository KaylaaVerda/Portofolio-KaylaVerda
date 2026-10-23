import React from 'react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';

export default function HomePage() {
  return (
    <div className="relative min-h-screen flex flex-col justify-between">
      <Navbar />

      <main id="konten-utama" className="flex-1">
        <section id="beranda" className="min-h-[50vh] flex flex-col items-center justify-center p-8 text-center">
          <h1 className="font-script text-5xl sm:text-6xl text-salmon-pink drop-shadow-sm">
            Verda
          </h1>
          <p className="mt-4 font-serif text-base sm:text-lg text-bole max-w-lg">
            Menjembatani estetika desain visual dengan kode web yang realistis dan fungsional.
          </p>
        </section>
      </main>

      <Footer />
    </div>
  );
}
