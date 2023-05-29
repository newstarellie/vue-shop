
import { setDoc, doc } from "firebase/firestore";
import db from '@/firebase';
import router from '@/router';
import store from '@/store/index';

// 定义状态对象
const state = {
  checkoutStatus: false,
};

// 定义 getters 对象
const getters = {

};

// 定义 actions 对象
const actions = {
  saveData({ commit }, payload) {
    console.log(commit);

    const documentRef = doc(db, "orderRecord", payload.orderNumber);

    return setDoc(documentRef, { ...payload })
      .then(() => {
        console.log("資料已成功存儲");
        // 轉跳回主頁面  
        router.push('/');
        // 清空購物車
        store.dispatch('clearCartItems');
      })
      .catch((error) => {
        console.error("儲存資料時發生錯誤：", error);
        throw error; // 將錯誤向上傳遞，以便在需要時處理
      });
  },
};

// 定义 mutations 对象
const mutations = {
  changeCheckoutStatus(state, data) {
    state.checkoutStatus = data;
    console.log(state.checkoutStatus)
  }
};

export default {
  state,
  getters,
  actions,
  mutations,
}
