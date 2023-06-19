<template>
  <div id="app">
    <Navbar class="navbar"></Navbar>
    <Header></Header>
    <ContentNavbar></ContentNavbar>

    <main>
      <router-view></router-view>
    </main>
    <!-- <button @click="myMethod">觸發提示</button> -->
    <button @click="showSuccessToast">Show Success Toast</button>


    <footer>
      <p>&copy; 2023 My E-commerce Website. All rights reserved.</p>
    </footer>
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue';
import ContentNavbar from './components/Content-Navbar.vue';
import Header from './components/Header.vue';

export default {
  name: 'App',
  components: {
    Navbar,
    Header,
    ContentNavbar
  },
  computed: {
  },
  methods: {
    showSuccessToast() {
      this.$toast.success("My toast content", {
        timeout: 2000
      });
    }
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
