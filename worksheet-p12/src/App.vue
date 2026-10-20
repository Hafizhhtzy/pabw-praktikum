<script setup>
import { onMounted, watch } from 'vue'
import { profil } from './data.js'
import { state } from './state.js'
import { muat, simpan, aturUlang } from './simpanan.js'

import KepalaProfil from './components/KepalaProfil.vue'
import TombolFilter from './components/TombolFilter.vue'
import DaftarProyek from './components/DaftarProyek.vue'
import FormKontak from './components/FormKontak.vue'

const identitas = profil

onMounted(() => {
  const isi = muat()

  if (isi) {
    state.kategoriAktif = isi.kategoriAktif
  }
})

watch(state, (nilai) => simpan(nilai), { deep: true })

function aturUlangPilihan() {
  aturUlang()
  state.kategoriAktif = 'semua'
  simpan(state)
}
</script>

<template>
  <a class="lewati" href="#utama">Lewati ke konten utama</a>

  <KepalaProfil :profil="identitas" />

  <main id="utama">
    <section id="tentang">
      <h2>Tentang saya</h2>

      <figure class="foto">
        <img
          src="/media/foto-profil.jpeg"
          alt="Foto diri Muhammad Hafizh Dermawan memakai kemeja putih."
          width="480"
          height="480"
          loading="lazy"
        >
        <figcaption>Foto profil Muhammad Hafizh Dermawan.</figcaption>
      </figure>

      <p>
        Saya adalah mahasiswa Program Studi Informatika di Universitas Islam
        Indonesia. Saya tertarik pada bidang IT, khususnya pemrograman dan
        problem solving. Saya juga sedang mempelajari pembuatan website.
      </p>

      <div class="table-wrap">
        <table>
          <caption>Kegiatan yang saya ikuti semester ini</caption>
          <thead>
            <tr>
              <th scope="col">Kegiatan</th>
              <th scope="col">Peran</th>
              <th scope="col">Waktu</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">Perkuliahan Informatika</th>
              <td>Mahasiswa</td>
              <td><time datetime="2026-09">Semester Gasal 2026/2027</time></td>
            </tr>
            <tr>
              <th scope="row">Belajar Pemrograman Dasar</th>
              <td>Pembelajar Mandiri</td>
              <td><time datetime="2026-09">September 2026</time></td>
            </tr>
            <tr>
              <th scope="row">Latihan HTML, CSS, dan Java</th>
              <td>Pembelajar Mandiri</td>
              <td><time datetime="2026-09">September 2026</time></td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>

    <section id="karya">
      <h2>Karya saya</h2>

      <TombolFilter />

      <button type="button" @click="aturUlangPilihan">
        Atur ulang pilihan
      </button>

      <DaftarProyek />
    </section>

    <FormKontak />

    <section id="galeri">
      <h2>Galeri karya</h2>

      <ul class="galeri katalog">
        <li class="kartu">
          <figure>
            <img
              src="/media/Karya-1.jpeg"
              alt="Tangkapan layar sistem aplikasi catering."
              width="1600"
              height="1191"
              loading="lazy"
            >
            <figcaption>Sistem aplikasi catering, 2026.</figcaption>
          </figure>
        </li>

        <li class="kartu">
          <figure>
            <img
              src="/media/Karya-2.jpeg"
              alt="Tangkapan layar sistem aplikasi kasir."
              width="2560"
              height="1514"
              loading="lazy"
            >
            <figcaption>Sistem aplikasi kasir, 2026.</figcaption>
          </figure>
        </li>

        <li class="kartu">
          <figure>
            <img
              src="/media/Karya-3.jpeg"
              alt="Tampilan aplikasi TrashVision."
              width="542"
              height="1187"
              loading="lazy"
            >
            <figcaption>Tampilan aplikasi TrashVision, 2025.</figcaption>
          </figure>
        </li>
      </ul>
    </section>

    <section id="sedang-dikerjakan">
      <h2>Sedang saya kerjakan</h2>

      <article>
        <h3>Halaman profil pribadi</h3>
        <p>Saya sedang mengembangkan halaman profil pribadi menggunakan HTML dan CSS.</p>
        <p>Dimulai <time datetime="2026-09-23">23 September 2026</time>.</p>
      </article>
    </section>

    <section id="tanya-jawab">
      <h2>Tanya jawab</h2>

      <details>
        <summary>Apa yang sedang saya pelajari?</summary>
        <p>Saya sedang mempelajari Java, HTML, CSS, dan problem solving.</p>
      </details>

      <details>
        <summary>Proyek apa yang pernah saya buat?</summary>
        <p>Saya pernah membuat sistem aplikasi catering, aplikasi kasir, dan tampilan aplikasi TrashVision.</p>
      </details>
    </section>
  </main>

  <footer class="kaki">
    <p>Muhammad Hafizh Dermawan · 25523162 · <time datetime="2026">2026</time></p>
  </footer>
</template>