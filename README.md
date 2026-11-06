# Portofolio Verda

Website portofolio pribadi Kayla Verda Fawnia Heses, atau Verda, mahasiswa S1 Teknik Informatika Universitas Dian Nuswantoro di Semarang. Portofolio ini menampilkan minat pada desain visual, UI/UX, fotografi, dan pengembangan web dasar.

## Teknologi

- Next.js App Router
- React dan TypeScript
- Tailwind CSS
- Framer Motion sebagai dependensi animasi
- Google Fonts melalui `next/font/google` (Great Vibes dan Lora)

## Menjalankan secara lokal

Pastikan Node.js dan npm sudah terpasang, kemudian jalankan:

```bash
npm install
npm run dev
```

Buka [http://localhost:3000](http://localhost:3000) di browser.

## Perintah yang tersedia

```bash
npm run dev    # Menjalankan development server
npm run build  # Membuat build produksi
npm run start  # Menjalankan build produksi
```

Jalankan `npm run build` untuk memeriksa kompilasi dan TypeScript sebelum deploy.

## Isi website

- Beranda dan informasi singkat tentang Verda
- Pendidikan, minat, dan daftar keterampilan
- Galeri desain dengan kategori Umum, HMTI Udinus, dan SMA
- Galeri fotografi dengan tampilan lightbox
- Daftar proyek GitHub
- Informasi kontak dan tautan media sosial

## Mengubah konten

Konten website dikelola di folder `data/`:

- `data/profile.ts`: informasi profil, pendidikan, kontak, dan tautan sosial
- `data/skills.ts`: daftar keterampilan
- `data/design.ts`: kategori dan karya desain
- `data/photography.ts`: karya fotografi
- `data/projects.ts`: proyek GitHub

Perbarui data di berkas tersebut dengan informasi dan karya yang benar. Jangan menambahkan informasi pribadi atau pengalaman yang belum terverifikasi.

## Menambahkan gambar

Letakkan gambar di folder `public/images/`, lalu isi jalur gambar terkait pada data. Jalur yang dipakai di data dimulai dari `/images/`, bukan `/public/images/`.

Lokasi yang disiapkan:

```text
public/images/
├── profile.jpg
├── design/
│   ├── umum/
│   ├── hmti/
│   └── sma/
└── photography/
```

Contoh: simpan foto profil sebagai `public/images/profile.jpg`, lalu isi `profileImage` di `data/profile.ts` dengan `/images/profile.jpg`. Untuk karya galeri, simpan file pada folder kategorinya dan perbarui properti `image` pada `data/design.ts` atau `data/photography.ts`.

Folder galeri saat ini hanya berisi `.gitkeep`, bukan foto portofolio. Jika jalur gambar belum diisi atau file belum tersedia, website menampilkan placeholder bawaan.

## Deploy ke Vercel

1. Unggah repository ini ke GitHub.
2. Impor repository dari dashboard Vercel.
3. Pertahankan pengaturan build Next.js bawaan Vercel.
4. Pilih **Deploy**.

Tidak ada backend atau variabel lingkungan wajib untuk menjalankan website.

### Proyek GitHub dinamis (opsional)

Secara default daftar proyek berasal dari `data/projects.ts`. Untuk mengambil repositori publik dari GitHub saat halaman dirender, atur variabel lingkungan Vercel:

```text
GITHUB_FETCH_ENABLED=true
```

Fitur ini dinonaktifkan secara default. `GITHUB_TOKEN` opsional dan hanya diperlukan bila ingin menggunakan token untuk permintaan API GitHub. Jangan pernah menyimpan token di repository.
