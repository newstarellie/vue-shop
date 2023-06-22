import { createRouter, createWebHistory } from 'vue-router';
import Products from '../views/Products.vue';
import Cart from '../views/Cart.vue'
import Contact from '../views/Contact.vue'
import Checkout from '../views/Checkout.vue'
import aboutUs from '../views/AboutUs.vue'
import LoadingSpinner from '../views/LoadingSpinner.vue'



const routes = [
  {
    path: '/',
    name: 'aboutUs',
    component: aboutUs,
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
    path: '/loadingSpinner',
    name: 'LoadingSpinner',
    component: LoadingSpinner,
  },
];

// 創建 Vue Router 實例
const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
