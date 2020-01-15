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
        <b-navbar-item href="#" class="anim-under">
            About
        </b-navbar-item>
        <b-navbar-item tag="router-link" :to="{ path: '/cars' }" class="anim-under">
            Cars
        </b-navbar-item>
        <b-navbar-item href="#" class="anim-under">
            Impact
        </b-navbar-item>
        <b-navbar-item class="logo force-center" tag="router-link" :to="{ path: '/' }">
          <img
              src="@/assets/logo.svg"
              width="49" height="48"
              alt="Raijin"
          >
          raijin
        </b-navbar-item>
        <b-navbar-item href="#" class="anim-under">
            News
        </b-navbar-item>
        <b-navbar-item href="#" class="anim-under">
            Shop
        </b-navbar-item>
        <b-navbar-item href="#" class="anim-under">
            Contact
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
