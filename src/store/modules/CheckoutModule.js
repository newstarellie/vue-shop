
import { setDoc, doc } from "firebase/firestore";
import db from '@/firebase';
import router from '@/router';
import store from '@/store/index';

// 定义状态对象
const state = {
  checkoutStatus: false,
  tableColumn: [
    { columnName: 'product-img', label: '商品', width: '15%' },
    { columnName: 'product', label: '', width: '15%' },
    { columnName: 'price', label: '價格', width: '15%' },
    { columnName: 'quantity', label: '數量', width: '15%' },
    { columnName: 'total', label: '小計', width: '15%' },
    { columnName: 'action', label: '操作', width: '15%' }
  ]
};

// 定义 getters 对象
const getters = {
  filteredTableColumn(state) {
    if (state.checkoutStatus) {
      return state.tableColumn.filter(column => column.columnName !== 'action');
    } else {
      return state.tableColumn;
    }
  },
};

// 定义 actions 对象
const actions = {
  saveOrderToDatabase({ commit }, payload) {
    console.log(commit);

    const documentRef = doc(db, "orderRecord", payload.createdTime);

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
    console.log(`結帳狀態:  ${state.checkoutStatus}`);
  }
};

export default {
  state,
  getters,
  actions,
  mutations,
}
