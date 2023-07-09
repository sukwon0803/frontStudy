import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/AboutView.vue'),
  },
  {
    path: '/vue3103',
    name: 'vue3103',
    component: () => import('../views/Vue3103View.vue'),
  },
  {
    path: '/vue3104',
    name: 'vue3104',
    component: () => import('../views/Vue3104View.vue'),
  },
  {
    path: '/vue3403',
    name: 'vue3403',
    component: () => import('../views/Vue3403View.vue'),
  },
  {
    path: '/vue34ex',
    name: 'vue34ex',
    component: () => import('../views/Vue34exView.vue'),
  },
  {
    path: '/vue3501',
    name: 'vue3501',
    component: () => import('../views/Vue3501View.vue'),
  },
  {
    path: '/vue3701',
    name: 'vue3701',
    component: () => import('../views/Vue3701View.vue'),
  },
  {
    path: '/vue4301',
    name: 'vue4301',
    component: () => import('../views/Page4301View.vue'),
  },
  {
    path: '/todo',
    name: 'todo',
    component: () => import('../views/TodoView.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
