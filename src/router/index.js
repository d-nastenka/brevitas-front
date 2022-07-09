import Vue from "vue";
import VueRouter from "vue-router";

import rAuth from "./rAuth";
import rCard from "./rCard";

import Home from "../components/Default";
import MyCards from "../components/MyCards";
import About from "../components/About";


import store from "../vuex";

Vue.use(VueRouter);

const routes = [
  ...rAuth,
  ...rCard,

  {
    name: "about",
    path: "/about",
    component: About,
    meta: { requiresAuth: true }
  },
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
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

router.beforeEach(async (to, from, next) => {
  const res = await fetch("http://localhost:3000/auth/check", {
    method: "GET",
    headers: {
      "Content-Type": "application/json"
    },
    credentials: "include"
  });

  if (res.ok) {
    store.commit("mAuth/changeAuth", true);
  } else {
    store.commit("mAuth/changeAuth", false);
  }

  if (
    to.name !== "authorization" &&
    to.name !== "registration" &&
    to.name !== "home"
  ) {
    if (!store.state.mAuth.isAuth) {
      next({
        name: "authorization"
      });
      return;
    }
  } else next();
  if (to.name == "authorization" || to.name == "registration") {
    if (store.state.mAuth.isAuth) {
      next({
        name: "home"
      });
      return;
    }
  } else next();
  next();
});

export default router;
