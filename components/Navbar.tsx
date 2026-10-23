'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { Cherry } from './decor/SweetIcons';
import { Button } from './ui/Button';

export interface NavItem {
  label: string;
  href: string;
}

export const navItems: NavItem[] = [
  { label: 'Beranda', href: '#beranda' },
  { label: 'Tentang', href: '#tentang' },
  { label: 'Desain', href: '#desain' },
  { label: 'Fotografi', href: '#fotografi' },
  { label: 'Video', href: '#video' },
  { label: 'Proyek', href: '#proyek' },
  { label: 'Kontak', href: '#kontak' },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('beranda');
  const menuRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  // Pantau posisi scroll untuk memperkuat efek blur pada navbar
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Deteksi section yang sedang aktif
      const sections = navItems.map((item) => item.href.replace('#', ''));
      const scrollPosition = window.scrollY + 120;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Tutup menu saat menekan tombol Escape untuk aksesibilitas keyboard
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        setIsOpen(false);
        buttonRef.current?.focus();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden'; // Kunci scroll latar saat menu mobile terbuka
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  // Tutup menu saat pengguna mengklik di luar area menu mobile
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        isOpen &&
        menuRef.current &&
        !menuRef.current.contains(e.target as Node) &&
        buttonRef.current &&
        !buttonRef.current.contains(e.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isOpen]);

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <header
      className={`sticky top-0 z-40 w-full transition-all duration-300 ${
        isScrolled
          ? 'bg-white/80 backdrop-blur-md border-b border-salmon-pink/20 shadow-[0_4px_20px_rgba(131,81,62,0.06)]'
          : 'bg-white/45 backdrop-blur-sm border-b border-white/50'
      }`}
    >
      <nav
        className="mx-auto flex max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8 h-18 sm:h-20"
        aria-label="Navigasi Utama"
      >
        {/* Logo nama Verda dengan font script dan buah ceri */}
        <Link
          href="#beranda"
          className="group inline-flex items-center gap-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-bole focus-visible:ring-offset-2 rounded-xl py-1 px-2"
          aria-label="Verda - Kembali ke beranda"
        >
          <span className="font-script text-3xl sm:text-4xl text-salmon-pink tracking-wide transition-transform group-hover:scale-105">
            Verda
          </span>
          <div className="transition-transform group-hover:rotate-12 duration-200">
            <Cherry variant="single" size="sm" />
          </div>
        </Link>

        {/* Menu Navigasi Desktop (Layar Lebar) */}
        <div className="hidden md:flex items-center gap-1.5 lg:gap-2">
          {navItems.map((item) => {
            const isActive = activeSection === item.href.replace('#', '');
            return (
              <a
                key={item.href}
                href={item.href}
                className={`relative px-3.5 py-2 text-sm font-serif font-medium transition-colors rounded-full select-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-bole focus-visible:ring-offset-2 ${
                  isActive
                    ? 'text-bole font-semibold bg-misty-rose/60 shadow-xs'
                    : 'text-bole-soft hover:text-bole hover:bg-white/60'
                }`}
              >
                {item.label}
                {isActive && (
                  <span
                    className="absolute -bottom-1 left-1/2 -translate-x-1/2 h-1 w-4 rounded-full bg-salmon-pink"
                    aria-hidden="true"
                  />
                )}
              </a>
            );
          })}
        </div>

        {/* Tombol Aksi Kontak Cepat Desktop */}
        <div className="hidden md:block">
          <Button href="#konten-kontak" variant="primary" size="sm">
            Hubungi Saya
          </Button>
        </div>

        {/* Tombol Hamburger Menu Mobile (Area sentuh minimal 44x44px) */}
        <button
          ref={buttonRef}
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden relative flex h-11 w-11 items-center justify-center rounded-2xl bg-white/70 backdrop-blur-md border border-white/80 shadow-sm text-bole focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-bole focus-visible:ring-offset-2 transition-transform active:scale-95"
          aria-label={isOpen ? 'Tutup menu navigasi' : 'Buka menu navigasi'}
          aria-expanded={isOpen}
          aria-controls="mobile-navigation-menu"
        >
          <div className="flex h-5 w-5 flex-col items-center justify-between">
            {/* Garis atas */}
            <span
              className={`h-0.5 w-5 rounded-full bg-bole transition-transform duration-300 ease-in-out ${
                isOpen ? 'translate-y-2 rotate-45 bg-salmon-pink' : ''
              }`}
            />
            {/* Garis tengah */}
            <span
              className={`h-0.5 w-5 rounded-full bg-bole transition-opacity duration-200 ${
                isOpen ? 'opacity-0' : 'opacity-100'
              }`}
            />
            {/* Garis bawah */}
            <span
              className={`h-0.5 w-5 rounded-full bg-bole transition-transform duration-300 ease-in-out ${
                isOpen ? '-translate-y-2.5 -rotate-45 bg-salmon-pink' : ''
              }`}
            />
          </div>
        </button>
      </nav>

      {/* Panel Menu Mobile Bergaya Glassmorphism */}
      <div
        id="mobile-navigation-menu"
        ref={menuRef}
        role="dialog"
        aria-modal="true"
        aria-label="Menu navigasi mobile"
        className={`md:hidden fixed inset-x-4 top-22 z-50 overflow-hidden rounded-3xl bg-white/90 backdrop-blur-xl border border-white/90 shadow-[0_16px_40px_rgba(131,81,62,0.16)] transition-all duration-300 ease-out ${
          isOpen
            ? 'opacity-100 translate-y-0 pointer-events-auto'
            : 'opacity-0 -translate-y-4 pointer-events-none'
        }`}
      >
        <div className="p-6 flex flex-col gap-2">
          {navItems.map((item) => {
            const isActive = activeSection === item.href.replace('#', '');
            return (
              <a
                key={item.href}
                href={item.href}
                onClick={handleLinkClick}
                className={`flex items-center justify-between px-4 py-3 min-h-[44px] rounded-2xl font-serif text-base font-medium transition-colors ${
                  isActive
                    ? 'bg-misty-rose/60 text-bole font-semibold'
                    : 'text-bole hover:bg-white/70'
                }`}
              >
                <span>{item.label}</span>
                {isActive && (
                  <span className="h-2 w-2 rounded-full bg-salmon-pink" aria-hidden="true" />
                )}
              </a>
            );
          })}

          <div className="mt-4 pt-4 border-t border-salmon-pink/20">
            <Button
              href="#konten-kontak"
              variant="primary"
              size="md"
              isFullWidth={true}
              onClick={handleLinkClick}
            >
              Hubungi Saya
            </Button>
          </div>
        </div>
      </div>

      {/* Latar gelap transparan saat menu mobile aktif */}
      {isOpen && (
        <div
          className="md:hidden fixed inset-0 top-0 z-30 bg-bole/20 backdrop-blur-xs transition-opacity"
          aria-hidden="true"
          onClick={() => setIsOpen(false)}
        />
      )}
    </header>
  );
}
