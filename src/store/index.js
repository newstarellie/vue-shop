// 引入 Vuex 和 Vue
import { createStore } from 'vuex';
import ProductsModule from './modules/ProductsModule';
import CartModule from './modules/CartModule';


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
  },
});
