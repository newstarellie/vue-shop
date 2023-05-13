import { createApp } from 'vue'
import App from './App.vue'
import store from './store/index';
// 创建 Vue 实例

const app = createApp(App);
app.use(store);

app.mount('#app')
