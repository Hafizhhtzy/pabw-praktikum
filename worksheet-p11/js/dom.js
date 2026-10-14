export const barisFilter = document.querySelector("#filter");
const wadah = document.querySelector("#daftar");
const kosong = document.querySelector("#pesan-kosong");

export const form = document.querySelector("#kontak form");
const tombolKirim = form.querySelector('button[type="submit"]');

export const kolomForm = [
  document.querySelector("#nama"),
  document.querySelector("#email"),
  document.querySelector("#nim"),
  document.querySelector("#pesan"),
];

function buatKartu(proyek) {
  const li = document.createElement("li");
  li.className = "kartu";
  li.textContent = proyek.judul;
  return li;
}

function saring(state) {
  return state.daftarProyek.filter((proyek) => {
    return (
      state.kategoriAktif === "semua" ||
      proyek.kategori === state.kategoriAktif
    );
  });
}

export function render(state) {
  wadah.textContent = "";

  const tampil = saring(state);

  if (tampil.length === 0) {
    kosong.hidden = false;
    return;
  }

  kosong.hidden = true;

  tampil.forEach((proyek) => {
    wadah.append(buatKartu(proyek));
  });
}

export function tandaiTombolAktif(tombolAktif) {
  document.querySelectorAll("#filter button").forEach((tombol) => {
    tombol.classList.toggle("aktif", tombol === tombolAktif);
  });
}

function ambilPesanGalat(kolom) {
  return kolom.closest(".form-kolom").querySelector(".pesan-galat");
}

function isiKolomSah(kolom) {
  const nilai = kolom.value.trim();

  if (nilai === "") return false;
  if (kolom.id === "email") return kolom.validity.valid;
  if (kolom.id === "nim") return /^[0-9]{8}$/.test(nilai);

  return true;
}

export function periksaKolom(kolom, tampilkanPesan) {
  const sah = isiKolomSah(kolom);
  const pesanGalat = ambilPesanGalat(kolom);

  kolom.setAttribute("aria-invalid", String(!sah));

  if (tampilkanPesan) {
    pesanGalat.hidden = sah;
  }

  return sah;
}

export function perbaruiTombolKirim() {
  const sah = kolomForm.every((kolom) => isiKolomSah(kolom));
  tombolKirim.disabled = !sah;
}

export function siapkanForm() {
  form.noValidate = true;

  kolomForm.forEach((kolom) => {
    ambilPesanGalat(kolom).hidden = true;
    kolom.setAttribute("aria-invalid", "false");
  });
}