<template>
  <div id="app">
    <Navbar class="navbar"></Navbar>

    <main>
      <router-view></router-view>
    </main>

    <footer>
      <p>&copy; 2023 My E-commerce Website. All rights reserved.</p>
    </footer>
  </div>
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
  background-color: $primary-color;
  height: 100%;
  display: flex;
  flex-direction: column;
}
</style>
