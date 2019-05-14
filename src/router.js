import Vue from 'vue'
import jwt from 'jwt-decode';
import Router from 'vue-router'
import store from './store';

Vue.use(Router)

export const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'auth-layout',
      component: () => import('@/layouts/Auth'),
      children: [
        { path: 'login', name: 'login', component: () => import('@/views/Auth/Login') },
        { path: 'register', name: 'register', component: () => import('@/views/Auth/Register') },
        { path: 'forgot-password', name: 'forgot-password', component: () => import('@/views/Auth/ForgotPassword') },
        { path: 'reset-password', name: 'reset-password', component: () => import('@/views/Auth/ResetPassword') },
      ]
    },
    {
      path: '/admin',
      name: 'admin-layout',
      component: () => import('@/layouts/Admin'),
      meta: {
        requiresAuth: true
      },
      children: [
        { path: 'dashboard', name: 'dashboard', component: () => import('@/views/Admin/Dashboard') }
      ]
    }
  ]
});

router.beforeEach((to, from, next) => {
  const currentUser = localStorage.getItem('freydatoken');
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth);
  if (currentUser) {
    const user = jwt(currentUser, process.env.SECRET_KEY);
    store.commit('setAuthSuccess', user);
  }
  if (requiresAuth && !currentUser) {
    next('/login');
  } else if (requiresAuth && currentUser) {
    next();
  } else {
    next();
  }
});
