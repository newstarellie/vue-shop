// 引入 Vuex 和 Vue
import { createStore } from 'vuex';
// import productsModule from './modules/products';



// 定义状态对象
const state = {
  tryValue: '115245',
};

// 定义 getters 对象
const getters = {
};

// 定义 actions 对象
const actions = {
  // ...commonActions,
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
  // modules: {
  //   productsModule: productsModule,
  // },
});
