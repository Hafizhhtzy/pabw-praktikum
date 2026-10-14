import { daftarProyek } from "./data.js";

const state = {
  daftarProyek,
  kategoriAktif: "semua",
};

export function aturKategoriAktif(kategori) {
  state.kategoriAktif = kategori;
}

export default state;