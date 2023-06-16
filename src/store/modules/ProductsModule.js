// import product1 from "src/assets/product-1.jpg";
import product1 from "@/assets/product-1.jpg";
import product2 from "@/assets/product-2.jpg";
import product3 from "@/assets/product-3.jpg";


// 定义状态对象
const state = {
  productsList: [
    {
      productId: 1,
      productName: '產品A',
      productDescription: '一個很棒的產品',
      productPrice: 100,
      productInventory: 10,
      productImage: product1
    },
    {
      productId: 2,
      productName: '產品B',
      productDescription: '一個很棒的產品',
      productPrice: 100,
      productInventory: 10,
      productImage: product2
    },
    {
      productId: 3,
      productName: '產品c',
      productDescription: '一個很棒的產品',
      productPrice: 100,
      productInventory: 10,
      productImage: product3
    },
  ],
};

// 定义 getters 对象
const getters = {
};

// 定义 actions 对象
const actions = {

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
