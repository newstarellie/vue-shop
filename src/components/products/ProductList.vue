<template>
  <!-- todo 要語意化 -->
  <ul>
    <ProductItem v-for="ProductItem in ProductList" :key="ProductItem" :productName="ProductItem"></ProductItem>

    <!-- 可以將ProductItem 寫成object 然後用props引入ProductItem -->
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

