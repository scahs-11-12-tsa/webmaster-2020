<template>
  <section class="hero is-white is-medium banner">
    <div class="hero-head">
      <Navbar></Navbar>
    </div>
    <div class="hero-body">
      <div class="container has-text-centered">
        <p class="title is-size-1 has-text-white">
          Cars
        </p>
        <p class="subtitle is-size-3 has-text-white">
          Subtitle
        </p>
      </div>
    </div>
  </section>
</template>

<style scoped>
.banner {
  background: url("../assets/car.png") no-repeat center center;
  background-size: cover;
}
</style>

<script>
import Navbar from './Navbar'

export default {
  components: {
    Navbar
  }
}
</script>
