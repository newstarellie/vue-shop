<template>
  <div class="home">
    <h1>商品列表</h1>
    <ProductList :ProductList="productsList"></ProductList>
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
    this.$store.dispatch('setFireBase');
  },
  computed: {
    productsList() {
      return this.$store.state.ProductsModule.productsList;
    },
  },
  methods: {

  },

};
</script>

