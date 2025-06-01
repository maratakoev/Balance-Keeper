import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/HomeView.vue'),

    },
    {
      path: '/sales',
      name: 'sales',
      component: () => import('../views/SalesPage.vue'),
    },
    {
      path: '/reports',
      name: 'reports',

      component: () => import('../views/ReportsPage.vue'),
    },
    {
      path: '/clients',
      name: 'clients',
      component: () => import('../views/ClientsPage.vue'),
    },
  ],
})

export default router
