import Vue from 'vue'
import App from './App.vue'
import router from './router'

import { Navbar as BNavbar, Icon } from 'buefy'

import Banner from './components/Banner'
import Navbar from './components/Navbar'
import Post from './components/Post'

Vue.use(BNavbar)
Vue.use(Icon)

Vue.component('navbar', Navbar)
Vue.component('banner', Banner)
Vue.component('post', Post)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
