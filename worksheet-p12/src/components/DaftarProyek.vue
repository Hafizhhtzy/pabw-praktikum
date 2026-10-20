<script setup>
import { computed } from 'vue'

const props = defineProps({
  proyek: {
    type: Array,
    required: true,
  },
  kategoriAktif: {
    type: String,
    required: true,
  },
})

const daftarTampil = computed(() =>
  props.proyek.filter(
    (item) =>
      props.kategoriAktif === 'semua' ||
      item.kategori === props.kategoriAktif,
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