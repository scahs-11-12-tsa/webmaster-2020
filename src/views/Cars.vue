<template>
  <div>
    <section class="section is-black has-text-weight-light">
      <div class="container">
        <h2 class="title has-text-weight-light">Introducing the TERA.</h2>
        <h3 class="subtitle has-text-white is-size-3 has-text-weight-light">Affordability meets the electric car.</h3>
        <div class="tera-blurb content">
          <p>
            The Tera improves on all of the award winning features of previous Raijin cars, while incorporating customer feedback on various features. The Tera, Forbes Safest Car of 2020, boasts never-seen-before, innovative new features, like Raijin Auto-Dodge and Raijin Emergency Shielding,
          </p>
          <p>
            Not only does the Tera have the latest advances in electronic vehicle technology, but also has affordability that is unparalleled in the electric car market.
          </p>
          <p>
            The TERA comes with a lifetime warranty.
          </p>

          <button class="button is-black is-outlined is-inverted">
            Visit Page
          </button>
          <button class="button is-white has-text-weight-bold">
            Buy
          </button>
        </div>
      </div>
    </section>
    <section class="section is-white">
      <div class="container has-text-centered">
        <h2 class="title has-text-weight-extra-bold">FEATURES</h2>
        <h4 class="subtitle is-italic">Every Raijin car comes equipped with the following features.</h4>
        <div class="columns is-mobile is-centered">
          <div class="column features">
            <div class="columns is-multiline is-mobile">
              <div v-for="feature in features" :key="feature.title" class="column is-one-fifth-widescreen is-one-third-tablet is-half-mobile is-uppercase">
                <figure class="image is-1by1 has-background-black-bis has-text-white">
                  <span class="has-text-weight-bold is-overlay is-pulled-down">{{ feature.title }}</span>
                </figure>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style lang="scss">
.is-pulled-down {
  top: auto !important;
}

.button:not(:last-of-type):not(.is-fullwidth) {
  margin-right: 0.5em;
}

@include until($desktop) {
  .features {
    max-width: 90%;
  }
}

@include tablet {
  .tera-blurb {
    max-width: 60%;
  }
}
</style>

<script>
export default {
  data () {
    return {
      features: [
        { title: 'Autopilot' },
        { title: 'Blind Spot Alert' },
        { title: 'Heated Wheel and Seats' },
        { title: 'Massaging Seats ' },
        { title: 'Multizone Climate System ' },
        { title: 'Auto-Dimming Mirrors' },
        { title: 'Rear Entertainment System' },
        { title: 'Wifi Hotspot' },
        { title: 'USB Charging ' },
        { title: 'Keyless Entry ' },
        { title: 'Smart Suspension' },
        { title: 'Track Pace' },
        { title: 'Home Assist Device Connectivity' },
        { title: 'High-End Stereos ' },
        { title: 'Bluetooth ' }
      ]
    }
  }
}
</script>
