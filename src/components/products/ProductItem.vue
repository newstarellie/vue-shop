<template>
  <li class="product-item">
    <img :src="ProductItemInform.productImage"
      :alt="ProductItemInform.productName" />
    {{ ProductItemInform.productImage }}
    <div class="product-item-inform">
      <p>{{ ProductItemInform.productName }}</p>
      <!-- <p>{{ ProductItemInform.productDescription }}</p> -->
      <p>{{ ProductItemInform.productPrice }} 元</p>
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
      this.$toast.success("加入成功");
      console.log(this.ProductItemInform)
      return this.$store.dispatch('addToCart', ProductItemInform);
    },
  },
  created() {
    this.$store.dispatch('getCartItemFromLocalStorage');
  }
};
</script>
<style scope lang="scss" >
.product-item {
  button {
    width: 100%;
  }
}

.product-item-inform {
  display: flex;
  justify-content: space-between;

  p {
    margin: 5px;
  }
}
</style>

