export default {
  namespaced: true,
  state: {
    isAuth: ""
  },
  mutations: {
    changeAuth(state, payload) {
      state.isAuth = payload;
    }
  }
};
