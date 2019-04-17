import Vue from 'vue'
import Router from 'vue-router'
import Register from './views/Register.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'register-page',
      component: Register
    },
    {
      path: '/admin',
      name: 'admin',
      component: () => import('@/layouts/AdminLayout.vue'),
      
      children:[
        {
          path:'',
          component: () => import('@/views/Admin.vue')
        },
        {
          path:'private-equity',
          name: 'private-equity',
          component: () => import('./views/Privateequity.vue'),
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
