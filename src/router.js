import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from './views/Home.vue'
import About from './views/About.vue'
import Cars from './views/Cars.vue'
import News from './views/News.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/about',
    name: 'about',
    component: About
  },
  {
    path: '/cars',
    name: 'cars',
    component: Cars
  },
  {
    path: '/news',
    name: 'news',
    component: News
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
