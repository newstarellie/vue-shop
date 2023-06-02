import { setDoc, doc } from "firebase/firestore";
import { collection, query, where, getDocs } from 'firebase/firestore';
import db from '@/firebase';
import router from '@/router';

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
  handleRegister({ commit, dispatch }, userData) {
    return dispatch('saveUserDataToDatabase', userData)
      .then((result) => {
        // todo 設定通知toast

        console.log('返回結果：', result);
        // 在這裡處理返回的結果
        dispatch('setUserNameToLocalStorage', userData.username);
        commit('SET_LOGIN_STATUS', true);
        commit('SET_USER', userData.username);
        router.push('/');
      })
      .catch((error) => {
        console.error('儲存會員資料時發生錯誤：', error);
        router.push('/login');

        // todo 設定通知toast
        // 在這裡處理錯誤
      });
    // dispatch('setUserNameToLocalStorage', userData.username);

  },
  saveUserDataToDatabase({ commit }, payload) {
    console.log(commit);
    router.push('/lazy-loading');

    const collectionRef = collection(db, 'accountList');
    const queryRef = query(collectionRef, where('username', '==', payload.username));

    return getDocs(queryRef)
      .then((querySnapshot) => {
        if (!querySnapshot.empty) {
          return '帳號已存在，請使用其他帳號';
        } else {
          const documentRef = doc(collectionRef, payload.username);
          return setDoc(documentRef, { ...payload });
        }
      })
      .then((result) => {
        if (typeof result === 'string') {
          console.log(result);
          return Promise.reject(result);
        } else {
          return '會員資料已成功存儲';
        }
      })
      .catch((error) => {
        console.error('儲存會員資料時發生錯誤：', error);
        return '儲存會員資料時發生錯誤';
      });
  },
  setUserNameToLocalStorage({ dispatch }, username) {
    const payload = { name: 'username', data: JSON.stringify(username) };
    dispatch('setToLocalStorage', payload, { root: true });
  },
  getUserDataToLocalStorage({ commit, dispatch }) {
    dispatch('getLocalStorage', { name: 'userData' }, { root: true }).then(data => {
      commit('SET_LOGIN_STATUS', true);
      commit('SET_USER', data.username);
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
