
<template>
  <table>
    <tableHead :table-column="tableColumn"></tableHead>
    <!-- todo => 元件  -->
    <!-- todo input 切換 成不能輸入  -->
    <tableBody :inCartProductsList="inCartProductsList"></tableBody>
  </table>
</template>

<script>
import tableHead from '@/components/common/table/table-head.vue';
import tableBody from '@/components/common/table/table-body.vue'
export default {
  name: 'cartItemList',
  props: {
    inCartProductsList: {
      type: Array,
      required: true
    },
  },
  components: {
    tableHead,
    tableBody,
  },
  data() {
    return {
      tableColumn: [
        { label: '商品', width: '100px' },
        { label: '價格', width: '80px' },
        { label: '數量', width: '80px' },
        { label: '小計', width: '100px' },
        { label: '操作', width: '200px' }
      ]
    };
  },
  methods: {
    handleItemQuantityChange(product, newValue) {
      this.$store.dispatch('updateCartItemQuantity', {
        productId: product.productId,
        newQuantity: newValue
      });
    },
    removeCartItem(product) {
      this.$store.dispatch('removeCartItem', product);
    }
  },
};
</script>

