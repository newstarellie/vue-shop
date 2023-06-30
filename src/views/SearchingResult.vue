<template>
  <div v-if="searchResults.length > 0">
    <h3>搜索結果：</h3>
    <ul>
      <li v-for="result in searchResults"
        :key="result.productId">
        <div>
          <img :src="result.productImage"
            alt="商品圖片" />
        </div>
        <div>
          <h4>{{ result.productName }}</h4>
          <p>{{ result.productDescription }}</p>
          <p>價格：{{ result.productPrice }}元</p>
        </div>
      </li>
    </ul>
  </div>
  <div v-else>
    <p>無搜索結果</p>
  </div>
</template>

<script>

export default {
  name: 'SearchingResultPage',
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

<style lang="scss"></style>