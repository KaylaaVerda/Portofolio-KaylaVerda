import { PhotographyItem } from './types';

export const photographyIntro = {
  title: 'Galeri Foto dan Sudut Pandang',
  description:
    'Selain merangkai antarmuka digital, saya gemar mengamati cahaya dan menangkap momen sederhana di sekitar melalui lensa kamera.',
};

export const photographyItems: PhotographyItem[] = [
  {
    id: 'photo-01',
    title: 'Sudut Teduh Kota',
    caption: 'Pendar cahaya alami di antara pepohonan kota yang menghadirkan suasana hening dan nyaman.',
    image: '/images/photography/foto-01.jpg',
    tags: ['Lanskap', 'Pencahayaan Alami', 'Semarang'],
    location: 'Semarang',
    aspectRatio: 'square',
  },
  {
    id: 'photo-02',
    title: 'Kala Senja Tiba',
    caption: 'Gradasi rona hangat di ufuk barat saat matahari perlahan berpamitan di ujung hari.',
    image: '/images/photography/foto-02.jpg',
    tags: ['Senja', 'Warna Hangat', 'Langit'],
    location: 'Semarang',
    aspectRatio: 'portrait',
  },
  {
    id: 'photo-03',
    title: 'Jejak Arsitektur Lama',
    caption: 'Komposisi garis tegas dan tekstur dinding yang menyimpan memori cerita masa lalu.',
    image: '/images/photography/foto-03.jpg',
    tags: ['Arsitektur', 'Tekstur', 'Kota Lama'],
    location: 'Kota Lama Semarang',
    aspectRatio: 'landscape',
  },
  {
    id: 'photo-04',
    title: 'Kehangatan Secangkir Kopi',
    caption: 'Menikmati waktu jeda di sudut meja dengan pantulan sinar lembut dari jendela kaca.',
    image: '/images/photography/foto-04.jpg',
    tags: ['Masih Hidup', 'Kedai Kopi', 'Detail'],
    location: 'Semarang',
    aspectRatio: 'square',
  },
  {
    id: 'photo-05',
    title: 'Kelopak Pagi Hari',
    caption: 'Kelembutan warna bunga yang mekar perlahan menyambut udara pagi yang segar.',
    image: '/images/photography/foto-05.jpg',
    tags: ['Flora', 'Makro', 'Warna Pastel'],
    location: 'Taman Kampus',
    aspectRatio: 'portrait',
  },
  {
    id: 'photo-06',
    title: 'Langkah Menjelang Petang',
    caption: 'Siluet pejalan kaki di trotoar berhias pantulan lampu jalan yang mulai menyala temaram.',
    image: '/images/photography/foto-06.jpg',
    tags: ['Street', 'Siluet', 'Malam'],
    location: 'Semarang',
    aspectRatio: 'landscape',
  },
];
