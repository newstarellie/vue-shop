
<template>
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
</template>

<script>
export default {
  name: 'tableBody',
  props: {
    inCartProductsList: {
      type: Array,
      required: true
    },
  },
  methods: {

  },
};
</script>

