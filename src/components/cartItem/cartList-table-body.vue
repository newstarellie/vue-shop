
<template>
  <tbody>
    <tr v-for="dataItem in dataList"
      :key="dataItem.id">
      <tableTd :dataForm="'img'"
        :data="dataItem.productImage"></tableTd>
      <tableTd :dataForm="'text'"
        :data="dataItem.productName"></tableTd>
      <tableTd :dataForm="'text'"
        :data="dataItem.productPrice"></tableTd>
      <tableTd :dataForm="quantityInput"
        :data="dataItem.quantity"
        @changeValue="(newValue) => handleItemQuantityChange(newValue, dataItem)"></tableTd>
      <tableTd :dataForm="'text'"
        :data="itemTotalPrice(dataItem)"></tableTd>
      <tableTd :dataForm="'button'"
        :data="'移除'"
        v-if="!checkoutStatus"
        @click="removeCartItem(dataItem)"></tableTd>
    </tr>
  </tbody>
</template>

<script>
import tableTd from '@/components/common/table/table-td.vue';

export default {
  name: 'tableBody',
  props: {
    dataList: {
      type: Array,
      required: true
    },
  },
  components: {
    tableTd,
  },
  data() {
    return {
    }
  },
  methods: {
    itemTotalPrice(dataItem) {
      return dataItem.productPrice * dataItem.quantity;
    },
    removeCartItem(product) {
      this.$toast.success("移除成功");
      this.$store.dispatch('removeCartItem', product);
    },
    handleItemQuantityChange(newValue, product) {
      this.$store.dispatch('updateCartItemQuantity', {
        productId: product.productId,
        newQuantity: newValue
      });
    }
  },
  computed: {
    checkoutStatus() {
      return this.$store.state.CheckoutModule.checkoutStatus
    },
    quantityInput() {
      return this.checkoutStatus ? 'text' : 'input';
    },
  }
};
</script>

<style lang="scss">
td {
  height: 100px;

}
</style>