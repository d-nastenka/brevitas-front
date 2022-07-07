import Vue from "vue";
import App from "./App.vue";
import router from "./router";

import store from "./vuex";
// import Vuex from "vuex";

//TODO Вынести объекты роутов, vuex на модули

new Vue({
  router,
  store,
  el: "#app",
  render: h => h(App)
});
