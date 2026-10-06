const profil = {
  nama: "Muhammad Hafizh Dermawan",
  peran: "Mahasiswa Informatika",
  keahlian: ["HTML", "CSS", "JavaScript"],
};

const kalimat = `Nama saya ${profil.nama}, dan saya belajar ${profil.keahlian.length} hal.`;

function buatPerkenalan({ nama, peran }) {
  return `${nama} — ${peran}`;
}

const formatKeahlian = (daftar) => daftar.join(" · ");

const daftarProyek = [
  { judul: "Sistem aplikasi catering", tahun: 2026, selesai: true },
  { judul: "Sistem aplikasi kasir", tahun: 2026, selesai: true },
  { judul: "Tampilan aplikasi TrashVision", tahun: 2025, selesai: true },
];

const judulProyek = daftarProyek.map((proyek) => proyek.judul);

const selesai = daftarProyek.filter((proyek) => proyek.selesai);

const proyekTahun2026 = daftarProyek.filter(
  (proyek) => proyek.tahun === 2026
);

const proyekKasir = daftarProyek.find(
  (proyek) => proyek.judul === "Sistem aplikasi kasir"
);

const proyekTerbaru = [...daftarProyek].sort(
  (a, b) => b.tahun - a.tahun
);

console.log(kalimat);
console.log(buatPerkenalan(profil));
console.log(formatKeahlian(profil.keahlian));

console.table(profil.keahlian);
console.table(daftarProyek);
console.table(selesai);
console.table(proyekTahun2026);
console.log(proyekKasir);
console.table(judulProyek);
console.table(proyekTerbaru);
console.table(daftarProyek);