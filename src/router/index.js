import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import Products from '../views/Products.vue';
import Cart from '../views/Cart.vue'
import Contact from '../views/Contact.vue'
import Checkout from '../views/Checkout.vue'
// TODO 要改
import aboutUs from '../views/Checkout.vue'
import LazyLoading from '../views/LazyLoading.vue'



const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/products',
    name: 'Products',
    component: Products,
  },
  {
    path: '/cart',
    name: 'Cart',
    component: Cart,
  },
  {
    path: '/Checkout',
    name: 'Checkout',
    component: Checkout,
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact,
  },
  {
    path: '/aboutUs',
    name: 'aboutUs',
    component: aboutUs,
  },
  {
    path: '/lazy-loading',
    name: 'LazyLoading',
    component: LazyLoading,
  },
];

// 創建 Vue Router 實例
const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
