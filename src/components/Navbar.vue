<template>
  <nav>
    <ul class="nav-list">
      <li>
        <router-link to="/">
          首頁
        </router-link>
      </li>
      <div class="right-align"></div>
      <li>
        <router-link to="/cart">購物車</router-link>
      </li>
      <!-- 顯示登入狀態的區域 -->
      <li v-if="isLogged">
        歡迎{{ username }}
        <a @click="logout">登出</a>
      </li>

      <!--  TODO 排版 -->
      <div v-else>
        <li>
          <!-- TODO 點下去 傳入狀態 切換顯示 -->
          <a href="/login">註冊</a>
        </li>
        <li>
          <a href="/login">登入</a>
        </li>
      </div>
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
  }
};
</script>
<style scoped>
.nav-list {
  display: flex;
  justify-content: flex-end;
}
</style>
