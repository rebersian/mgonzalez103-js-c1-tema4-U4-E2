<template>
  <div class="container py-4">
    <header class="d-flex align-items-center justify-content-between mb-3">
      <h1 class="h4 mb-0">Búsqueda de productos</h1>
    </header>
    <form @submit.prevent="search">
      <label>Producto: </label>
      <input v-model="text" class="form-control" placeholder="Buscar producto" />
      <button class="btn btn-primary mt-2">Buscar</button>
    </form>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();
const text = ref('');

function search() {
  router.push({
    name: 'resultado',
    query: { name: text.value },
  });
}
</script>
