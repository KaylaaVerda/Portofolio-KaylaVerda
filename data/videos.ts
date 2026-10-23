import { VideosData } from './types';

export const videosData: VideosData = {
  sectionIntro:
    'Dokumentasi visual bergerak, rekaman presentasi, serta eksplorasi video pendek yang merangkum proses belajar dan kreativitas saya.',
  youtubeVideos: [
    {
      id: 'video-yt-01',
      title: 'Video Dokumentasi Kreatif 01',
      description:
        'Cuplikan dokumentasi kegiatan kampus dan proses penyusunan konten visual yang dikemas secara ringkas.',
      videoId: '', // Cukup isi dengan ID video YouTube (misalnya: dQw4w9WgXcQ)
    },
    {
      id: 'video-yt-02',
      title: 'Video Perancangan Desain 02',
      description:
        'Penjelasan alur rancangan visual antarmuka dari penentuan warna hingga tampilan akhir prototipe.',
      videoId: '', // Masukkan ID YouTube jika sudah tersedia
    },
    {
      id: 'video-yt-03',
      title: 'Video Eksplorasi Suasana 03',
      description:
        'Kompilasi singkat seputar eksplorasi sudut pandang visual di kota Semarang.',
      videoId: '', // Masukkan ID YouTube jika sudah tersedia
    },
  ],
  localVideos: [
    {
      id: 'video-local-01',
      title: 'Klip Estetika Visual',
      description:
        'Format video lokal opsional yang dapat diputar langsung dari folder public/videos.',
      videoSrc: '/videos/sample.mp4',
      posterSrc: '/images/photography/foto-01.jpg',
    },
  ],
};
