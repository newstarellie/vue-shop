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
      <li>
        <router-link to="/login">登入</router-link>
      </li>
      <li>
        <router-link to="/login">Login</router-link>
      </li>

      <!-- 顯示登入狀態的區域 -->
      <li v-if="isLogged">
        歡迎，{{ username }}！ <a @click="logout">登出</a>
      </li>
      <li v-else>
        <a href="/login">登入</a>
      </li>
    </ul>
  </nav>
</template>

<script>

export default {
  name: 'NavbarComponent',
};
</script>
<style scoped>
.nav-list {
  display: flex;
  justify-content: flex-end;
}
</style>
