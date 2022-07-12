import Reg from "../components/Reg.vue";
import Auth from "../components/Auth.vue";

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
  
];
