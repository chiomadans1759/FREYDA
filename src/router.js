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
      name: 'register-page',
      component: () => import('@/views/Register/Register.vue')
    },
    {
      path: '/login',
      name: 'Login-page',
      component: () => import('@/views/Login/Login.vue')
    },
    {
      path: '/admin',
      component: () => import('@/layouts/AdminLayout.vue'),
      meta: {
        requiresAuth: true
      },

      children: [
        {
          path: '',
          component: () => import('@/views/Admin.vue')
        },
        {
          path: 'private-equity',
          name: 'private-equity',
          component: () => import('@/views/PrivateEquity.vue'),
        },
        {
          path: 'pantheon',
          name: 'pantheon',
          component: () => import('./views/Pantheon.vue'),
        },
      ]
    },
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
