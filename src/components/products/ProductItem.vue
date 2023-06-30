<template>
  <li class="product-item">
    <img :data-src="ProductItemInform.productImage"
      class="lazyload"
      :alt="ProductItemInform.productName" />
    <div class="product-item-inform">
      <h4>{{ ProductItemInform.productName }}</h4>
      <!-- <p>{{ ProductItemInform.productDescription }}</p> -->
      <p>{{ ProductItemInform.productPrice }} 元</p>
    </div>
    <button @click="addToCart(ProductItemInform)">加入購物車</button>
  </li>
</template>

<script>
import myMixin from '@/mixins/myMixin';

export default {
  name: 'ProductItem',
  props: {
    ProductItemInform: {
      type: Object,
      required: true,
    },
  },
  mixins: [myMixin],
  methods: {

  },
  created() {
    this.$store.dispatch('getCartItemFromLocalStorage');
  }
};
</script>

