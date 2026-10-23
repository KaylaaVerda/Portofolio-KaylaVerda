import type { Metadata, Viewport } from 'next';
import { Great_Vibes, Lora } from 'next/font/google';
import './globals.css';

const greatVibes = Great_Vibes({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-script',
});

const lora = Lora({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
  variable: '--font-serif',
});

export const viewport: Viewport = {
  themeColor: '#FAD6D3',
  width: 'device-width',
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL('https://kaylaaverda.vercel.app'),
  title: 'Verda | Portofolio Desain Visual dan Front-End Web',
  description:
    'Portofolio personal Kayla Verda Fawnia Heses (Verda), mahasiswa S1 Teknik Informatika Universitas Dian Nuswantoro Semarang yang memadukan eksplorasi desain visual dan kode web.',
  keywords: [
    'Kayla Verda',
    'Verda',
    'Portofolio',
    'UI/UX Designer',
    'Front-End Developer',
    'Teknik Informatika Udinus',
    'Desain Grafis Semarang',
  ],
  authors: [{ name: 'Kayla Verda Fawnia Heses', url: 'https://github.com/KaylaaVerda' }],
  creator: 'Kayla Verda Fawnia Heses',
  openGraph: {
    type: 'website',
    locale: 'id_ID',
    url: 'https://kaylaaverda.vercel.app',
    title: 'Verda | Portofolio Desain Visual dan Front-End Web',
    description:
      'Portofolio personal Kayla Verda Fawnia Heses (Verda), mahasiswa S1 Teknik Informatika Udinus Semarang dengan fokus visual UI/UX dan front-end web.',
    siteName: 'Portofolio Verda',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Verda | Portofolio Desain Visual dan Front-End Web',
    description:
      'Portofolio personal Kayla Verda Fawnia Heses (Verda), mahasiswa S1 Teknik Informatika Udinus Semarang.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className={`${greatVibes.variable} ${lora.variable}`}>
      <body className="min-h-screen font-serif text-bole antialiased">
        <a
          href="#konten-utama"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:rounded-full focus:bg-salmon-pink focus:px-4 focus:py-2 focus:text-white focus:shadow-sweet focus:outline-none focus:ring-2 focus:ring-bole text-sm font-medium"
        >
          Lewati ke konten utama
        </a>
        <div className="relative w-full overflow-x-clip">{children}</div>
      </body>
    </html>
  );
}
