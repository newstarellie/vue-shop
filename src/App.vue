<template>
  <div id="app">
    <Header> </Header>

    <main>
      <ContentNavbar></ContentNavbar>
      <router-view></router-view>
    </main>

    <footer>
      <p>&copy; 2023 My E-commerce Website. All rights reserved.</p>
    </footer>

  </div>
</template>

<script>
import ContentNavbar from './components/Content-Navbar.vue';
import Header from './components/Header.vue';

export default {
  name: 'App',
  components: {
    Header,
    ContentNavbar
  },
  computed: {
  },
  methods: {

  },
}
</script>

<style lang="scss">
#app {
  background-color: $primary-color;
  display: flex;
  min-height: 100%;
  height: 100%;
  flex-direction: column;
}


main {
  flex: 1;
}

footer {
  flex-shrink: 0;
}
</style>
