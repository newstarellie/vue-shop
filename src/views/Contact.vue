<template>
  <div class="contact">
    <h1>聯絡我們</h1>
    <p>如果您有任何問題，歡迎透過以下方式與我們聯繫。</p>
    <form @submit.prevent="submitForm">
      <div class="form-group">
        <label for="name">姓名：</label>
        <input type="text" id="name" v-model="form.name" />
      </div>
      <div class="form-group">
        <label for="email">電子郵件：</label>
        <input type="email" id="email" v-model="form.email" />
      </div>
      <div class="form-group">
        <label for="message">訊息：</label>
        <textarea id="message" v-model="form.message"></textarea>
      </div>
      <button type="submit">提交</button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'ContactPage',
  data() {
    return {
      form: {
        name: '',
        email: '',
        message: '',
      },
    };
  },
  methods: {
    submitForm() {
      // 在這裡處理表單提交的邏輯，例如檢查輸入是否有效，然後發送給後端
      console.log('提交表單', this.form);
    },
  },
};
</script>

