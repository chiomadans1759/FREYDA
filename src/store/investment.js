import http from '../utils/http';

export default {
  state: {
    isFetching: false,
    investments: [],
    coverages: []
  },
  mutations: {
    startRequest(state) {
      state.isFetching = true;
    },

    setUserInvestments(state, investments) {
      state.investments = investments;
    },

    setUserCoverage(state, coverages) {
      state.coverages = coverages;
    },

    endRequest(state) {
      state.isFetching = false;
    }
  },
  actions: {
    async getInvestments({ state, commit }) {
      commit("startRequest");
      try {
        const response = await http.get("/investments/user-investments");
        const token = localStorage.getItem("freydatoken");
        const investments = response.data.data;
        http.defaults.headers.common["Authorization"] = token;
        commit("setUserInvestments", investments);
        commit("endRequest");
      } catch (error) {
        commit("endAuthRequest");
        throw new Error(error.response.data.error.message);
      }
    },
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
    getInvestments: state => {
      if (state.investments === []) {
        return [];
      }
      return state.investments;
    },
    getUserCoverages: state => {
      if (state.coverages === []) {
        return [];
      }
      return state.coverages;
    }
  }
};