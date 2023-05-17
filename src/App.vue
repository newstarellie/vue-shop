<template>
  {{ tryValue }}
  <img alt="Vue logo" src="./assets/logo.png">
  <Navbar></Navbar>
  <router-view></router-view>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import Navbar from './components/Navbar.vue'
import { mapState } from 'vuex';


export default {
  name: 'App',
  components: {
    // HelloWorld,
    Navbar
  },
  computed: {
    ...mapState(['tryValue']),
  },

}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  background-color: $primary-color;

}
</style>
