<template>
  <div class="home">
    <h1>購物車</h1>
    <div v-if="!cartIsEmpty">
      <cartItemList :inCartProductsList="inCartProductsList"></cartItemList>
      <p>總金額: {{ totalCartAmount }}</p>
      <button @click="clearCart">清空購物車</button>
      <button @click="checkout">結帳</button>
    </div>
    <p v-else>購物車是空的</p>
  </div>
</template>

<script>
import cartItemList from '@/components/cartItem/cartItemList.vue'

export default {
  name: 'CartPage',
  components: {
    cartItemList
  },
  created() {
    this.$store.dispatch('getCartItemFromLocalStorage');
  },
  computed: {
    inCartProductsList() {
      return this.$store.state.CartModule.cartItems;
    },
    cartIsEmpty() {
      return this.inCartProductsList[0] ? false : true;
    },
    totalCartAmount() {
      return this.$store.getters.totalCartAmount;
    }
  },
  methods: {
    clearCart() {
      this.$store.dispatch('clearCartItems');
    },
    checkout() {
      this.$store.commit('changeCheckoutStatus', true);

      this.$router.push('/checkout');
    }
  }
};
</script>

<style scoped></style>
