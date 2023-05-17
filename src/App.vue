<template>
  <Navbar></Navbar>
  <router-view></router-view>
</template>

<script>
import Navbar from './components/Navbar.vue'

export default {
  name: 'App',
  components: {
    Navbar
  },
  computed: {
  },

}
</script>

<style lang="scss">
#app {
  margin-top: 60px;
  background-color: $primary-color;
}
</style>
