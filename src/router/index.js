import Vue from "vue";
import VueRouter from "vue-router";

import Home from "../components/Default";
import MyCards from "../components/MyCards";
import Card from "../components/Card";
import Reg from "../components/Reg.vue";
import Auth from "../components/Auth.vue";
import CreateCard from "../components/CreateCard.vue";
import ChangeCard from "../components/ChangeCard.vue";
import SeeCard from "../components/SeeCard.vue";

import store from "../vuex";

Vue.use(VueRouter);

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
    store.commit("ChangeAuth", true);
  } else {
    store.commit("ChangeAuth", false);
  }

  if (
    to.name !== "authorization" &&
    to.name !== "registration" &&
    to.name !== "home"
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

export default router;
