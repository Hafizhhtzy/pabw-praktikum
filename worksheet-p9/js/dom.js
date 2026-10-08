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

  daftar.forEach((proyek) => {
    wadah.append(buatKartu(proyek));
  });
}

render(daftarProyek);

function tandaiTombolAktif(tombolAktif) {
  document.querySelectorAll("#filter button").forEach((tombol) => {
    tombol.classList.toggle("aktif", tombol === tombolAktif);
  });
}

barisFilter.addEventListener("click", (event) => {
  const tombol = event.target.closest("button");

  if (!tombol) return;
  tandaiTombolAktif(tombol);

  const kategori = tombol.dataset.kategori;

  const terpilih = daftarProyek.filter((proyek) => {
    return kategori === "semua" || proyek.kategori === kategori;
  });

  render(terpilih);
});