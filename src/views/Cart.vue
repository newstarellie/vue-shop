<template>
  <div class="container">
    <div v-if="!cartIsEmpty">
      <cartItemList :inCartProductsList="inCartProductsList"></cartItemList>

      <div class="row">

        <button @click="clearCart">清空購物車</button>
        <div class="right-align"></div>
        <h3>總金額: {{ totalCartAmount }}元</h3>
        <button @click="checkout">結帳</button>
      </div>
    </div>
    <h3 v-else>購物車是空的</h3>
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
    this.$store.commit('changeCheckoutStatus', false);
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
      this.$toast.success("全部移除成功");

      this.$store.dispatch('clearCartItems');
    },
    checkout() {
      this.$store.commit('changeCheckoutStatus', true);

      this.$router.push('/checkout');
    }
  }
};
</script>

<style scoped lang="scss">
button {
  margin: $margin-sm;
}
</style>
