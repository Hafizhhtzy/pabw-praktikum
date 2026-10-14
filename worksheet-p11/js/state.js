const state = {
  kategoriAktif: "semua",
};

export function ambilKategoriAktif() {
  return state.kategoriAktif;
}

export function aturKategoriAktif(kategori) {
  state.kategoriAktif = kategori;
}