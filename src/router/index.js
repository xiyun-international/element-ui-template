import Vue from 'vue';
import VueRouter from 'vue-router';

import layout from '../views/layout/layout.vue';
import login from '../views/login/login.vue';
// import { getToken } from '../utils/token';

import children from './childrenRouter';

Vue.use(VueRouter);

// 路由配置
const routes = [
  {
    path: '*',
    component: login,
  },
  {
    name: 'login',
    path: '/login',
    component: login,
  },
  // 常规路由
  {
    path: '/',
    component: layout,
    children,
  },
];
const router = new VueRouter({
  routes,
});

router.beforeEach((to, from, next) => {
  // if (to.name !== 'login') {
  //   const token = getToken();
  //   if (!token) {
  //     next('login');
  //   }
  // }
  next();
});

export default router;
