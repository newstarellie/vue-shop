<template>
  <div>
    <h2>結帳頁面</h2>
    <table>
      <thead>
        <tr>
          <!-- todo 元件化column -->
          <th>商品</th>
          <th>價格</th>
          <th>數量</th>
          <th>小計</th>
          <th>操作</th>
        </tr>
      </thead>
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
    <p>總金額: {{ totalCartAmount }}</p>
    <form @submit.prevent="submitOrder">
      <label for="shipping-address">送貨地址</label>
      <input
        type="text"
        id="shipping-address"
        v-model="shippingAddress"
        required
      >

      <label for="payment-method">付款方式</label>
      <select
        id="payment-method"
        v-model="paymentMethod"
        required
      >
        <option value="credit-card">信用卡</option>
        <option value="paypal">PayPal</option>
      </select>

      <button type="submit">確認結帳</button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'CheckoutPage',
  data() {
    return {
      shippingAddress: '',
      paymentMethod: 'credit-card'
    }
  },
  methods: {
    submitOrder() {
      // 在這裡處理提交訂單的邏輯
      // 可以使用 shippingAddress 和 paymentMethod 的值來建立訂單
      // 可以發送 API 請求或觸發其他相關操作
      console.log('訂單已提交');
    }
  },
  computed: {
    inCartProductsList() {
      return this.$store.state.CartModule.cartItems;
    },
    totalCartAmount() {
      return this.$store.getters.totalCartAmount;
    }
  },
}
</script>
