export const profil = {
  nama: 'Muhammad Hafizh Dermawan',
  peran: 'Mahasiswa Informatika',
  keahlian: ['HTML', 'CSS', 'JavaScript'],
}

export const daftarProyek = [
  {
    id: 'catering',
    judul: 'Sistem aplikasi catering',
    tahun: 2026,
    selesai: true,
    kategori: 'web',
  },
  {
    id: 'kasir',
    judul: 'Sistem aplikasi kasir',
    tahun: 2026,
    selesai: true,
    kategori: 'web',
  },
  {
    id: 'trashvision',
    judul: 'Tampilan aplikasi TrashVision',
    tahun: 2025,
    selesai: true,
    kategori: 'data',
  },
]

export function buatPerkenalan({ nama, peran }) {
  return `${nama} — ${peran}`
}

export function formatKeahlian(daftar) {
  return daftar.join(' · ')
}