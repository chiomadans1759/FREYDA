import Vue from 'vue'
import Router from 'vue-router'
import Admin from './views/Admin.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'admin',
      component: Admin,
      
      children:[
        {
          path:'',
          redirect:{name:'private-equity'},
        },
        {
          path:'private-equity',
          name: 'private-equity',
          component: () => import(/* webpackChunkName: "about" */ './views/Privateequity.vue'),
        },
        {
          path:'pantheon',
          name: 'pantheon',
          component: () => import(/* webpackChunkName: "about" */ './views/Pantheon.vue'),
        },
      ]
    },


  ]
})
