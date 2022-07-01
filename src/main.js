import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'


import Home from "./components/Default"
import Card from "./components/Card"
import Reg from "./components/Reg.vue"
import Auth from "./components/Auth.vue"

import CreateCard from "./components/CreateCard.vue"
import ChangeCard from "./components/ChangeCard.vue"
import SeeCard from "./components/SeeCard.vue"


Vue.use(VueRouter)


const routes = [
  { path: '/', component: Home },
  { path: '/card', component: Card },
  { path: '/registration', component: Reg },
  { path: '/authorization', component: Auth },
  { path: '/createcard', component: CreateCard },
  { path: '/changecard/:id', component: ChangeCard },
  { path: '/seecard/:id', component: SeeCard },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})



new Vue({
  router,
  el: '#app',
  render: h => h(App)
})



