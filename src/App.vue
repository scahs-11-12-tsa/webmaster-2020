<template>
  <div id="app" class="has-navbar-fixed-top" :class="'page--' + $route.name">
    <navbar class="is-fixed-top"></navbar>
    <router-view/>
  </div>
</template>

<style>
body {
  background-color: black;
}
</style>
