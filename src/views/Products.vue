<template>
  <div class="ProductsPage">
    <ProductsLeftNav></ProductsLeftNav>

    <ProductList :ProductList="productsList"></ProductList>
  </div>
</template>

<script>
import ProductList from '@/components/products/ProductList.vue'
import ProductsLeftNav from '@/components/products/ProductsLeftNav.vue'


export default {
  name: 'ProductsPage',
  components: {
    ProductList,
    ProductsLeftNav
  },
  data() {
    return {

    }
  },
  created() {
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

<style lang="scss">
.ProductsPage {
  display: flex;
}
</style>