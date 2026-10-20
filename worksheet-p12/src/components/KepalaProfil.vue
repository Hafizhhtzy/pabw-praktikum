<script setup>
const props = defineProps({
  profil: {
    type: Object,
    required: true,
  },
})
</script>

<template>
  <h1>{{ props.profil.nama }}</h1>
  <p class="tagline">{{ props.profil.peran }}</p>
</template>