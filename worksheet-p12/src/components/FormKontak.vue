<script setup>
import { ref } from 'vue'

const nama = ref('')
const email = ref('')
const nim = ref('')
const pesan = ref('')

function kirim() {
  nama.value = ''
  email.value = ''
  nim.value = ''
  pesan.value = ''
}
</script>

<template>
  <section id="kontak">
    <h2>Hubungi saya</h2>
    <p>Isi formulir berikut. Semua kolom bertanda wajib harus diisi.</p>

    <form @submit.prevent="kirim">
      <fieldset>
        <legend>Data pengirim</legend>

        <p class="form-kolom">
          <label for="nama">Nama</label>
          <input id="nama" v-model="nama" type="text" required>
        </p>

        <p class="form-kolom">
          <label for="email">Email</label>
          <input id="email" v-model="email" type="email" required>
        </p>

        <p class="form-kolom">
          <label for="nim">NIM</label>
          <input
            id="nim"
            v-model="nim"
            type="text"
            inputmode="numeric"
            pattern="[0-9]{8}"
            required
          >
        </p>

        <p class="form-kolom">
          <label for="pesan">Pesan</label>
          <textarea id="pesan" v-model="pesan" rows="5" required></textarea>
        </p>

        <button type="submit">Kirim</button>
      </fieldset>
    </form>
  </section>
</template>