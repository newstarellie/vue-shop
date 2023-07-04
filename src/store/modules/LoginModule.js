// loginModule.js
import { auth } from '@/firebase';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import router from '@/router';
import { useToast } from 'vue-toastification'
const toast = useToast()


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
  registerUser({ commit, dispatch }, payload) {
    return createUserWithEmailAndPassword(auth, payload.userEmail, payload.password)
      .then((userCredential) => {
        // 註冊成功
        router.push('/');
        toast.success("註冊成功!")
        const user = userCredential.user;
        console.log('使用者註冊成功:', user);
        commit('SET_LOGIN_STATUS', true)
        commit('SET_USER', payload.userEmail)
        dispatch('setUserNameToLocalStorage');

      })
      .catch((error) => {
        // 註冊失敗
        console.log('使用者註冊失敗:', error);
        toast.error(`註冊失敗 ${error}`);
      });
  },
  logoutUser({ commit, dispatch }) {
    signOut(auth)
      .then(() => {
        // 登出成功
        console.log('使用者已登出');
        commit('SET_LOGIN_STATUS', false)
        commit('SET_USER', null)
        dispatch('setUserNameToLocalStorage');
        router.push('/');
        toast.success("登出成功!")
      })
      .catch((error) => {
        // 登出失敗
        console.log('使用者登出失敗:', error);
        toast.error(`登出失敗 ${error}`);

      });
  },
  loginUserWithEmailAndPassword({ commit, dispatch }, payload) {
    return signInWithEmailAndPassword(auth, payload.userEmail, payload.password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log('使用者登入成功:', user);
        commit('SET_LOGIN_STATUS', true)
        commit('SET_USER', payload.userEmail)
        dispatch('setUserNameToLocalStorage');
        router.push('/');
        toast.success("登入成功!")

      })
      .catch((error) => {
        // 登入失敗
        console.log('使用者登入失敗:', error);
        toast.error(`登入失敗 ${error}`);

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
