<template>
  <div>
    <div class="columns is-gapless has-text-white">
      <div class="column is-two-fifths">
        <figure class="image is-square">
          <img :src="thumb">
        </figure>
      </div>
      <div class="column is-three-fifths has-background-black-bis has-text-left">
        <div class="post-content is-size-7">
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
    width: 420px;
    flex-grow: 0 !important;
  }
</style>

<script>
export default {
  props: ['thumb', 'blurb', 'date'],
  name: 'Post'
}
</script>
