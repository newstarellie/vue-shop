<template>
  <div class="container loginPage">
    <h2>{{ isRegister ? '註冊' : '登入' }}</h2>
    <form @submit.prevent="handleSubmit">
      <div>
        <!-- 註冊頁面的表單元素 -->
        <div>
          <label for="username">使用者名稱：</label>
          <input type="text"
            id="username"
            v-model="username"
            autocomplete="on"
            required>
        </div>
        <div>
          <label for="password">密碼：</label>
          <input type="password"
            id="password"
            v-model="password"
            autocomplete="on"
            required>
        </div>
      </div>
      <div>
        <button type="submit">{{ isRegister ? '註冊' : '登入' }}</button>
      </div>
    </form>
    <div>
      <button @click="toggleForm
      ">{{ isRegister ? '已有帳號？登入' : '還沒有帳號？註冊' }}</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LoginPage',
  data() {
    return {
      username: '',
      password: ''
    }
  },
  computed: {
    isRegister() {
      return this.$store.state.LoginModule.registerPageStatus;
    }
  },
  methods: {
    handleSubmit() {
      if (this.isRegister) {
        this.register(); // 註冊動作
      } else {
        this.login(); // 登入動作
      }
    },
    login() {
      // 在這裡處理登入邏輯
      // 您可以在這裡使用 this.username 和 this.password 來獲取用戶輸入的資訊
      // 可以向後端發送 API 請求進行驗證
      console.log('登入')
      this.$store.dispatch('LoginModule/login', this.username);
      this.$router.push('/');
    },
    register() {
      // 註冊邏輯
      console.log('註冊');
      this.$router.push('/');
      const userData = { username: this.username, password: this.password };
      this.$store.dispatch('LoginModule/register', userData);
    },
    toggleForm() {
      this.$store.dispatch('LoginModule/setRegisterStatus', { router: this.$router, status: !this.isRegister });
    }
  }
}
</script>
<style lang="scss" scope>
.loginPage {
  flex-direction: column;
  // align-items: center;
  // justify-content: center;

  // TODO 變成常用元件
  form {
    flex-direction: column;
    width: 50%;
    margin: 10px auto;

    label {
      text-align: left;
      display: block;
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