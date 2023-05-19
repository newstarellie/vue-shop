
// 定义状态对象
const state = {
  cartItems: [],
  // CartItemQuantity: 0,
};

// 定义 getters 对象
const getters = {
};

// 定义 actions 对象
const actions = {
  getCartItemFromLocalStorage({ commit, dispatch }) {
    dispatch('getLocalStorage', { name: 'cartItems' }).then(data => {
      commit('setCartItemData', data);
    });
  },
  addToCart({ commit, state, dispatch }, product) {
    const itemIndex = state.cartItems.findIndex((item) => item.productId === product.productId);
    if (itemIndex !== -1) {
      commit('incrementCartItemQuantity', itemIndex);
    } else {
      commit('addCartItem', product);
    }
    const payload = { name: 'cartItems', data: JSON.stringify(state.cartItems) };
    dispatch('setToLocalStorage', payload);
  },

  // todo 加入公用的模組
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
// todo 改成大寫的
const mutations = {
  setCartItemData(state, data) {
    state.cartItems = { ...data };
  },
  addCartItem(state, product) {
    let productWithQuantity = {
      ...product,
      quantity: 1
    };
    state.cartItems.push(productWithQuantity);
  },
  incrementCartItemQuantity(state, itemIndex) {
    state.cartItems[itemIndex].quantity++;
  },

};

export default {
  state,
  getters,
  actions,
  mutations,
}
