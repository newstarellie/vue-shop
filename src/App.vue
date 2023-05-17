<template>
  {{ tryValue }}
  <img alt="Vue logo" src="./assets/logo.png">
  <router-link to="/home">Home</router-link>
  <router-view></router-view>
  <HelloWorld msg="Welcome to Your Vue.js App" />
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import { mapState } from 'vuex';


export default {
  name: 'App',
  components: {
    HelloWorld
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
