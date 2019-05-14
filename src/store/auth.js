import http from '../utils/http';

export default {
  state: {
    isFetching: false,
    isAuthenticated: false,
    user: {},
  },
  mutations: {
    startAuthRequest(state) {
      state.isFetching = true;
    },

    setAuthSuccess(state, user) {
      state.user = user;
      state.isAuthenticated = true;
    },

    endAuthRequest(state) {
      state.isFetching = false;
    },
  },
  actions: {
    async register({
      state,
      commit
    }, user) {
      const data = user;
      commit('startAuthRequest');
      try {
        const response = await http.post('/users/register', data);
        const token = response.data.data.accessToken;
        const user = response.data.data.user;
        localStorage.setItem('freydatoken', token);
        http.defaults.headers.common['Authorization'] = token;
        commit('setAuthSuccess', user);
        commit('endAuthRequest');
      } catch (error) {
        commit('endAuthRequest');
        throw new Error(error.response.data.error.message);
      }
    },
    async login({
      state,
      commit
    }, user) {
      const data = user;
      commit('startAuthRequest');
      try {
        const response = await http.post('users/login', data);
        console.log(response)
        const token = response.data.data.accessToken;
        const user = response.data.data.user;
        localStorage.setItem('freydatoken', token);
        http.defaults.headers.common['Authorization'] = token;
        commit('setAuthSuccess', user);
        commit('endAuthRequest');
      } catch (error) {
        commit('endAuthRequest');
        throw new Error(error.response.data.error.message);
      }
    }
  },
  getters: {
    isAuthenticated: state => state.isAuthenticated,
  },
};