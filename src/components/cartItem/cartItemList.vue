
<template>
  <div class="FloatBarHolder cart-table-th">
    <div class="select-all">
      <div class="cart-checkbox">
        <input class="check-all check"
          id="allChecked"
          type="checkbox"
          value="true">
      </div>
      <label class="th-inner">Select All</label>
    </div>

    <div v-for="item in tableHeaders"
      class="th-inner"
      :key="item.key">
      {{ item.text }}
    </div>
  </div>

  <table>
    <!-- <tableHead :table-column="tableColumn"></tableHead> -->

    <tableBody :dataList="inCartProductsList">
    </tableBody>
  </table>
  <div class="FloatBarHolder ">
    <div class="select-all">
      <div class="cart-checkbox">
        <input class="check-all check"
          id=""
          name="select-all"
          type="checkbox"
          value="true">
      </div>
      <label>&nbsp;&nbsp;Selected <span class="Selected-pieces">3</span> items</label>
    </div>
  </div>
</template>

<script>
// import tableHead from '@/components/common/table/table-head.vue';
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
    // tableHead,
    tableBody,
  },
  data() {
    return {
      tableHeaders: [
        { key: "product", text: "Product" },
        { key: "price", text: "Price" },
        { key: "quantity", text: "Quantity" },
        { key: "subtotal", text: "Subtotal" },
        { key: "action", text: "Action" }
      ]
    };
  },
  computed: {
    tableColumn() {
      return this.$store.getters.filteredTableColumn;
    },
  }
};
</script>
<style lang="scss">
.FloatBarHolder {
  height: 50px;
  line-height: 50px;
  background: #f5f5f5;
  display: flex;

  .select-all {
    display: flex;
  }

  .th-inner {
    font-size: $font-size-base*2;
    margin: 0.5rem;
  }
}
</style>
