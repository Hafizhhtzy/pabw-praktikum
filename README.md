# pabw-praktikum
## Pertemuan 4 — Halaman Profil dan Design Token

Halaman ini adalah profil pribadi Muhammad Hafizh Dermawan, mahasiswa Informatika Universitas Islam Indonesia.

### Arah visual

Arah visual halaman adalah hangat dan sederhana. Warna utama yang digunakan adalah cokelat `#7A5C4B`, terinspirasi dari warna cream dan cokelat pada foto profil. Latar terang memakai putih cream, sedangkan tema gelap memakai cokelat tua.

Halaman memakai lima berkas CSS:

- `worksheet-p4/css/tokens.css`
- `worksheet-p4/css/base.css`
- `worksheet-p4/css/layout.css`
- `worksheet-p4/css/komponen.css`
- `worksheet-p4/css/tema.css`

### Token yang saya tetapkan

| Token | Nilai | Untuk apa |
|---|---|---|
| `--color-primary` | `#7A5C4B` | Tombol, tautan, judul, dan penanda fokus |
| `--color-fg` | `#3B2A22` | Warna teks utama |
| `--color-bg` | `#FFFDF8` | Latar halaman |
| `--color-surface` | `#F5E6D3` | Latar kartu dan panel |
| `--radius-md` | `0.75rem` | Sudut membulat |
| `--space-4` | `1rem` | Jarak standar antar elemen |

Kriteria keberhasilan saya: mengubah nilai `--color-primary` di satu tempat mengubah warna tombol, tautan, judul, dan penanda fokus pada tema terang.

### Galeri karya

Bagian Galeri karya memakai elemen `figure` untuk menampilkan tangkapan layar karya saya beserta `figcaption` sebagai keterangannya. Bagian ini ditujukan untuk pengunjung atau dosen yang ingin melihat hasil proyek saya secara visual.

### Sedang saya kerjakan

Bagian Sedang saya kerjakan memakai elemen `article` karena isinya merupakan informasi mandiri mengenai proyek yang sedang saya kembangkan. Bagian ini membantu pembaca mengetahui aktivitas belajar dan perkembangan proyek saya.

### Tanya jawab

Bagian Tanya jawab memakai elemen `details` dan `summary` agar pembaca dapat membuka jawaban yang ingin diketahui saja. Bagian ini ditujukan untuk menjelaskan secara ringkas materi yang sedang saya pelajari dan proyek yang pernah saya buat.

## Catatan penggunaan AI

AI digunakan untuk membantu menjelaskan instruksi worksheet, memberi contoh dan membantu menyusun struktur HTML serta CSS, penggunaan design token, flexbox, tema gelap, fokus papan ketik, dan pemeriksaan kesalahan kode.

Saya sendiri mengisi data pribadi, daftar kegiatan dan karya, memilih warna visual, memasukkan foto dan gambar karya, menerapkan serta menyesuaikan kode, dan menguji halaman di browser.

## Pertemuan 8 — JavaScript Modern

AI digunakan untuk membantu menjelaskan instruksi worksheet dan memberi contoh struktur JavaScript untuk objek profil, daftar proyek, fungsi murni, serta penggunaan `map`, `filter`, dan `find`.

Saya sendiri menyesuaikan data profil dan proyek, memasukkan kode ke `app.js`, menjalankan halaman melalui server lokal, memeriksa hasil di Console, melakukan uji debugging, dan menyimpan perubahan ke Git.

## Pertemuan 9 — DOM Event dan Interaktivitas

AI digunakan untuk membantu menjelaskan instruksi worksheet, memberi contoh penggunaan DOM seperti `querySelector`, `createElement`, `textContent`, `append`, `render`, event delegation, dan validasi form.

Saya sendiri menerapkan dan menyesuaikan kode pada `profil.html`, `js/app.js`, `js/dom.js`, dan CSS; menguji hasilnya di browser; memperbaiki galat; serta memastikan filter dan validasi form berjalan.

## Sketsa Kerangka Halaman

~~~text
┌──────────────────────────────────────────────┐
│ Header                                       │
│ Nama • Navigasi • Tombol Tema                │
├───────────────────┬──────────────────────────┤
│ Kolom kiri        │ Kolom kanan              │
│ Tentang saya      │ Karya saya               │
│ Foto profil       │ Hubungi saya             │
│ Kegiatan          │ Galeri karya             │
│                   │ Sedang dikerjakan        │
│                   │ Tanya jawab              │
├───────────────────┴──────────────────────────┤
│ Footer: Nama • NIM • Tahun                   │
└──────────────────────────────────────────────┘
~~~

Pada desktop, area isi menggunakan dua kolom: `16rem` dan `1fr`. Pada layar kecil, area isi berubah menjadi satu kolom agar tidak terjadi scroll horizontal.

## Worksheet P5 — Lembar A.1 Kerangka Halaman

| Bagian halaman | Peran | Nilai yang saya pakai |
|---|---|---|
| Baris pertama | Kepala halaman: nama, navigasi, dan tombol tema | `auto` |
| Baris kedua | Isi utama halaman profil | `1fr` |
| Baris ketiga | Kaki halaman | `auto` |
| Kolom isi | Informasi profil dan konten utama | `16rem 1fr` |
