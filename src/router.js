import Vue from 'vue'
import Router from 'vue-router'

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
      component: () => import('@/views/Login.vue')
    },
    {
      path: '/admin',
      component: () => import('@/layouts/AdminLayout.vue'),

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

    {
      path: '*',
      redirect: '/'
    }

  ]
});

router.beforeEach((to, from, next) => {
  // redirect to index page if not logged in and trying to access a protected route
  const publicPages = ['/', '/login'];
  const authRequired = !publicPages.includes(to.path);
  const loggedIn = localStorage.getItem('freydatoken');

  if (authRequired && !loggedIn) {
    return next('/login');
  }

  next();
});
