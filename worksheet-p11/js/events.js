import { pilihKategori } from "./state.js";

import {
  barisFilter,
  form,
  kolomForm,
  periksaKolom,
  perbaruiTombolKirim,
  tandaiTombolAktif,
} from "./dom.js";

export function pasangEventForm() {
  kolomForm.forEach((kolom) => {
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
}

export function pasangEventFilter() {
  barisFilter.addEventListener("click", (event) => {
    const tombol = event.target.closest("button");

    if (!tombol) return;

    pilihKategori(tombol.dataset.kategori);
    tandaiTombolAktif(tombol);
  });
}