export default {
  namespaced: true,
  state: {
    isAuth: ""
  },
  mutations: {
    ChangeAuth(state, payload) {
      state.isAuth = payload;
    }
  }
};
