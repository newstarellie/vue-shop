<template>
  <nav>
    <ul>
      <li>
        <router-link to="/">Home</router-link>
      </li>
      <li>
        <router-link to="/products">Products</router-link>
      </li>
      <li>
        <router-link to="/cart">Cart</router-link>
      </li>
      <li>
        <router-link to="/contact">Contact</router-link>
      </li>
      <li v-if="!isLogged">
        <router-link to="/login">Login</router-link>
      </li>

      <template v-if="isLogged">
        <li>
          <router-link to="/userAccount">{{ username }}</router-link>
        </li>
        <li>
          <router-link to="/"
            @click="logout">Logout</router-link>
        </li>
      </template>
    </ul>
  </nav>
</template>

<script>

export default {
  name: 'NavbarComponent',
  created() {
    this.$store.dispatch('LoginModule/getUserDataToLocalStorage')
  },
  computed: {
    isLogged() {
      return this.$store.state.LoginModule.isLoggedIn;
    },
    username() {
      return this.$store.state.LoginModule.user;
    }
  },
  methods: {
    logout() {
      this.$store.dispatch('LoginModule/logout');
    },
  },
};
</script>

