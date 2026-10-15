import { daftarProyek } from "./data.js";
import { render } from "./dom.js";

const KUNCI = "pabw-p11";
const VERSI = 2;

const state = {
  daftarProyek,
  kategoriAktif: "semua",
};

export function pilihKategori(kategori) {
  state.kategoriAktif = kategori;
  simpan(state);
  render(state);
}

export function simpan(state) {
  const isi = {
    versi: VERSI,
    kategoriAktif: state.kategoriAktif,
  };

  localStorage.setItem(KUNCI, JSON.stringify(isi));
}

export function muat() {
  try {
    const isi = JSON.parse(localStorage.getItem(KUNCI));

    if (isi?.versi !== VERSI) {
      localStorage.removeItem(KUNCI);
      return null;
    }

    return isi;
  } catch {
    localStorage.removeItem(KUNCI);
    return null;
  }
}

export default state;