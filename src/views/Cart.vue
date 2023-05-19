<template>
  <div class="home">
    <h1>購物車</h1>
    <table v-show="!CartIsEmpty">
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
            <button>移除</button>
          </td>
        </tr>
      </tbody>
    </table>
    <p v-show="CartIsEmpty">購物車是空的</p>
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
      console.log(this.$store.state.CartModule.cartItems);
      return this.$store.state.CartModule.cartItems;
    },
    CartIsEmpty() {
      return this.inCartProductsList ? false : true;
    },

  },
  methods: {

  }
};
</script>

<style scoped></style>
