import { SkillGroup } from './types';

export const skillGroups: SkillGroup[] = [
  {
    id: 'desain',
    title: 'Desain Visual dan UI/UX',
    description:
      'Fokus utama saya dalam merangkai tata letak yang ramah pengguna, harmoni warna yang lembut, dan hierarki visual yang tertata rapi.',
    statusNote: 'Eksplorasi aktif',
    skills: [
      { id: 'figma', name: 'Figma', category: 'desain', level: 'Familiar', note: 'Wireframe dan rancangan antarmuka' },
      { id: 'canva', name: 'Canva', category: 'desain', level: 'Familiar', note: 'Konten visual dan presentasi' },
      { id: 'color-theory', name: 'Teori Warna dan Tipografi', category: 'desain', level: 'Fokus minat', note: 'Harmoni visual' },
      { id: 'wireframing', name: 'Rancangan Tata Letak', category: 'desain', level: 'Familiar', note: 'Eksplorasi ide awal' },
    ],
  },
  {
    id: 'frontend',
    title: 'Pemrograman',
    description:
      'Bahasa yang saya gunakan untuk membangun logika program, dilengkapi pemahaman dasar dalam merangkai antarmuka web yang sederhana.',
    statusNote: 'Terus dipelajari dan dikembangkan',
    skills: [
      { id: 'java', name: 'Java', category: 'frontend', level: 'Familiar', note: 'Pemrograman berorientasi objek' },
      { id: 'cpp', name: 'C++', category: 'frontend', level: 'Familiar', note: 'Logika dan struktur program' },
      { id: 'python', name: 'Python', category: 'frontend', level: 'Familiar', note: 'Penyusunan skrip dan pemecahan masalah' },
      { id: 'html', name: 'HTML5', category: 'frontend', level: 'Dasar', note: 'Struktur semantik' },
      { id: 'css', name: 'CSS3', category: 'frontend', level: 'Dasar', note: 'Tata letak dan penataan tampilan' },
      { id: 'js', name: 'JavaScript', category: 'frontend', level: 'Dasar', note: 'Logika antarmuka dasar' },
    ],
  },
  {
    id: 'lainnya',
    title: 'Fotografi dan Videografi',
    description:
      'Minat kreatif di balik lensa, dari merangkai komposisi hingga menyunting hasil jepretan dan rekaman.',
    statusNote: 'Ditekuni secara mandiri',
    skills: [
      { id: 'lightroom', name: 'Adobe Lightroom', category: 'lainnya', level: 'Lumayan', note: 'Penyesuaian warna dan cahaya' },
      { id: 'photoshop', name: 'Adobe Photoshop', category: 'lainnya', level: 'Dasar', note: 'Suntingan gambar sederhana' },
      { id: 'photography', name: 'Fotografi', category: 'lainnya', level: 'Minat kreatif', note: 'Komposisi dan pencahayaan' },
      { id: 'videography', name: 'Videografi', category: 'lainnya', level: 'Minat kreatif', note: 'Pengambilan gambar bergerak' },
    ],
  },
];
