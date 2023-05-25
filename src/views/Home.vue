<template>
  <div class="home">
    <h1>Home</h1>
    <!-- <ProductList :products="allProducts" @addToCart="addToCart" /> -->
  </div>
</template>

<script>
// import ProductList from '@/components/ProductList.vue';
// import { mapGetters } from 'vuex';


export default {
  name: 'HomePage',
  components: {
    // ProductList,
  },
  created() {

  },
  computed: {
    // ...mapGetters('products', ['allProducts']),
  },
  methods: {
    // addToCart(product) {
    //   // return this.$store.dispatch('cart/addToCart', product);
    // },
  }
};
</script>

<style scoped>
.home {
  text-align: center;
}

h1 {
  font-size: 2em;
  margin: 20px 0;
}

p {
  font-size: 1.2em;
  margin-bottom: 20px;
}
</style>
