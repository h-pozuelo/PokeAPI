import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ListView from '../views/ListView.vue'
import InfoView from '../views/InfoView.vue'
import ContactView from '../views/ContactView.vue'

const routes = [
  {
    path: '/:catchAll(.*)',
    redirect: { name: "Home" },
  },
  {
    path: '/home',
    name: 'Home',
    component: HomeView,
  },
  {
    path: '/list',
    name: 'List',
    component: ListView,
  },
  {
    path: '/list/info/:name',
    name: 'Info',
    component: InfoView,
  },
  {
    path: '/contact',
    name: 'Contact',
    component: ContactView,
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
