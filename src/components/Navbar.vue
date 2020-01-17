<template functional>
  <b-navbar transparent class="is-size-3">
    <template slot="brand">
        <b-navbar-item class="logo force-center" href="/">
          <img
              src="@/assets/logo.svg"
              alt="Raijin"
          >
          raijin
        </b-navbar-item>
    </template>
    <template slot="start">
        <b-navbar-item tag="router-link" :to="{ path: '/about' }">
            <span class="anim-under">About</span>
        </b-navbar-item>
        <b-navbar-item tag="router-link" :to="{ path: '/cars' }">
            <span class="anim-under">Cars</span>
        </b-navbar-item>
        <b-navbar-item href="#">
            <span class="anim-under">Impact</span>
        </b-navbar-item>
        <b-navbar-item class="logo force-center" tag="router-link" :to="{ path: '/' }">
          <img
              src="@/assets/logo.svg"
              width="49" height="48"
              alt="Raijin"
          >
          raijin
        </b-navbar-item>
        <b-navbar-item tag="router-link" :to="{ path: '/news' }">
            <span class="anim-under">News</span>
        </b-navbar-item>
        <b-navbar-item href="#">
          <span class="anim-under">Shop</span>
        </b-navbar-item>
        <b-navbar-item href="#">
          <span class="anim-under">Contact</span>
        </b-navbar-item>
    </template>

    <template slot="end">
        <b-navbar-item tag="div">
          <button class="button is-dark">
              <b-icon icon="exit-to-app"></b-icon>
              <span>Chapter site</span>
          </button>
        </b-navbar-item>
    </template>
  </b-navbar>
</template>

<style lang="scss">
.navbar-start {
  flex-grow: 1;
  justify-content: center !important;
  align-items: center !important;
  text-align: center !important;
}

@keyframes spin {
    0% {
        transform: scale(-1, 1) rotate(360deg);
    }

    100% {
        transform: scale(-1, 1) rotate(0deg);
    }
}

.navbar-item {
  color: $black;
  font-weight: 300;
  font-size: $size-3;

  &.logo {
    font-family: Quattrocento, serif;
    font-weight: 400;
    font-size: $size-2;

    img {
      margin-right: 0.25rem;
      transform: scale (-1, 1);
      transform-origin: center;
      animation: spin 4s linear infinite;
    }
  }
}

.navbar {
  max-height: $navbar-height;
}

@include until($desktop) {
  .navbar-start .logo {
    display: none !important;
  }
  .force-center {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
  }
  .navbar-end {
    display: flex;
    justify-content: center;
  }
}

@include desktop {
  .navbar-brand {
    display: none !important;
  }

  .navbar-end {
    position: absolute;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
  }
}
</style>
