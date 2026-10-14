export const profil = {
  nama: "Muhammad Hafizh Dermawan",
  peran: "Mahasiswa Informatika",
  keahlian: ["HTML", "CSS", "JavaScript"],
};

export const daftarProyek = [
  {
    judul: "Sistem aplikasi catering",
    tahun: 2026,
    selesai: true,
    kategori: "web",
  },
  {
    judul: "Sistem aplikasi kasir",
    tahun: 2026,
    selesai: true,
    kategori: "web",
  },
  {
    judul: "Tampilan aplikasi TrashVision",
    tahun: 2025,
    selesai: true,
    kategori: "data",
  },
];

export function buatKalimat(dataProfil) {
  return `Nama saya ${dataProfil.nama}, dan saya belajar ${dataProfil.keahlian.length} hal.`;
}

export function buatPerkenalan({ nama, peran }) {
  return `${nama} — ${peran}`;
}

export function formatKeahlian(daftar) {
  return daftar.join(" · ");
}

export function filterProyek(daftar, kategori) {
  if (kategori === "semua") return daftar;

  return daftar.filter((proyek) => proyek.kategori === kategori);
}