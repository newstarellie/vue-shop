<template>
  <nav>
    <ul class="nav-list">
      <li>
        <router-link to="/aboutUs">
          首頁
        </router-link>
      </li>
      <div class="right-align"></div>
      <li>
        <router-link to="/cart">购物车</router-link>
      </li>
      <li>
        <router-link to="/login">登录</router-link>
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

.right-align {
  margin-left: auto;
}
</style>
