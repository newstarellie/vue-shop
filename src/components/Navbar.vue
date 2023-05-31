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

