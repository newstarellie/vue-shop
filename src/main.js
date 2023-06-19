import { createApp } from 'vue';
import App from './App.vue';
import store from './store/index';
import router from './router/index.js';

// vue-toastification 設定
// https://www.npmjs.com/package/@brackets/vue-toastification
import Toast, { POSITION } from "vue-toastification";
import "vue-toastification/dist/index.css";
import { toastSetup } from './toastSetup.js';
const { toast } = toastSetup();





// 创建 Vue 实例
const app = createApp(App);
app.use(store);
app.use(router);
// app.use(Toast);
app.use(Toast, {
  // Setting the global default position
  position: POSITION.TOP_CENTER
});
app.config.globalProperties.$toast = toast;


app.mount('#app')
