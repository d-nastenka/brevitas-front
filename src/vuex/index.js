import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    isAuth: ""
  },
  mutations: {
    ChangeAuth(state, payload) {
      state.isAuth = payload;
    }
  }
});

export default store;
