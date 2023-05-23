
<template>
  <table>
    <!-- todo thead => 元件 -->
    <thead>
      <tr>
        <th>商品</th>
        <th>價格</th>
        <th>數量</th>
        <th>小計</th>
        <th>操作</th>
      </tr>
    </thead>
    <!-- todo => 元件  -->
    <!-- todo input 切換 成不能輸入  -->
    <tbody>
      <tr
        v-for="inCartProduct in inCartProductsList"
        :key="inCartProduct.productId"
      >
        <td>{{ inCartProduct.productName }}</td>
        <td>{{ inCartProduct.productPrice }}</td>
        <td>
          <input
            type="number"
            min="1"
            :value="inCartProduct.quantity"
            @change="handleItemQuantityChange(inCartProduct,$event.target.value)"
          />
        </td>
        <td>{{ inCartProduct.productPrice * inCartProduct.quantity }}</td>
        <td>
          <button @click="removeCartItem(inCartProduct)">移除</button>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  name: 'cartItemList',
  props: {
    inCartProductsList: {
      type: Array,
      required: true
    },
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

