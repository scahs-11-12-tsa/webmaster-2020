<template>
  <div>
    <section class="section jesus is-black has-text-weight-light">
      <div class="container">
        <div class="columns is-desktop">
          <div class="column is-two-thirds-desktop">
            <h2 class="title is-size-1-desktop is-size-2-touch has-text-white has-text-weight-extra-bold">OUR MISSION</h2>
            <div class="is-size-4-desktop has-text-justified">
              <p>
                “At Raijin, we believe that switching to electric transportation shouldn’t be a sacrifice. That’s why our cars combine the latest technologies to deliver a sensational driving experience, all without harming the environment. We want to lead the world into a future of electric cars.”
              </p>
              <p class="is-pulled-right">
                - Bartholomew Rains, <em>Founder</em>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="section is-clipped is-white has-text-weight-light">
      <div class="container has-logo-jesus">
        <figure class="logo-jesus">
          <img
            class="is-hidden-touch"
            src="@/assets/logo.svg"
            alt="Raijin"
          >
        </figure>
        <div class="columns is-desktop">
          <div class="column is-one-third-desktop is-hidden-touch">
            <!-- <figure class="immage is-1by1">
            </figure> -->
          </div>
          <div class="column is-two-thirds-desktop">
            <h2 class="title is-size-1-desktop is-size-2-touch has-text-weight-extra-bold">OUR STORY</h2>
            <div class="is-size-4-desktop has-text-justified">
              <p>
In 2002, Bartholomew Rains founded Raijin with his vision for the future of automobiles, of transportation, of energy, and of the world. Starting with a ragtag group of talented engineers, Raijin began work on its revolutionary battery and motor technology in 2004. The first working prototype, the Raijin P1, hit the roads by 2008 to enormous positive reception from industry and researchers alike. Since then, Raijin has developed three consumer models, becoming the major player in creating afforable electric vehicles, but we've always stayed true to our original vision of pushing the boundaries of technology.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style lang="scss">
@include desktop {
  .jesus {
    background: url("../assets/jesus.png") no-repeat right bottom;
    filter: grayscale(100%);
    /* background-size: cover; */
  }

  .has-logo-jesus {
    position: relative;

    > .logo-jesus {
      position: absolute;
      bottom: calc(50% - 3rem);
      left: calc(-30% - 3rem);
      opacity: 0.40;
      max-height: 50%;

      > img {
        position: relative;
        max-height: 100%;
        max-width: 100%;
        transform: scale(-1, 1);
      }
    }
  }
}
</style>
