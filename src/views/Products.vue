<template>
  <div class="ProductsPage">
    <div class="left-nav">
      <div class="title">所有分类</div>
      <div class="list-box">
        <dl>
          <dt class=""
            off="">奶粉辅食</dt>
          <dd style="display: block;"><a href="javascript:;">进口奶粉</a></dd>
          <dd style="display: block;"><a href="javascript:;">宝宝辅食</a></dd>
          <dd style="display: block;"><a href="javascript:;">营养品</a></dd>
        </dl>
        <dl>
          <dt>儿童用品</dt>
          <dd><a href="javascript:;">纸尿裤</a></dd>
          <dd><a href="javascript:;">婴儿湿巾</a></dd>
          <dd><a href="javascript:;">婴儿车</a></dd>
          <dd><a href="javascript:;">婴儿床</a></dd>
          <dd><a href="javascript:;">儿童安全座椅</a></dd>
        </dl>
        <dl>
          <dt>儿童早教</dt>
          <dd><a href="javascript:;">儿童玩具</a></dd>
          <dd><a href="javascript:;">早教书籍</a></dd>
          <dd><a href="javascript:;">孕产育儿书</a></dd>
        </dl>
        <dl>
          <dt>儿童服饰</dt>
          <dd><a href="javascript:;">童装</a></dd>
          <dd><a href="javascript:;">童鞋</a></dd>
          <dd><a href="javascript:;">宝宝配饰</a></dd>
        </dl>
        <dl>
          <dt>孕妈专区</dt>
          <dd><a href="javascript:;">孕妇装</a></dd>
          <dd><a href="javascript:;">孕妇护肤</a></dd>
          <dd><a href="javascript:;">孕妇用品</a></dd>
        </dl>
      </div>
    </div>
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