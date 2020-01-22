<template>
  <div>
    <section class="section tera-section is-black has-text-weight-light">
      <div class="tera-container container">
        <h2 class="title has-text-weight-light">Introducing the TERA.</h2>
        <h3 class="subtitle has-text-white is-size-3 has-text-weight-light">Affordability meets the electric car.</h3>
        <div class="tera-blurb content">
          <p>
            The Tera improves on all of the award winning features of previous Raijin cars, while incorporating customer feedback on various features. The Tera, Forbes Safest Car of 2020, boasts never-seen-before, innovative new features, like Raijin Auto-Dodge and Raijin Emergency Shielding,
          </p>
          <p>
            Not only does the Tera have the latest advances in electronic vehicle technology, but also unparalleled affordability in the electric car market.
          </p>
          <p>
            The TERA comes with a lifetime warranty.
          </p>

          <img v-if="$mq == 'mobile'" src="~@/assets/Render(1).png" />

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
                <div class="image is-1by1 has-background-black-bis has-text-white">
                  <SVGIcon :name="feature.icon"></SVGIcon>
                  <span class="icon-text has-text-weight-bold is-overlay is-pulled-down">{{ feature.title }}</span>
                </div>
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

.image .icon {
  fill: white;
  display: block;

  width: 60%;
  height: auto;

  margin: 1em auto auto auto;

  @extend %overlay;
}

@include tablet {
  .tera-container {
    background-image: url("~@/assets/Render(1).png");
    background-position: bottom right;
    background-size: 60% auto;
    background-repeat: no-repeat;
  }
}

@include widescreen {
  .tera-container {
    background: none;
  }

  .tera-section {
    background-image: url("~@/assets/Render(1).png");
    background-position: bottom 0.25em right $gap;
    background-size: 40% auto;
    background-repeat: no-repeat;
    padding-bottom: 4rem !important;
  }
}

.icon-text {
  height: 30%;

  display: flex;
  flex-direction: column;
  justify-content: center;
}

.icon--suspension {
  transform: scale(1.2, 1.2);
}

@include mobile {
  .icon-text {
    font-size: $size-7;
  }
}
</style>

<script>
import SVGIcon from '@/components/SVGIcon'

export default {
  data () {
    return {
      features: [
        { title: 'Autopilot', icon: 'car-connected' },
        { title: 'Blind Spot Alert', icon: 'eye' },
        { title: 'Heated Wheel and Seats', icon: 'car-seat-heater' },
        { title: 'Massaging Seats', icon: 'car-seat' },
        { title: 'Multizone Climate System', icon: 'cloud' },
        { title: 'Auto-Dimming Mirrors', icon: 'car-windshield' },
        { title: 'Rear Entertainment System', icon: 'television' },
        { title: 'Wifi Hotspot', icon: 'wifi' },
        { title: 'USB Charging', icon: 'usb-port' },
        { title: 'Keyless Entry', icon: 'lock-open' },
        { title: 'Smart Suspension', icon: 'suspension' },
        { title: 'Track Pace', icon: 'car-cruise-control' },
        { title: 'Home Assist Device Connectivity', icon: 'home' },
        { title: 'High-End Stereos', icon: 'speaker' },
        { title: 'Bluetooth', icon: 'bluetooth' }
      ]
    }
  },
  components: {
    SVGIcon
  }
}
</script>
