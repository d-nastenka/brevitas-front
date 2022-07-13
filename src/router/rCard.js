import CreateCard from "../pages/CreateCard.vue";
import ChangeCard from "../pages/ChangeCard.vue";
import SeeCard from "../pages/SeeCard.vue";


export default [
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
  }
];
