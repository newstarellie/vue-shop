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
  handleLogin({ commit, dispatch }, userData) {
    return dispatch('checkPasswordFromDatabase', userData)
      .then((result) => {
        // todo 設定通知toast
        console.log('返回結果：', result);
        // 在這裡處理返回的結果
        dispatch('setUserNameToLocalStorage', userData.username);
        commit('SET_LOGIN_STATUS', true)
        commit('SET_USER', userData.username)
        router.push('/');
      })
      .catch((error) => {
        console.error('登入錯誤', error);
        router.push('/login');

        // todo 設定通知toast
        // 在這裡處理錯誤
      });
    // dispatch('setUserNameToLocalStorage', userData.username);

  },
  logout({ commit, dispatch }) {
    commit('SET_LOGIN_STATUS', false)
    commit('SET_USER', null)
    dispatch('setUserNameToLocalStorage', null);
    // todo 設定通知toast

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
  checkPasswordFromDatabase({ commit }, userData) {
    console.log(commit);
    router.push('/lazy-loading');

    const collectionRef = collection(db, 'accountList');
    // todo  先看看有沒有這個帳號
    // todo 寫法有錯 所以結果有錯
    const queryRef1 = query(collectionRef, where('username', '==', userData.username));
    const queryRef2 = query(collectionRef, where('password', '==', userData.password));
    return Promise.all([getDocs(queryRef1), getDocs(queryRef2)])
      .then(([querySnapshot1, querySnapshot2]) => {
        if (!querySnapshot1.empty && !querySnapshot2.empty) {
          return '密碼相同';
        } else {
          return '密碼不相同';
        }
      })
      .then((result) => {
        if (result === '密碼不相同') {
          return Promise.reject(result);
        } else {
          return '登入成功';
        }
      })
      .catch((error) => {
        console.error('登入發生錯誤：', error);
        return '登入發生錯誤：';
      });
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
    console.log(username);
    dispatch('setToLocalStorage', payload, { root: true });
  },
  getUserDataToLocalStorage({ commit, dispatch }) {
    dispatch('getLocalStorage', { name: 'username' }, { root: true }).then(data => {
      // 如果有存在LocalStorage
      if (data.length == -1) {
        console.log('dji')
        commit('SET_USER', data);
        commit('SET_LOGIN_STATUS', true);
      }
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
