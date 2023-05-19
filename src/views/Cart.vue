<template>
  <div class="home">
    <h1>購物車</h1>
    {{ inCartProductsList }}
  </div>
</template>

<script>


export default {
  name: 'CartPage',
  components: {
  },
  created() {
    this.$store.dispatch('getCartItemFromLocalStorage');
  },
  computed: {
    inCartProductsList() {
      return this.$store.state.CartModule.cartItems;
    },

  },
  methods: {

  }
};
</script>

<style scoped></style>
