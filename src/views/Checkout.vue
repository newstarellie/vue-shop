<template>
  <div class="container checkout">
    <h2>填寫訂單資訊</h2>
    <cartItemList :inCartProductsList="inCartProductsList"></cartItemList>
    <div class="row w50">
      <button @click="backToCart">回購物車</button>
      <div class="right-align"></div>
      <h3>總金額: {{ totalCartAmount }}</h3>
    </div>
    <form @submit.prevent="submitOrder">
      <label for="order-number">訂單編號</label>
      <input type="text"
        id="order-number"
        v-model="orderNumber"
        readonly>
      <label for="name">姓名</label>
      <input type="text"
        id="name"
        v-model="name"
        required>

      <label for="phone">電話</label>
      <input type="tel"
        id="phone"
        v-model="phone"
        required>
      <label for="shipping-address">送貨地址</label>
      <input type="text"
        id="shipping-address"
        v-model="shippingAddress"
        required>
      <label for="postal-code">郵遞區號</label>
      <input type="text"
        id="postal-code"
        v-model="postalCode"
        required>
      <label for="payment-method">付款方式</label>
      <select id="payment-method"
        v-model="paymentMethod"
        required>
        <option value="credit-card">信用卡</option>
        <option value="paypal">PayPal</option>
      </select>
      <button type="submit">送出資料</button>
    </form>

  </div>
</template>

<script>
import cartItemList from '@/components/cartItem/cartItemList.vue'
import { DateTime } from 'luxon';


export default {
  name: 'CheckoutPage',
  data() {
    return {
      name: '',
      phone: '',
      shippingAddress: '',
      postalCode: '',
      paymentMethod: 'credit-card',
      createdTime: DateTime.now().toFormat('yyyy-MM-dd-HH:mm:ss'),
    }
  },
  components: {
    cartItemList,
  },
  created() {
    this.$store.dispatch('getCartItemFromLocalStorage');
    this.$store.commit('changeCheckoutStatus', true);
  },
  unmounted() {
    this.$store.commit('changeCheckoutStatus', false);
  },
  methods: {
    submitOrder() {
      this.$router.push('/lazy-loading');
      const payload = {
        orderNumber: this.orderNumber,
        createdTime: this.createdTime,
        name: this.name,
        phone: this.phone,
        shippingAddress: this.shippingAddress,
        postalCode: this.postalCode,
        paymentMethod: this.paymentMethod
      };
      this.$store.dispatch('saveOrderToDatabase', payload);
      console.log('訂單已提交');
    },
    backToCart() {
      this.$router.push('/cart');
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
<style lang="scss" scope>
.checkout {
  display: flex;
  flex-direction: column;
  align-items: center;

  form {
    flex-direction: column;
    width: 50%;
    margin: 10px auto;

    label {
      text-align: start;
      margin: $margin-sm 0;
    }

    input,
    select {
      text-align: start;

    }

    button {
      margin-top: 20px;
    }
  }

  button {
    margin: $margin-sm 0;
  }
}
</style>