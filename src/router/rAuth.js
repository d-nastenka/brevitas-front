import Reg from "../components/Reg.vue";
import Auth from "../components/Auth.vue";
import ErrorPage from "../components/ErrorPage"

export default [
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
    path: "*",
    component: ErrorPage,
    name: "404"
  }
];
