import { SkillGroup } from './types';

export const skillGroups: SkillGroup[] = [
  {
    id: 'desain',
    title: 'Desain Visual dan UI/UX',
    description:
      'Fokus utama saya dalam merangkai tata letak yang ramah pengguna, harmoni warna yang lembut, dan hierarki visual yang tertata rapi.',
    skills: [
      { id: 'figma', name: 'Figma', category: 'desain', level: 'Familiar', note: 'Wireframe dan UI Design' },
      { id: 'canva', name: 'Canva', category: 'desain', level: 'Familiar', note: 'Konten Visual dan Presentasi' },
      { id: 'photoshop', name: 'Adobe Photoshop', category: 'desain', level: 'Dasar', note: 'Manipulasi Gambar Sederhana' },
      { id: 'color-theory', name: 'Teori Warna dan Tipografi', category: 'desain', level: 'Fokus Minat', note: 'Harmoni Visual' },
      { id: 'wireframing', name: 'Rancangan Tata Letak', category: 'desain', level: 'Familiar', note: 'Eksplorasi Ide Awal' },
    ],
  },
  {
    id: 'frontend',
    title: 'Pengembangan Front-End',
    description:
      'Pemahaman dasar dalam menerjemahkan rancangan grafis menjadi susunan kode web yang terstruktur dan responsif.',
    skills: [
      { id: 'html', name: 'HTML5', category: 'frontend', level: 'Dasar', note: 'Struktur Semantik' },
      { id: 'css', name: 'CSS3', category: 'frontend', level: 'Dasar', note: 'Styling dan Flexbox' },
      { id: 'tailwind', name: 'Tailwind CSS', category: 'frontend', level: 'Dasar', note: 'Utility-first Styling' },
      { id: 'js', name: 'JavaScript', category: 'frontend', level: 'Dasar', note: 'Logika Antarmuka Dasar' },
      { id: 'nextjs', name: 'Next.js dan React', category: 'frontend', level: 'Sedang Belajar', note: 'Eksplorasi Komponen Modern' },
    ],
  },
  {
    id: 'lainnya',
    title: 'Keahlian Pendukung',
    description:
      'Minat kreatif dan alat kolaborasi yang memperkaya proses berkarya secara menyeluruh.',
    skills: [
      { id: 'photography', name: 'Fotografi Digital', category: 'lainnya', level: 'Minat Kreatif', note: 'Komposisi dan Pencahayaan' },
      { id: 'git', name: 'Git dan GitHub', category: 'lainnya', level: 'Dasar', note: 'Manajemen Repositori Kode' },
      { id: 'teamwork', name: 'Komunikasi Tim', category: 'lainnya', level: 'Kekuatan Pribadi', note: 'Kolaborasi Proyek Terbuka' },
      { id: 'visual-storytelling', name: 'Penceritaan Visual', category: 'lainnya', level: 'Minat Kreatif', note: 'Eksplorasi Konsep' },
    ],
  },
];
