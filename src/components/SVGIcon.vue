<template functional>
  <svg
    viewBox="0 0 24 24"
    class="icon"
    :class="$options.methods.getClass(props)"
    v-bind="data.attrs"
    v-on="listeners"
    role="img"
  >
    <path :d="$options.methods.getPath(props)" />
  </svg>
</template>

<script>
import icons from '../icons.js'

export default {
  name: 'SVGIcon',
  props: {
    name: String
  },
  methods: {
    getPath (props) {
      return icons[props.name]
    },
    getClass (props) {
      return 'icon--' + props.name
    }
  }
}
</script>
