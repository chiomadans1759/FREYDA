import Vue from 'vue'
import Vuex from 'vuex'
import auth from './auth'
import investments from './investment';

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    auth,
    investments
  }
});
