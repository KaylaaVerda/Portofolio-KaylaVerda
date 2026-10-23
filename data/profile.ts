import { ProfileData } from './types';

export const profileData: ProfileData = {
  fullName: 'Kayla Verda Fawnia Heses',
  shortName: 'Verda',
  heroGreeting: 'Halo, saya',
  tagline: 'Menjembatani estetika desain visual dengan kode web yang realistis dan fungsional',
  aboutParagraphs: [
    'Halo, saya Kayla Verda Fawnia Heses, akrab disapa Verda. Saya seorang mahasiswa S1 Teknik Informatika di Universitas Dian Nuswantoro yang berdomisili di Semarang. Ketertarikan utama saya berpusat pada eksplorasi desain visual, komposisi estetika, dan dasar pengembangan antarmuka web.',
    'Bagi saya, keindahan rancangan antarmuka akan semakin hidup ketika selaras dengan kemudahan implementasi kode. Latar belakang informatika memberi saya sudut pandang logis dalam merancang layout yang tidak hanya cantik dipandang, namun juga masuk akal secara teknis untuk diwujudkan.',
    'Selain mendesain dan bereksplorasi dengan web modern, saya senang mengabadikan momen lewat fotografi. Saat ini saya bersemangat untuk menyambut kesempatan magang, pelatihan intensif UI/UX dan Front-End, serta kolaborasi kompetisi yang positif.',
  ],
  education: {
    university: 'Universitas Dian Nuswantoro',
    major: 'Teknik Informatika',
    degree: 'S1',
    city: 'Semarang',
  },
  profileImage: '/images/profile.jpg',
  socialLinks: [
    {
      platform: 'instagram',
      label: 'Instagram',
      url: 'https://www.instagram.com/kaylaaver_/',
      displayValue: '@kaylaaver_',
    },
    {
      platform: 'linkedin',
      label: 'LinkedIn',
      url: 'https://id.linkedin.com/in/kayla-verda-fawnia-h-667899348',
      displayValue: 'Kayla Verda Fawnia H',
    },
    {
      platform: 'github',
      label: 'GitHub',
      url: 'https://github.com/KaylaaVerda',
      displayValue: 'KaylaaVerda',
    },
    {
      platform: 'email',
      label: 'Email',
      url: 'mailto:kaylaaverda@gmail.com',
      displayValue: 'kaylaaverda@gmail.com',
    },
  ],
  contactHeading: 'Mari Berteman dan Berkolaborasi',
  contactDescription:
    'Pintu komunikasi saya selalu terbuka untuk tawaran magang, program bootcamp, kompetisi tim, maupun sekadar berdiskusi seputar desain visual dan web.',
};
