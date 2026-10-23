import { DesignCategoryInfo, DesignItem } from './types';

export const designCategories: DesignCategoryInfo[] = [
  {
    id: 'umum',
    title: 'Kategori Umum',
    subtitle:
      'Kumpulan eksplorasi desain grafis mandiri, poster kreatif, dan konsep antarmuka digital.',
  },
  {
    id: 'hmti',
    title: 'HMTI Udinus',
    subtitle:
      'Karya publikasi visual dan media informasi dalam kegiatan Himpunan Mahasiswa Teknik Informatika.',
    rolePlaceholder: 'Peran: Staf Publikasi dan Dokumentasi HMTI (Placeholder)',
  },
  {
    id: 'sma',
    title: 'Masa SMA',
    subtitle:
      'Dokumentasi karya visual awal yang mengawali minat dan ketertarikan saya pada dunia estetika grafis.',
  },
];

export const designItems: DesignItem[] = [
  {
    id: 'design-umum-01',
    title: 'Judul Karya Desain 01',
    description:
      'Deskripsi singkat konsep desain visual yang dikerjakan, mencakup pemilihan warna, hierarki teks, dan pesan utama yang ingin disampaikan kepada audiens.',
    category: 'umum',
    image: '/images/design/umum/karya-01.jpg',
    tags: ['UI Design', 'Figma', 'Wireframe'],
    year: '2024',
    aspectRatio: 'square',
  },
  {
    id: 'design-umum-02',
    title: 'Judul Karya Desain 02',
    description:
      'Deskripsi singkat rancangan visual dengan penekanan pada komposisi warna pastel dan tipografi yang nyaman dibaca.',
    category: 'umum',
    image: '/images/design/umum/karya-02.jpg',
    tags: ['Eksplorasi Grafis', 'Tipografi', 'Poster'],
    year: '2024',
    aspectRatio: 'portrait',
  },
  {
    id: 'design-umum-03',
    title: 'Judul Karya Desain 03',
    description:
      'Deskripsi singkat konsep antarmuka aplikasi dengan sentuhan elemen lembut dan navigasi yang intuitif bagi pengguna.',
    category: 'umum',
    image: '/images/design/umum/karya-03.jpg',
    tags: ['Mobile UI', 'Figma', 'Prototyping'],
    year: '2024',
    aspectRatio: 'portrait',
  },
  {
    id: 'design-hmti-01',
    title: 'Publikasi Kegiatan HMTI 01',
    description:
      'Desain konten visual untuk publikasi kegiatan mahasiswa Teknik Informatika Udinus dengan gaya formal namun tetap segar.',
    category: 'hmti',
    image: '/images/design/hmti/karya-01.jpg',
    tags: ['HMTI Udinus', 'Media Sosial', 'Publikasi'],
    year: '2023',
    aspectRatio: 'square',
  },
  {
    id: 'design-hmti-02',
    title: 'Poster Acara Kampus 02',
    description:
      'Rancangan poster pengumuman program internal organisasi dengan penekanan informasi jadwal dan tata cara partisipasi.',
    category: 'hmti',
    image: '/images/design/hmti/karya-02.jpg',
    tags: ['HMTI Udinus', 'Poster Event', 'Canva'],
    year: '2023',
    aspectRatio: 'portrait',
  },
  {
    id: 'design-hmti-03',
    title: 'Feed Edukasi Teknologi 03',
    description:
      'Infografis sederhana seputar pengenalan dasar teknologi informasi yang dirancang secara bertahap untuk pembaca umum.',
    category: 'hmti',
    image: '/images/design/hmti/karya-03.jpg',
    tags: ['HMTI Udinus', 'Infografis', 'Edukasi'],
    year: '2024',
    aspectRatio: 'square',
  },
  {
    id: 'design-sma-01',
    title: 'Karya Desain SMA 01',
    description:
      'Eksplorasi awal pembuatan poster acara sekolah saat masa SMA yang menjadi langkah pertama dalam belajar prinsip tata letak.',
    category: 'sma',
    image: '/images/design/sma/karya-01.jpg',
    tags: ['Masa SMA', 'Poster Sekolah', 'Awal Belajar'],
    year: '2022',
    aspectRatio: 'portrait',
  },
  {
    id: 'design-sma-02',
    title: 'Karya Desain SMA 02',
    description:
      'Rancangan visual kartu ucapan dan materi grafis sederhana untuk kegiatan komunitas sekolah tingkat menengah atas.',
    category: 'sma',
    image: '/images/design/sma/karya-02.jpg',
    tags: ['Masa SMA', 'Kartu Ucapan', 'Grafis Dasar'],
    year: '2022',
    aspectRatio: 'square',
  },
];
