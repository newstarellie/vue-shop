<template>
  <div class="home">
    <h1>商品列表</h1>
    <ProductList :ProductList="ProductList"></ProductList>
    <p>{{ listData }}</p>

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

    }
  },
  created() {
  },
  computed: {
    listData() {
      return this.$store.state.ProductsModule.list;
    },

  },
  methods: {

  },

};
</script>

