import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from './views/Home.vue'
import Cars from './views/Cars.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/cars',
    name: 'cars',
    component: Cars
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
