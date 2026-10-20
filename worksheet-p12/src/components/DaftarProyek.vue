<script setup>
import { computed } from 'vue'
import { state } from '../state.js'

const daftarTampil = computed(() =>
  state.daftarProyek.filter(
    (item) =>
      state.kategoriAktif === 'semua' ||
      item.kategori === state.kategoriAktif,
  ),
)
</script>

<template>
  <ul id="daftar">
    <li
      v-for="item in daftarTampil"
      :key="item.id"
      class="kartu"
    >
      {{ item.judul }}
    </li>
  </ul>

  <p v-if="daftarTampil.length === 0" id="pesan-kosong">
    Tidak ada proyek pada kategori itu.
  </p>
</template>