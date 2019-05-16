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
      component: () => import('@/layouts/Auth'),
      children: [
        { path: '', name: 'register', component: () => import('@/views/Auth/Register') },
        { path: 'login', name: 'login', component: () => import('@/views/Auth/Login') },
        { path: 'forgot-password', name: 'forgot-password', component: () => import('@/views/Auth/ForgotPassword') },
        { path: 'reset-password', name: 'reset-password', component: () => import('@/views/Auth/ResetPassword') },
      ]
    },
    {
      path: '/:username',
      component: () => import('@/layouts/Admin'),
      meta: {
        requiresAuth: true
      },
      children: [
        { path: 'dashboard', name: 'dashboard', component: () => import('@/views/Admin/Dashboard') },
        { path: 'new-coverage', name: 'new-coverage', component: () => import('@/views/Admin/NewCoverage') },
        { path: 'new-watchlist', name: 'new-watchlist', component: () => import('@/views/Admin/NewWatchlist') }
      ]
    },
    { 
      path: '*', 
      component:() => import('@/views/Auth/Login')
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
    next('/');
  } else if (requiresAuth && currentUser) {
    next();
  } else {
    next();
  }
});
