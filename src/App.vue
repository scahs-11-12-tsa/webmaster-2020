<template>
  <div id="app">
    <b-navbar transparent shadow fixed-top class="is-size-3">
        <template slot="brand">
            <b-navbar-item class="logo force-center" href="/">
              <img
                  src="./assets/logo.svg"
                  alt="Raijin"
              >
              raijin
            </b-navbar-item>
        </template>
        <template slot="start">
            <b-navbar-item href="#">
                About
            </b-navbar-item>
            <b-navbar-item href="#">
                Cars
            </b-navbar-item>
            <b-navbar-item href="#">
                Impact
            </b-navbar-item>
            <b-navbar-item class="logo force-center" href="/">
              <img
                  src="./assets/logo.svg"
                  width="49" height="48"
                  alt="Raijin"
              >
              raijin
            </b-navbar-item>
            <b-navbar-item href="#">
                News
            </b-navbar-item>
            <b-navbar-item href="#">
                Shop
            </b-navbar-item>
            <b-navbar-item href="#">
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
    <router-view/>
  </div>
</template>

<style lang="scss">
.navbar-start {
  flex-grow: 1;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.navbar-item {
  color: $black;
}

.navbar {
  max-height: $navbar-height;
}

.navbar-item.logo {
  font-family: Quattrocento, serif;
  font-size: $size-1;

  img {
    margin-right: 0.25rem;
  }
}

@media screen and (max-width: $desktop - 1px){
    .navbar-start .logo {
      display: none;
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

@media screen and (min-width: $desktop){
    .navbar-brand{
      display: none;
    }

    .navbar-end {
      position: absolute;
      right: 0;
      top: 50%;
      transform: translateY(-50%);
    }
}
</style>
