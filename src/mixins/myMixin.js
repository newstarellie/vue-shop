const myMixin = {
  data() {
    return {
    };
  },
  methods: {
    addToCart(ProductItemInform) {
      this.$toast.success("加入成功");
      console.log(this.ProductItemInform)
      return this.$store.dispatch('addToCart', ProductItemInform);
    },
  }
};

export default myMixin;
