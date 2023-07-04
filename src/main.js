import { createApp } from 'vue';
import App from './App.vue';
import store from './store/index';
import router from './router/index.js';
import VueI18n from 'vue-i18n'


// https://github.com/aFarkas/lazysizes
import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';


// vue-toastification 設定
// https://www.npmjs.com/package/@brackets/vue-toastification
import Toast, { POSITION, useToast } from "vue-toastification";
import "vue-toastification/dist/index.css";



// 创建 Vue 实例
const app = createApp(App);
app.use(store);
app.use(router);
// app.use(Toast);
app.use(Toast, {
  // Setting the global default position
  timeout: 1000,
  position: POSITION.TOP_CENTER
});
app.use(VueI18n);
app.config.globalProperties.$toast = useToast();
app.config.globalProperties.$lazySizes = window.lazySizes;


app.mount('#app')
