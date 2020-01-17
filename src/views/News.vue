<template>
  <div>
    <banner></banner>
    <section class="section">
      <div class="container has-text-centered">
        <h2 class="title has-text-weight-extra-bold">News</h2>
        <h2 class="no-background title is-size-3 has-text-weight-extra-bold"><span>2020</span></h2>
        <div class="columns is-centered">
          <div class="column is-narrow">
            <post
              thumb="../assets/trees.jpg"
              blurb="Raijin partners with Team Green to help plant 30 million trees. Thank you to all of those who donated to the cause."
              date="January 18, 2020"
              class="post"
            ></post>
          </div>
        </div>
        <h2 class="no-background title is-size-3 has-text-weight-extra-bold"><span>2019</span></h2>
        <div class="columns is-centered is-multiline">
          <div class="column is-narrow" v-for="(post, idx) in posts2019" :key="idx">
            <post
              :thumb="post.thumb"
              :blurb="post.blurb"
              :date="post.date"
              class="post"
            ></post>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style lang="scss">
@include mobile {
  .post {
    max-width: 75%;
    margin-left: auto !important;
    margin-right: auto !important;
  }
}

h2.no-background {
    position: relative;
    overflow: hidden;

    span {
        display: inline-block;
        vertical-align: baseline;
        zoom: 1;
        *display: inline;
        *vertical-align: auto;
        position: relative;
        padding: 0 20px;
        color: $grey-light;

        &:before, &:after {
            content: '';
            display: block;
            width: 1000px;
            position: absolute;
            top: 50%;
            transform: translateY(-50%);
            border-top: 3px solid $grey-light;
        }

        &:before { right: 100%; }
        &:after { left: 100%; }
    }
}
</style>

<script>
export default {
  data () {
    return {
      posts2019: [
        {
          blurb: 'Raijin patents new design for better, longer-lasting, and cheaper batteries. Battery capacity has gone from 60 kWh to 75 kWh.',
          date: 'December 4, 2019',
          thumb: '../assets/bat.png'
        },
        {
          blurb: 'The Raijin Specter 2 has officially hit 200,000 sales! This makes the Specter the best selling electric car in the world.',
          date: 'November 12, 2019',
          thumb: '../assets/road.jpg'
        },
        {
          blurb: 'The firmware on the Raijin Specter and Tera series has received its latest update, v1.40! Latency has been reduced and the GUIs have received a slick, modern upgrade.',
          date: 'October 19, 2019',
          thumb: '../assets/pcb.jpg'
        },
        {
          blurb: 'The Raijin Tera has officially launched! The Tera is encased in ultra-hard 50X steel, giving it a plainer look and making it almost impossible to damage.',
          date: 'August 1, 2019',
          thumb: '../assets/tera.jpg'
        },
        {
          blurb: 'Specter 2 earns 5-Star Safety Rating from Tokyo Safety HQ.',
          date: 'June 30, 2019',
          thumb: '../assets/safety.jpg'
        },
        {
          blurb: 'New colors for the Specter 2 have been released. Customers can now purchase the Specter 2 in gold, rose gold, and lavender.',
          date: 'June 4, 2019',
          thumb: '../assets/colors.jpg'
        }
      ]
    }
  }
}
</script>
