// loginModule.js

const state = {
  isLoggedIn: false, // 登入狀態
  user: null // 登入的使用者資訊
}

const getters = {
  isLoggedIn: state => state.isLoggedIn,
  user: state => state.user
}

const actions = {
  login({ commit }, user) {
    console.log(user)
    // 登入邏輯
    // 在這裡執行後端驗證等相關操作
    // 登入成功後觸發 mutation
    commit('SET_LOGIN_STATUS', true)
    commit('SET_USER', user)
  },
  logout({ commit }) {
    // 登出邏輯
    // 在這裡執行相關操作，如清除使用者資訊等
    // 登出成功後觸發 mutation
    commit('SET_LOGIN_STATUS', false)
    commit('SET_USER', null)
  },
  register({ commit, dispatch }, userData) {
    console.log('註冊')
    commit('SET_LOGIN_STATUS', true);
    commit('SET_USER', userData.username);
    dispatch('setUserDataToLocalStorage', userData);
  },
  setUserNameToLocalStorage({ dispatch }, username) {
    const payload = { name: 'username', data: JSON.stringify({ name: username }) };
    console.log(username);
    dispatch('setToLocalStorage', payload, { root: true });
  },
  getUserDataToLocalStorage({ commit, dispatch }) {
    dispatch('getLocalStorage', { name: 'username' }, { root: true }).then(data => {
      commit('SET_LOGIN_STATUS', true);
      commit('SET_USER', data);
    });
  },
}
const mutations = {
  SET_LOGIN_STATUS(state, status) {
    state.isLoggedIn = status
  },
  SET_USER(state, user) {
    state.user = user
  }
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
