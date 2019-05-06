import http from '../utils/http';
import { router } from '../router';

export default {
  state: {
    isFetching: false,
    user: {},
  },
  mutations: {
    startAuthRequest(state) {
      state.isFetching = true;
    },

    setAuthSuccess(state, user) {
      state.user = user;
    },

    endAuthRequest(state) {
      state.isFetching = false;
    },
  },
  actions: {
    async register({ state, commit }, user) {
      const data = user
      commit('startAuthRequest');
      try {
        const response = await http.post('/users/register', data);
        const token = response.data.data.accessToken;
        const user = response.data.data.user;
        localStorage.setItem('freydatoken', token);
        http.defaults.headers.common['Authorization'] = token;
        commit('setAuthSuccess', user);
        router.push('/admin')
        commit('endAuthRequest');
      } catch (error) {
        commit('endAuthRequest');
        throw new Error(error.response.data.error.message);
      }
    }
  },
  getters: {
    getUser: (state) => {
      if (state.user === {}) {
        return {};
      }
      return state.user;
    },
  },
};
