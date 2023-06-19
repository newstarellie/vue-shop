import { createApp } from 'vue';
import App from './App.vue';
import store from './store/index';
import router from './router/index.js';

// https://www.npmjs.com/package/@brackets/vue-toastification
import Toast from "vue-toastification";
import { toastSetup } from './toastSetup.js';
const { toast } = toastSetup();





// 创建 Vue 实例
const app = createApp(App);
app.use(store);
app.use(router);
app.use(Toast);
app.config.globalProperties.$toast = toast;


app.mount('#app')
