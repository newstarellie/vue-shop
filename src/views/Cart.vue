<template>
  <div class="home">
    <h1>購物車</h1>
    <button @click="clearCart">清空購物車</button>
    <table v-if="!cartIsEmpty">
      <thead>
        <tr>
          <!-- todo 元件化column -->
          <th>商品</th>
          <th>價格</th>
          <th>數量</th>
          <th>小計</th>
          <th>操作</th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="inCartProduct in inCartProductsList"
          :key="inCartProduct.productId"
        >
          <td>{{ inCartProduct.productName }}</td>
          <td>{{ inCartProduct.productPrice }}</td>
          <td>
            <input
              type="number"
              min="1"
              :value="inCartProduct.quantity"
            />
          </td>
          <td>{{ inCartProduct.productPrice * inCartProduct.quantity }}</td>
          <td>
            <button @click="removeCartItem(inCartProduct)">移除</button>
          </td>
        </tr>
      </tbody>
    </table>
    <p v-else>購物車是空的</p>
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
    cartIsEmpty() {
      return this.inCartProductsList[0] ? false : true;
    },

  },
  methods: {
    clearCart() {
      this.$store.dispatch('clearCartItems');
    },
    removeCartItem(product) {
      this.$store.dispatch('removeCartItem', product);
    }
  }
};
</script>

<style scoped></style>
