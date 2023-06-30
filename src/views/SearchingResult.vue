<template>
  <div class="SearchingResultPage"
    v-if="searchResults.length > 0">
    <h3>搜索結果</h3>
    <ul class="ProductList">
      <li class="product-item"
        v-for="result in searchResults"
        :key="result.productId">
        <img :data-src="result.productImage"
          class="lazyload"
          :alt="result.productName" />
        <div class="product-item-inform">
          <h4>{{ result.productName }}</h4>
          <p>{{ result.productPrice }}元</p>
        </div>
        <button @click="addToCart(result)">加入購物車</button>
      </li>
    </ul>
  </div>
  <div v-else>
    <p>無搜索結果</p>
  </div>
</template>

<script>
import myMixin from '@/mixins/myMixin';

export default {
  name: 'SearchingResultPage',
  mixins: [myMixin],
  components: {

  },
  data() {
    return {
    }
  },
  created() {
  },
  computed: {
    searchResults() {
      return this.$store.state.ProductsModule.searchResults;
    }
  },
  methods: {

  },

};
</script>

<style lang="scss" scope>
.SearchingResultPage {
  .ProductList {
    justify-content: center;
  }
}
</style>