<template>
  <div>
    <h2>結帳頁面</h2>
    <cartItemList :inCartProductsList="inCartProductsList"></cartItemList>
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
import cartItemList from '@/components/cartItem/cartItemList.vue'
export default {
  name: 'CheckoutPage',
  data() {
    return {
      shippingAddress: '',
      paymentMethod: 'credit-card'
    }
  },
  components: {
    cartItemList,
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
