import CreateCard from "../components/CreateCard.vue";
import ChangeCard from "../components/ChangeCard.vue";
import SeeCard from "../components/SeeCard.vue";


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
