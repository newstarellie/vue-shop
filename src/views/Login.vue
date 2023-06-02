<template>
  <div>
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
      <button @click="toggleForm">{{ isRegister ? '已有帳號？登入' : '還沒有帳號？註冊' }}</button>
    </div>
  </div>
</template>

<script>
import bcrypt from 'bcryptjs';

export default {
  name: 'LoginPage',
  data() {
    return {
      isRegister: true, // 控制是註冊還是登入頁面
      username: '',
      password: ''
    }
  },
  methods: {
    async hashPassword() {
      const saltRounds = 10;
      const hashedPassword = await bcrypt.hash(this.password, saltRounds);
      return hashedPassword;
    },
    handleSubmit() {
      if (this.isRegister) {
        this.register(); // 註冊動作
      } else {
        this.login(); // 登入動作
      }
    },
    login() {
      this.$store.dispatch('LoginModule/login', this.username);
      this.$router.push('/');
    },
    async register() {
      const hashedPassword = await this.hashPassword();
      const userData = { username: this.username, password: hashedPassword };
      this.$store.dispatch('LoginModule/handleRegister', userData);
    },
    // 切換註冊和登入頁面
    toggleForm() {
      this.isRegister = !this.isRegister;
    }
  }
}
</script>
