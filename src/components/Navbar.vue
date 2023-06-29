<template>
  <nav>
    <ul>
      <li>
        <router-link class="nav-link"
          to="
          /">
          首頁
        </router-link>
      </li>
      <li>
        <router-link class="nav-link"
          to="/cart">購物車</router-link>
      </li>
      <!-- 顯示登入狀態的區域 -->
      <li v-if="isLogged">
        歡迎{{ username }}
        <a class="nav-link"
          @click="logout">登出</a>
      </li>

      <template v-else>
        <li>
          <a class="nav-link"
            @click="toRegisterPage(true)">註冊</a>
        </li>
        <li>
          <a class="nav-link"
            @click="toRegisterPage(false)">登入</a>
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
    toRegisterPage(status) {
      this.$store.dispatch('LoginModule/setRegisterStatus', { router: this.$router, status: status });
    },
    logout() {
      this.$store.dispatch('LoginModule/logout');
    }
  },
};
</script>
<style scoped lang="scss">
ul a:hover {
  color: $text-color-hover;
}
</style>

