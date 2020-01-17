<template>
  <div>
    <div class="columns is-gapless has-text-white has-text-weight-light">
      <div class="column is-half">
        <figure class="image is-square">
          <img :src="thumb">
        </figure>
      </div>
      <div class="column is-half has-background-black-bis has-text-left">
        <div class="post-content">
          <p class="post-blurb">{{ blurb }}</p>
          <div class="post-date is-italic">{{ date }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .post-content {
    height: 100%;
    padding: 1em !important;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
  }

  .post-date {
    margin-top: auto;
    align-self: flex-start;
  }

  .columns {
    width: 360px;
    flex-grow: 0 !important;
  }
</style>

<script>
export default {
  props: ['thumb', 'blurb', 'date'],
  name: 'Post'
}
</script>
