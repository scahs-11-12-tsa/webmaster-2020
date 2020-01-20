<template>
  <div class="home has-background-black-absolute">
    <video playsinline autoplay muted class="background-vid">
      <source src="/assets/video.mp4" type="video/webm">
    </video>
  </div>
</template>

<style lang="scss">
#app.page--home {
  padding-top: 0 !important;

  .navbar {
    background-color: transparent !important;
    filter: invert(100%);
  }
}

.home {
  height: 100vh;
  width: 100vw;

  overflow: hidden;
}

@media screen and (orientation:landscape) {
  .background-vid {
    object-fit: cover;
    width: 100%;
    height: 100%;
  }
}
</style>

<script>
export default {
  name: 'home'
}
</script>
