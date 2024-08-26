import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/horarios/:id',
    name: 'HorariosView',
    params: true,
    component: () => import('../views/HorariosView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router