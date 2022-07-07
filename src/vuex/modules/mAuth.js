export default {
  state: {
    isAuth: ""
  },
  mutations: {
    ChangeAuth(state, payload) {
      state.isAuth = payload;
    }
  }
};
