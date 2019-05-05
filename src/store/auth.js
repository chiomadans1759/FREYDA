import http from '../utils/http';

export default {
  state: {
    isFetching: false,
    token: '',
    user: {},
    error: {},
  },
  mutations: {
    startAuthRequest(state) {
      state.isFetching = true;
    },

    setAuthSuccess(state, user, token) {
      state.user = user;
      state.token = token
      state.user = user
    },

    setAuthFailure(state, error) {
      state.error = error;
    },

    endAuthRequest(state) {
      state.isFetching = false; // eslint-disable-line
    },
  },
  actions: {
    async register({ state, commit }, user) {
      const data = user
      commit('startAuthRequest');
      try {
        const response = await http.post('/users/register', data);
        const token = response.data.token
        const user = response.data.user
        localStorage.setItem('token', token)
        http.defaults.headers.common['Authorization'] = token
        commit('setAuthSuccess', user, token)
        commit('endAuthRequest');
      } catch (error) {
        commit('setAuthFailure', error.response.data.error);
        commit('endAuthRequest');
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
    getErrors: (state) => {
      if (state.error === {}) {
        return {};
      }
      return state.error;
    }
  },
};
