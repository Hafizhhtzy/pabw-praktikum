import { daftarProyek, filterProyek } from "./data.js";
import { ambilKategoriAktif, aturKategoriAktif } from "./state.js";

import {
  barisFilter,
  form,
  kolomForm,
  periksaKolom,
  perbaruiTombolKirim,
  tandaiTombolAktif,
  render,
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

    aturKategoriAktif(tombol.dataset.kategori);
    tandaiTombolAktif(tombol);

    const kategoriAktif = ambilKategoriAktif();
    render(filterProyek(daftarProyek, kategoriAktif));
  });
}