<template>
  <div>
    <button @click="goto('/vue')">vue</button>
    <button @click="goto('/home')">home</button>
  </div>
</template>
<script>
import { createNamespacedHelpers } from 'vuex'
const { mapState, mapMutations } = createNamespacedHelpers('moduleA')
export default {
  data () {
    return {}
  },
  computed: {
  },
  mounted () {

  },
  methods: {
    goto(str) {
      this.$router.push(str)
      window.Publisher.emit('vue-spa', {
        path: str
      });
    }
  }
}
</script>
