<template>
  <div>
    <h2>結帳頁面</h2>
    <cartItemList :inCartProductsList="inCartProductsList"></cartItemList>
    <p>總金額: {{ totalCartAmount }}</p>
    <form @submit.prevent="submitOrder">
      <label for="order-number">訂單編號</label>
      <input type="text" id="order-number" v-model="orderNumber" readonly>
      <label for="name">姓名</label>
      <input type="text" id="name" v-model="name" required>

      <label for="phone">電話</label>
      <input type="tel" id="phone" v-model="phone" required>
      <label for="shipping-address">送貨地址</label>
      <input type="text" id="shipping-address" v-model="shippingAddress" required>
      <label for="postal-code">郵遞區號</label>
      <input type="text" id="postal-code" v-model="postalCode" required>
      <label for="payment-method">付款方式</label>
      <select id="payment-method" v-model="paymentMethod" required>
        <option value="credit-card">信用卡</option>
        <option value="paypal">PayPal</option>
      </select>
      <button type="submit">確認結帳</button>
    </form>

    <!-- 測試用 -->
    <!-- <button @click="submitOrder">{{ fhdusi }}</button> -->
  </div>
</template>

<script>
import cartItemList from '@/components/cartItem/cartItemList.vue'

export default {
  name: 'CheckoutPage',
  data() {
    return {
      name: '',
      phone: '',
      shippingAddress: '',
      postalCode: '',
      paymentMethod: 'credit-card',
    }
  },
  components: {
    cartItemList,
  },
  methods: {
    submitOrder() {
      this.$router.push('/lazy-loading');
      const payload = {
        orderNumber: this.orderNumber,
        name: this.name,
        phone: this.phone,
        shippingAddress: this.shippingAddress,
        postalCode: this.postalCode,
        paymentMethod: this.paymentMethod
      };
      this.$store.dispatch('saveData', payload);
      console.log('訂單已提交');

    }
  },
  computed: {
    inCartProductsList() {
      return this.$store.state.CartModule.cartItems;
    },
    totalCartAmount() {
      return this.$store.getters.totalCartAmount;
    },
    orderNumber() {
      // 生成 16 字元的隨機編號
      const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
      let result = '';
      for (let i = 0; i < 16; i++) {
        result += characters.charAt(Math.floor(Math.random() * characters.length));
      }
      return result;

    }

  },
}
</script>
