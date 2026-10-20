<script setup>
import { ref } from 'vue'
import { profil, daftarProyek } from './data.js'

import KepalaProfil from './components/KepalaProfil.vue'
import TombolFilter from './components/TombolFilter.vue'
import DaftarProyek from './components/DaftarProyek.vue'

const identitas = profil
const kategoriAktif = ref('semua')
</script>

<template>
  <KepalaProfil :profil="identitas" />

  <TombolFilter
    :kategori-aktif="kategoriAktif"
    @pilih="kategoriAktif = $event"
  />

  <DaftarProyek
    :proyek="daftarProyek"
    :kategori-aktif="kategoriAktif"
  />
</template>