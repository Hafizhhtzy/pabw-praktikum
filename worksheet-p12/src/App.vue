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
  <KepalaProfil :profil="identitas" />

  <TombolFilter />

  <button type="button" @click="aturUlangPilihan">
    Atur ulang pilihan
  </button>

  <DaftarProyek />

  <FormKontak />
</template>