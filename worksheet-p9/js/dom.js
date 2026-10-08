import { daftarProyek } from "./app.js";

console.table(daftarProyek);

const barisFilter = document.querySelector("#filter");
const wadah = document.querySelector("#daftar");
const kosong = document.querySelector("#pesan-kosong");

function buatKartu(proyek) {
  const li = document.createElement("li");
  li.className = "kartu";
  li.textContent = proyek.judul;
  return li;
}

function render(daftar) {
  wadah.textContent = "";

  if (daftar.length === 0) {
    kosong.hidden = false;
    return;
  }

  kosong.hidden = true;

  daftar.forEach((proyek) => {
    wadah.append(buatKartu(proyek));
  });
}

function tandaiTombolAktif(tombolAktif) {
  document.querySelectorAll("#filter button").forEach((tombol) => {
    tombol.classList.toggle("aktif", tombol === tombolAktif);
  });
}

render(daftarProyek);

barisFilter.addEventListener("click", (event) => {
  const tombol = event.target.closest("button");

  if (!tombol) return;

  tandaiTombolAktif(tombol);

  const kategori = tombol.dataset.kategori;

  const terpilih = daftarProyek.filter((proyek) => {
    return kategori === "semua" || proyek.kategori === kategori;
  });
  const form = document.querySelector("#kontak form");
const tombolKirim = form.querySelector('button[type="submit"]');

const kolomForm = [
  document.querySelector("#nama"),
  document.querySelector("#email"),
  document.querySelector("#nim"),
  document.querySelector("#pesan"),
];

form.noValidate = true;

function ambilPesanGalat(kolom) {
  return kolom.closest(".form-kolom").querySelector(".pesan-galat");
}

function isiKolomSah(kolom) {
  const nilai = kolom.value.trim();

  if (nilai === "") {
    return false;
  }

  if (kolom.id === "email") {
    return kolom.validity.valid;
  }

  if (kolom.id === "nim") {
    return /^[0-9]{8}$/.test(nilai);
  }

  return true;
}

function periksaKolom(kolom, tampilkanPesan) {
  const sah = isiKolomSah(kolom);
  const pesanGalat = ambilPesanGalat(kolom);

  kolom.setAttribute("aria-invalid", String(!sah));

  if (tampilkanPesan) {
    pesanGalat.hidden = sah;
  }

  return sah;
}

function perbaruiTombolKirim() {
  const sah = kolomForm.every((kolom) => isiKolomSah(kolom));
  tombolKirim.disabled = !sah;
}

kolomForm.forEach((kolom) => {
  ambilPesanGalat(kolom).hidden = true;
  kolom.setAttribute("aria-invalid", "false");

  kolom.addEventListener("input", () => {
    periksaKolom(kolom, true);
    perbaruiTombolKirim();
  });
});

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const kolomTidakSah = kolomForm.filter((kolom) => {
    return !periksaKolom(kolom, true);
  });

  perbaruiTombolKirim();

  if (kolomTidakSah.length > 0) {
    kolomTidakSah[0].focus();
  }
});

  render(terpilih);
});