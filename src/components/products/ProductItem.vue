<template>
  <li>
    <img
      :src="ProductItemInform.productImage"
      :alt="ProductItemInform.productName"
    />
    <div>
      <h3>{{ ProductItemInform.productName }}</h3>
      <p>{{ ProductItemInform.productDescription }}</p>
      <p>價格: {{ ProductItemInform.productPrice }} 元</p>
    </div>
    <button @click="addToCart(ProductItemInform)">加入購物車</button>
  </li>
</template>

<script>
export default {
  name: 'ProductItem',
  props: {
    ProductItemInform: {
      type: Object,
      required: true,
    },
  },
  methods: {
    addToCart(ProductItemInform) {
      // console.log(ProductItemInform)
      return this.$store.dispatch('addToCart', ProductItemInform);
    },
  },
  computed: {
    productsList() {
      return this.$store.state.CartModule.cartItems;
    },

  },
  created() {
    this.$store.dispatch('getCartItemFromLocalStorage');
  }
};
</script>

