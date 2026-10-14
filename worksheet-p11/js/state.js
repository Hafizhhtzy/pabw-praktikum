import { daftarProyek } from "./data.js";
import { render } from "./dom.js";

const state = {
  daftarProyek,
  kategoriAktif: "semua",
};

export function pilihKategori(kategori) {
  state.kategoriAktif = kategori;
  render(state);
}

export default state;