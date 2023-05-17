import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index.js'

// 创建 Vue 实例
const app = createApp(App);
app.use(router);

app.mount('#app')
