// loginModule.js
import { auth } from '@/firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';


const state = {
  isLoggedIn: false, // 登入狀態
  user: null, // 登入的使用者資訊
  registerPageStatus: false,
}

const getters = {
  isLoggedIn: state => state.isLoggedIn,
  user: state => state.user
}

const actions = {
  setRegisterStatus({ commit }, { router, status }) {
    commit('SET_REGISTER_PAGE_STATUS', status);
    router.push('/login');
  },
  login({ commit, dispatch }, username) {
    console.log(username)
    commit('SET_LOGIN_STATUS', true)
    commit('SET_USER', username)
    dispatch('setUserNameToLocalStorage');
  },
  logout({ commit, dispatch }) {
    // 登出邏輯
    // 在這裡執行相關操作，如清除使用者資訊等
    // 登出成功後觸發 mutation
    commit('SET_LOGIN_STATUS', false)
    commit('SET_USER', null)
    dispatch('setUserNameToLocalStorage');
  },
  register({ commit, dispatch }, userData) {
    console.log('註冊')
    commit('SET_LOGIN_STATUS', true);
    commit('SET_USER', userData.username);
    dispatch('setUserNameToLocalStorage');
  },
  setUserNameToLocalStorage({ dispatch }) {
    const payload = { name: 'username', data: JSON.stringify(state.user) };
    dispatch('setToLocalStorage', payload, { root: true });
  },
  getUserDataToLocalStorage({ commit, dispatch }) {
    dispatch('getLocalStorage', { name: 'username' }, { root: true }).then(data => {
      if (data.length > 0) {
        commit('SET_LOGIN_STATUS', true);
        commit('SET_USER', data);
      } else {
        commit('SET_LOGIN_STATUS', false);
      }
    }).catch(error => {
      console.error(error);
    });
  },
  registerUser({ commit }, payload) {
    console.log(commit)
    console.log(payload)
    console.log(payload.userEmail)
    return createUserWithEmailAndPassword(auth, payload.userEmail, payload.password)
      .then((userCredential) => {
        // 註冊成功
        const user = userCredential.user;
        console.log('使用者註冊成功:', user);
      })
      .catch((error) => {
        // 註冊失敗
        console.log(payload.userEmail)

        console.log('使用者註冊失敗:', error);
      });
  }
}
const mutations = {
  SET_LOGIN_STATUS(state, status) {
    state.isLoggedIn = status
  },
  SET_USER(state, user) {
    state.user = user
  },
  SET_REGISTER_PAGE_STATUS(state, status) {
    state.registerPageStatus = status;
  },
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
