import Vue from "vue";
import App from "./App.vue";
import VueRouter from "vue-router";
import Vuex from "vuex";

import Home from "./components/Default";
import MyCards from "./components/MyCards";
import Card from "./components/Card";
import Reg from "./components/Reg.vue";
import Auth from "./components/Auth.vue";

import CreateCard from "./components/CreateCard.vue";
import ChangeCard from "./components/ChangeCard.vue";
import SeeCard from "./components/SeeCard.vue";
import LoadingCard from "./components/LoadingCard.vue";

Vue.use(VueRouter);
Vue.use(Vuex);

const routes = [
  {
    name: "home",
    path: "/",
    component: Home,
    meta: { requiresAuth: false }
  },
  {
    name: "mycards",
    path: "/mycards",
    component: MyCards,
    meta: { requiresAuth: false }
  },
  {
    name: "card",
    path: "/card",
    component: Card,
    meta: { requiresAuth: false }
  },
  {
    name: "registration",
    path: "/registration",
    component: Reg,
    meta: { requiresAuth: true }
  },
  {
    name: "authorization",
    path: "/authorization",
    component: Auth,
    meta: { requiresAuth: true }
  },
  {
    name: "createcard",
    path: "/createcard",
    component: CreateCard,
    meta: { requiresAuth: false }
  },
  {
    name: "changecard",
    path: "/changecard/:id",
    component: ChangeCard,
    meta: { requiresAuth: false }
  },
  {
    name: "seecard",
    path: "/seecard/:id",
    component: SeeCard,
    meta: { requiresAuth: false }
  },
  {
    path: "*",
    component: Auth,
    name: "404"
  }
];
const store = new Vuex.Store({
  state: {
    isAuth: true
  }
});

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

router.beforeEach((to, from, next) => {
  if (
    to.name !== "authorization" &&
    to.name !== "registration" &&
    to.name != "home"
  ) {
    if (!store.state.isAuth) {
      next({
        name: "authorization"
      });
      return;
    }
  } else next();
  if (to.name == "authorization" || to.name == "registration") {
    if (store.state.isAuth) {
      next({
        name: "home"
      });
      return;
    }
  } else next();
  next();
});

new Vue({
  router,
  store,
  el: "#app",
  render: h => h(App)
});
