import {
  profil,
  daftarProyek,
  buatPerkenalan,
  formatKeahlian,
} from "./data.js";

import { render, siapkanForm } from "./dom.js";
import { pasangEventForm, pasangEventFilter } from "./events.js";

const kalimat =
  `Nama saya ${profil.nama}, dan saya belajar ${profil.keahlian.length} hal.`;

const judulProyek = daftarProyek.map((proyek) => proyek.judul);

const selesai = daftarProyek.filter((proyek) => proyek.selesai);

const proyekTahun2026 = daftarProyek.filter(
  (proyek) => proyek.tahun === 2026,
);

const proyekKasir = daftarProyek.find(
  (proyek) => proyek.judul === "Sistem aplikasi kasir",
);

const proyekTerbaru = [...daftarProyek].sort(
  (a, b) => b.tahun - a.tahun,
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

siapkanForm();
render(daftarProyek);
pasangEventForm();
pasangEventFilter();