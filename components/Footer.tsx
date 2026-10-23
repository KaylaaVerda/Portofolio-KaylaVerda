import React from 'react';
import { ScallopedEdge } from './decor/ScallopedEdge';
import { Cupcake, Cherry } from './decor/SweetIcons';
import { profileData } from '../data/profile';

export function Footer() {
  const currentYear = new Date().getFullYear();

  // Ikon SVG media sosial
  const renderSocialIcon = (platform: string) => {
    switch (platform) {
      case 'instagram':
        return (
          <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
            <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
          </svg>
        );
      case 'linkedin':
        return (
          <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
            <rect x="2" y="9" width="4" height="12" />
            <circle cx="4" cy="4" r="2" />
          </svg>
        );
      case 'github':
        return (
          <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
          </svg>
        );
      case 'email':
      default:
        return (
          <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
            <polyline points="22,6 12,13 2,6" />
          </svg>
        );
    }
  };

  return (
    <footer className="relative w-full bg-gradient-to-b from-white/40 via-wheat-light/70 to-misty-rose-light text-bole overflow-hidden select-none">
      {/* Tepi bergelombang bertema kue di bagian atas footer */}
      <ScallopedEdge position="top" fillColor="#FFF5F4" height={20} />

      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 pt-12 pb-14">
        <div className="flex flex-col items-center text-center">
          {/* Ikon cupcake manis */}
          <div className="mb-4 transform hover:scale-110 transition-transform">
            <Cupcake size="md" animate={true} />
          </div>

          {/* Sapaan dan nama script Verda */}
          <h2 className="font-script text-4xl sm:text-5xl text-salmon-pink tracking-wide">
            Verda
          </h2>

          <p className="mt-3 max-w-md font-serif text-sm sm:text-base text-bole-soft leading-relaxed">
            Menjembatani estetika desain visual dengan kode web yang realistis dan fungsional.
          </p>

          {/* Tautan media sosial */}
          <div className="mt-6 flex items-center justify-center gap-3 sm:gap-4">
            {profileData.socialLinks.map((link) => (
              <a
                key={link.platform}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-11 w-11 items-center justify-center rounded-full bg-white/80 border border-white/90 text-bole shadow-xs transition-all duration-200 hover:-translate-y-1 hover:bg-salmon-pink hover:text-white hover:shadow-sweet focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-bole focus-visible:ring-offset-2"
                aria-label={`Buka akun ${link.label} Verda di tab baru`}
              >
                {renderSocialIcon(link.platform)}
              </a>
            ))}
          </div>

          {/* Garis pemisah lembut */}
          <div className="my-8 flex w-full max-w-xs items-center justify-center gap-2" aria-hidden="true">
            <span className="h-[1px] flex-1 bg-salmon-pink/25" />
            <Cherry variant="single" size="sm" />
            <span className="h-[1px] flex-1 bg-salmon-pink/25" />
          </div>

          {/* Navigasi cepat kembali ke atas */}
          <a
            href="#beranda"
            className="inline-flex items-center gap-1.5 rounded-full bg-white/70 px-4 py-2 text-xs sm:text-sm font-serif font-medium text-bole-soft border border-white/80 shadow-xs hover:text-bole hover:bg-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-bole"
            aria-label="Kembali ke bagian paling atas halaman"
          >
            <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M18 15l-6-6-6 6" />
            </svg>
            Kembali ke Atas
          </a>

          {/* Hak cipta dan catatan hangat */}
          <div className="mt-8 flex flex-col gap-1 text-xs text-bole/75 font-serif">
            <p>
              &copy; {currentYear} Kayla Verda Fawnia Heses. Seluruh hak cipta dilindungi.
            </p>
            <p className="text-[11px] opacity-75">
              Dirancang dengan tema bakery lembut dan dibangun menggunakan Next.js dan Tailwind CSS.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
