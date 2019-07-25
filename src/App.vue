
<template>
  <div id="nav">
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </div>
</template>
<script>
export default {
  data: () => {
    return {
      test: 'hello'
    }
  },
  mounted () {
    window.Publisher.emit('vue-spa', {
      path: 'nav'
    });
  },
  methods: {

  }
}
</script>
