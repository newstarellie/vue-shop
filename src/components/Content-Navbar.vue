<template>
  <!-- Content-Navbar -->
  <nav>
    <ul class="nav-list">
      <li>

        <router-link to="/products">所有商品</router-link>
      </li>
      <li>
        <router-link to="/aboutUs">關於我們</router-link>
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
  justify-content: flex-start;
}

.right-align {
  margin-left: auto;
}
</style>
