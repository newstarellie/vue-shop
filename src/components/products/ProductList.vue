<template>
  <ul class="ProductList">
    <ProductItem class="ProductItem"
      v-for="ProductItem in ProductList"
      :key="ProductItem.productId"
      :ProductItemInform="ProductItem">
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
<style lang="scss">
.ProductList {
  display: flex;
  flex-wrap: wrap;
  align-items: start;
  justify-content: start;
  margin-left: 20px;

  .ProductItem {
    margin: 10px;
  }
}
</style>

