import http from '../utils/http';

export default {
  state: {
    isFetching: false,
    coverages: []
  },
  mutations: {
    startRequest(state) {
      state.isFetching = true;
    },

    setUserCoverage(state, coverages) {
      state.coverages = coverages;
    },

    endRequest(state) {
      state.isFetching = false;
    }
  },
  actions: {
    async getUserCoverages({ state, commit }) {
      commit("startRequest");
      try {
        const response = await http.get("/coverages/user-coverages");
        commit("setUserCoverage", response.data.data);
        commit("endRequest");
      } catch (error) {
        commit("endAuthRequest");
        throw new Error(error.response.data.error.message);
      }
    }
  },
  getters: {
    getUserCoverages: state => {
      if (state.coverages === []) {
        return [];
      }
      return state.coverages;
    }
  }
};
