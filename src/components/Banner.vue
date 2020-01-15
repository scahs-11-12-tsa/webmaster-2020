<template>
  <section class="hero is-white is-large banner">
    <div class="hero-head">
      <Navbar></Navbar>
    </div>
    <div class="hero-body">
      <div class="container has-text-centered">
        <p class="title">
          Title
        </p>
        <p class="subtitle">
          Subtitle
        </p>
      </div>
    </div>
  </section>
</template>

<style scoped>
.banner {
  background: url("../assets/car.png") no-repeat center center fixed;
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
