import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/BuscadorProductos.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: () => import('@/layouts/BuscadorProductosLayout.vue'),
      children: [
        {
          path: '/',
          component: HomeView,
        },
        {
          path: '/results',
          name: 'resultado',
          component: () => import('../views/ResultadoList.vue'),
          props: true,
        },
      ],
    },
  ],
});

export default router;
