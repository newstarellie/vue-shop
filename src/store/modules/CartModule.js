
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
  addToCart({ commit, state }, product) {
    const itemIndex = state.cartItems.findIndex((item) => item.productId === product.productId);
    if (itemIndex !== -1) {
      commit('incrementCartItemQuantity', itemIndex);
    } else {
      commit('addCartItem', product);
    }
    commit('setToLocalStorage', 'cartItems', state.cartItems);
  },
};

// 定义 mutations 对象
const mutations = {
  addCartItem(state, product) {
    let productWithQuantity = {
      ...product,
      quantity: 1
    };
    state.cartItems.push(productWithQuantity);

    // console.log(state.cartItems);
  },
  incrementCartItemQuantity(state, itemIndex) {
    state.cartItems[itemIndex].quantity++;
    // console.log(state.cartItems[itemIndex].quantity)
  },
  setToLocalStorage(localStorageName, storeData) {
    // console.log(storeData);
    localStorage.setItem(localStorageName, JSON.stringify(storeData));
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
}
