import { createApp } from 'vue'
import App from './App.vue'
import store from './store/index';
import router from './router/index.js'

// 创建 Vue 实例

const app = createApp(App);
app.use(store);
app.use(router);


app.mount('#app')
