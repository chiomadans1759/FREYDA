import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'register-page',
      component: () => import('@/views/Register.vue')
    },
    {
      path: '/admin',
      component: () => import('@/layouts/AdminLayout.vue'),
      
      children:[
        {
          path:'',
          component: () => import('@/views/Admin.vue')
        },
        {
          path:'private-equity',
          name: 'private-equity',
          component: () => import('./views/PrivateEquity.vue'),
        },
        {
          path:'pantheon',
          name: 'pantheon',
          component: () => import('./views/Pantheon.vue'),
        },
      ]
    },


  ]
})
