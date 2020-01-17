<template>
  <section class="hero is-white is-medium banner">
    <div class="hero-head">
      <navbar></navbar>
    </div>
    <div class="hero-body">
      <div class="container has-text-centered">
        <h1 class="title is-size-1 has-text-white">
          {{ $route.name }}
        </h1>
      </div>
    </div>
  </section>
</template>

<style scoped>
.banner {
  background: url("../assets/car.png") no-repeat center center;
  background-size: cover;
}

.banner .title {
  text-transform: capitalize;
}
</style>
