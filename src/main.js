import { createApp } from 'vue';
import App from './App.vue';
import store from './store/index';
import router from './router/index.js';
import Toast from "vue-toastification";
// https://github.com/Maronato/vue-toastification#plugin-registration

// Import the CSS or use your own!
// import "vue-toastification/dist/index.css";

// 创建 Vue 实例
const app = createApp(App);
app.use(store);
app.use(router);
app.use(Toast);

app.mount('#app')
