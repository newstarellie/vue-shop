<template>
  <div class="home">
    <h1>商品列表</h1>
    <ProductList :ProductList="list"></ProductList>
  </div>
</template>

<script>
import ProductList from '@/components/products/ProductList.vue'

export default {
  name: 'ProductsPage',
  components: {
    ProductList
  },
  data() {
    return {
      list: ["1", "2", "3"],
    }
  },
  created() {

  },
  computed: {

  },
  methods: {

  }
};
</script>

