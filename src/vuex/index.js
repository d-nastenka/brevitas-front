import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);

import mAuth from "./modules/mAuth";

const store = new Vuex.Store({
  state: {},
  mutations: {},
  modules: {
    mAuth
  }
});

export default store;
