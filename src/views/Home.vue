<template>
  <div class="home">
    <banner></banner>
    <img alt="Vue logo" src="../assets/logo.svg" width="200px">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import Banner from '@/components/Banner.vue'

export default {
  name: 'home',
  components: {
    HelloWorld,
    Banner
  }
}
</script>
