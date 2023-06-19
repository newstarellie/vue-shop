import { createApp } from 'vue';
import App from './App.vue';
import store from './store/index';
import router from './router/index.js';

// vue-toastification 設定
// https://www.npmjs.com/package/@brackets/vue-toastification
import Toast, { POSITION, useToast } from "vue-toastification";
import "vue-toastification/dist/index.css";

// Vuetify
import 'vuetify/styles';
import { createVuetify } from 'vuetify';
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';

const vuetify = createVuetify({
  components,
  directives,
})





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
app.use(vuetify);
app.config.globalProperties.$toast = useToast();


app.mount('#app')
