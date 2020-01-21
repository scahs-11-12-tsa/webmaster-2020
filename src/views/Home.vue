<template>
  <div class="home has-background-black-absolute">
    <video playsinline autoplay muted class="background-vid">
      <source v-if="$mq == 'mobile' && portrait" src="/assets/mobile.mp4" type="video/mp4">
      <source v-else src="/assets/video.mp4" type="video/mp4">
    </video>
  </div>
</template>

<style lang="scss">
#app.page--home {
  .navbar {
    background-color: transparent !important;
    filter: invert(100%);
  }
}

.home {
  height: 100vh;
  width: 100vw;
  margin-top: -$navbar-height;
  overflow: hidden;
}

.background-vid {
  object-fit: cover;
  width: 100%;
  height: 100%;
}
</style>

<script>
export default {
  name: 'home',
  computed: {
    portrait () {
      return window.innerHeight > window.innerWidth
    }
  }
}
</script>
