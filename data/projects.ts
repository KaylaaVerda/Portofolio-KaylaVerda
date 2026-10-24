import { ProjectsData } from './types';

export const projectsData: ProjectsData = {
  githubUsername: 'KaylaaVerda',
  githubProfileUrl: 'https://github.com/KaylaaVerda',
  enableGithubFetch: false,
  sectionIntro:
    'Rangkaian proyek yang merangkai konsep tata letak grafis bersama implementasi kode yang terstruktur.',
  projects: [
    {
      id: 'proj-01',
      title: 'Website Portofolio Personal',
      description:
        'Situs portofolio pribadi bertema bakery lembut yang memadukan Next.js App Router dan Tailwind CSS dengan mengutamakan keterbacaan serta aksesibilitas.',
      techStack: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
      repoUrl: 'https://github.com/KaylaaVerda/Portofolio-KaylaVerda',
      demoUrl: 'https://kaylaaverda.vercel.app',
      thumbnail: '/images/design/umum/karya-01.jpg',
      isFeatured: true,
    },
    {
      id: 'proj-02',
      title: 'Katalog Antarmuka Manis',
      description:
        'Eksplorasi tata letak katalog produk dengan komponen kartu kartu responsif dan filter kategori yang mudah dipahami.',
      techStack: ['React', 'Tailwind CSS', 'Figma'],
      repoUrl: 'https://github.com/KaylaaVerda',
      thumbnail: '/images/design/umum/karya-02.jpg',
      isFeatured: true,
    },
    {
      id: 'proj-03',
      title: 'Aplikasi Catatan Inspirasi Visual',
      description:
        'Aplikasi web sederhana untuk mencatat referensi warna dan inspirasi desain antarmuka bagi pemula.',
      techStack: ['JavaScript', 'HTML5', 'CSS3'],
      repoUrl: 'https://github.com/KaylaaVerda',
      thumbnail: '/images/design/umum/karya-03.jpg',
      isFeatured: false,
    },
    {
      id: 'proj-04',
      title: 'Halaman Pengenalan Komunitas',
      description:
        'Rancangan halaman arahan yang fokus pada kejelasan informasi dan keselarasan hierarki tipografi.',
      techStack: ['HTML5', 'Tailwind CSS', 'JavaScript'],
      repoUrl: 'https://github.com/KaylaaVerda',
      thumbnail: '/images/design/hmti/karya-01.jpg',
      isFeatured: false,
    },
  ],
};
