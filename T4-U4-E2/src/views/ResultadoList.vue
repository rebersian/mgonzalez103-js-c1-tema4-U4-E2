<template>
  <div class="container py-4">
    <header class="d-flex align-items-center justify-content-between mb-3">
      <h1 class="h4 mb-0">Búsqueda de productos</h1>
    </header>
    <div class="py-3">
      <a href="#" class="mb-3" @click.prevent="goBack">
        &lt;&lt; Volver al formulario de búsqueda
      </a>
    </div>
    <h5>Resultados ({{ filteredProducts.length }})</h5>
    <ul class="list-group">
      <li v-for="p in filteredProducts" :key="p.id" class="list-group-item">
        {{ p.name }}
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import products from '../data/products.json';

const route = useRoute();
const router = useRouter();

const searchText = computed(() => {
  return (route.query.name as string) || '';
});

const filteredProducts = computed(() => {
  return products.filter((p) => p.name.toLowerCase().includes(searchText.value.toLowerCase()));
});

function goBack() {
  router.push({ path: '/', query: { name: searchText.value } });
}
</script>
