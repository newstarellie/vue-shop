<template>
  <ul>
    <ProductItem
      v-for="ProductItem in ProductList"
      :key="ProductItem.productId"
      :ProductItemInform="ProductItem"
    >
    </ProductItem>
  </ul>
</template>

<script>
import ProductItem from './ProductItem.vue';

export default {
  name: 'ProductList',
  components: {
    ProductItem,
  },
  props: {
    ProductList: {
      type: Array,
      required: true
    },
  },
  methods: {

  },
};
</script>

