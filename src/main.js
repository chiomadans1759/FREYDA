import Vue from 'vue'
import Vuelidate from 'vuelidate'
import store from './store'
import axios from 'axios'
import 'vue-toastr-2/dist/vue-toastr-2.min.css'
import VueToastr2 from 'vue-toastr-2'
window.toastr = require('toastr')

import App from './App.vue'
import {
  router
} from './router'

Vue.use(VueToastr2)
Vue.use(Vuelidate);

Vue.prototype.$http = axios;
const token = localStorage.getItem('freydatoken');
if (token) {
  Vue.prototype.$http.defaults.headers.common['Authorization'] = token
};

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
