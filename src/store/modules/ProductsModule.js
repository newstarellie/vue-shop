import { ref, set } from "firebase/database";
import { database } from "@/fr";

// 定义状态对象
const state = {
  productsList: [
    {
      productId: 1,
      productName: '產品A',
      productDescription: '一個很棒的產品',
      productPrice: 100,
      productInventory: 10,
      productImage: 'https://fakeimg.pl/100x30/'
    },
    {
      productId: 2,
      productName: '產品B',
      productDescription: '一個很棒的產品',
      productPrice: 100,
      productInventory: 10,
      productImage: 'https://fakeimg.pl/100x30/'
    },
  ],
};

// 定义 getters 对象
const getters = {
};

// 定义 actions 对象
const actions = {
  setFireBase() {
    console.log(ref);
    console.log(set);
    console.log(database)
    let userId = 'kfops';
    set(ref(database, userId), {
      username: userId,
      // email: email,
      // profile_picture: imageUrl
    });

  },
};

// 定义 mutations 对象
const mutations = {
};

export default {
  state,
  getters,
  actions,
  mutations,
}
