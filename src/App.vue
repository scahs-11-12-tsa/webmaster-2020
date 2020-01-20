<template>
  <div id="app" class="has-navbar-fixed-top" :class="'page--' + $route.name">
    <navbar class="is-fixed-top"></navbar>
    <transition name="raijin-fade" mode="out-in">
      <router-view />
    </transition>
  </div>
</template>

<style>
body {
  background-color: white;
}

#app {
  position: relative;
}

.raijin-fade {
  position: absolute;
}

.raijin-fade-enter-active,
.raijin-fade-leave-active {
  transition-duration: 0.4s;
  transition-property: opacity;
  transition-timing-function: ease;
}

.raijin-fade-enter,
.raijin-fade-leave-to {
  opacity: 0
}
</style>
