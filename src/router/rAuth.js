import Reg from "../pages/Reg.vue";
import Auth from "../pages/Auth.vue";

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
