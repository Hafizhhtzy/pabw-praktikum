import { ambilData } from "./api.js";

const wadah = document.querySelector("#daftar-profil");

function tampilkanData(data) {
  window.tampilkanData = tampilkanData;
  wadah.textContent = "";

  if (data.length === 0) {
    wadah.textContent = "Belum ada data.";
    return;
  }

  data.forEach((profil) => {
    const li = document.createElement("li");

    li.textContent =
      `${profil.nama} — NIM: ${profil.nim} — ${profil.peran}`;

    wadah.append(li);
  });
}

async function muat() {
  wadah.textContent = "Memuat data...";

  try {
    const data = await ambilData();

    console.log("Data dari profile.json:");
    console.table(data);

    tampilkanData(data);
  } catch (galat) {
    console.error("Gagal di app.js:", galat.message);

    wadah.textContent = `Gagal memuat data: ${galat.message}`;
  }
}

muat();

const profil = {
  nama: "Muhammad Hafizh Dermawan",
  peran: "Mahasiswa Informatika",
  keahlian: ["HTML", "CSS", "JavaScript"],
};

const kalimat =
  `Nama saya ${profil.nama}, dan saya belajar ${profil.keahlian.length} hal.`;

function buatPerkenalan({ nama, peran }) {
  return `${nama} — ${peran}`;
}

const formatKeahlian = (daftar) => daftar.join(" · ");

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