
<template>
  <table>
    <tableHead :table-column="tableColumn"></tableHead>
    <tableBody :dataList="inCartProductsList">
    </tableBody>
  </table>
</template>

<script>
import tableHead from '@/components/common/table/table-head.vue';
import tableBody from '@/components/cartItem/cartList-table-body.vue'
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
  computed: {
    tableColumn() {
      return this.$store.state.CheckoutModule.tableColumn;
    },
  }
};
</script>

