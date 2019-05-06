import Vue from 'vue'
import Vuelidate from 'vuelidate'
import VueSweetalert2 from 'vue-sweetalert2'
import App from './App.vue'
import { router } from './router'
import store from './store'
import axios from 'axios'

Vue.use(Vuelidate);
Vue.use(VueSweetalert2);

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
