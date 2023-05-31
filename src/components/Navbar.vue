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
