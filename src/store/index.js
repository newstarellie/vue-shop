// 引入 Vuex 和 Vue
import { createStore } from 'vuex';
import ProductsModule from './modules/ProductsModule';
import CartModule from './modules/CartModule';
import CheckoutModule from './modules/CheckoutModule';
import LoginModule from './modules/LoginModule';
import i18n from "@/i18n/i18n";

// 定义状态对象
const state = {
  tryValue: '115245',
};

// 定义 getters 对象
const getters = {
};

// 定义 actions 对象
const actions = {
  setToLocalStorage({ commit }, payload) {
    console.log(commit);
    localStorage.setItem(payload.name, payload.data);
  },
  getLocalStorage({ commit }, payload) {
    console.log(commit);
    let localStorageData = JSON.parse(localStorage.getItem(payload.name)) || [];
    return localStorageData;
  },
  async extractTextFromAuthString({ commit, dispatch }, inputString) {
    console.log(commit);
    const regexPattern = /\(auth\/(.*?)\)/;
    const matches = inputString.match(regexPattern);

    if (matches) {
      const extractedText = matches[1].split("/").pop(); // 保留最後一部分
      return await dispatch('translateAndConvertAuthString', extractedText);
    }

    return null;
  },
  translateAndConvertAuthString({ commit }, dynamicPath) {
    console.log(commit);
    // todo 轉換 dynamicPath
    const convertedString = dynamicPath.replace(/-/g, "_");
    console.log(convertedString);

    return i18n.global.t(`message.${convertedString}`);
  }
};

// 定义 mutations 对象
const mutations = {
};

// 创建 Vuex store 实例
export default createStore({
  state,
  getters,
  actions,
  mutations,
  modules: {
    ProductsModule: ProductsModule,
    CartModule: CartModule,
    CheckoutModule: CheckoutModule,
    LoginModule: LoginModule,
  },
});
