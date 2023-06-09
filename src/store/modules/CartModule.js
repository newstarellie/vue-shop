
// 定义状态对象
const state = {
  cartItems: [],
};

// 定义 getters 对象
const getters = {
  totalCartAmount(state) {
    return state.cartItems.reduce((total, item) => {
      return total + item.productPrice * item.quantity;
    }, 0);
  }
};

// 定义 actions 对象
const actions = {
  getCartItemFromLocalStorage({ commit, dispatch }) {
    dispatch('getLocalStorage', { name: 'cartItems' }).then(data => {
      commit('SET_CART_ITEM_DATA', data);
    });
  },
  addToCart({ commit, state, dispatch }, product) {
    const itemIndex = state.cartItems.findIndex((item) => item.productId === product.productId);
    if (itemIndex !== -1) {
      commit('INCREMENT_CART_ITEM_QUANTITY', itemIndex);
    } else {
      commit('ADD_CART_ITEM', product);
    }
    dispatch('setCartItemsToLocalStorage');

  },
  clearCartItems({ commit, dispatch }) {
    commit('SET_CART_ITEM_DATA', [])
    dispatch('setCartItemsToLocalStorage');

  },
  removeCartItem({ commit, dispatch }, product) {
    const itemIndex = state.cartItems.findIndex((item) => item.productId === product.productId);
    // 找得到id就移除
    if (itemIndex !== -1) {
      commit('REMOVE_CART_ITEM', itemIndex);
      dispatch('setCartItemsToLocalStorage');
    }
  },
  setCartItemsToLocalStorage({ dispatch }) {
    const payload = { name: 'cartItems', data: JSON.stringify(state.cartItems) };
    dispatch('setToLocalStorage', payload);
  },
  updateCartItemQuantity({ commit, state, dispatch }, payload) {
    const { productId, newQuantity } = payload;
    // 找到对应的商品在购物车中的索引
    const itemIndex = state.cartItems.findIndex(item => item.productId === productId);
    if (itemIndex !== -1) {
      // 更新对应商品的数量
      commit('UPDATE_CART_ITEM_QUANTITY', { itemIndex, newQuantity });
    }
    dispatch('setCartItemsToLocalStorage')
  }

};

// 定义 mutations 对象
const mutations = {
  SET_CART_ITEM_DATA(state, data) {
    state.cartItems = Array.from(data);
  },
  ADD_CART_ITEM(state, product) {
    let productWithQuantity = {
      ...product,
      quantity: 1
    };
    state.cartItems.push(productWithQuantity);
  },
  INCREMENT_CART_ITEM_QUANTITY(state, itemIndex) {
    state.cartItems[itemIndex].quantity++;
  },
  REMOVE_CART_ITEM(state, itemIndex) {
    state.cartItems.splice(itemIndex, 1);
  },
  UPDATE_CART_ITEM_QUANTITY(state, payload) {
    const { itemIndex, newQuantity } = payload;
    if (newQuantity >= 1) {
      // 更新对应商品的数量
      state.cartItems[itemIndex].quantity = newQuantity;
    } else {
      // 数量无效，从购物车中移除该商品
      state.cartItems.splice(itemIndex, 1);
    }
  }
};

export default {
  state,
  getters,
  actions,
  mutations,
}
