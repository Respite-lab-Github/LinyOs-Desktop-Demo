import { createRouter, createWebHistory } from 'vue-router'
import Desktop from '../views/Desktop.vue'
import Locked from '../views/Locked.vue'

const routes = [
  {
    path: '/',
    name: 'desktop',
    component: Desktop
  },
  {
    path: '/locked',
    name: 'locked',
    component: Locked
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
