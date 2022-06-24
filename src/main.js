import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'

import Default from "./components/Default"
import Card from "./components/Card"


Vue.use(VueRouter)


const routes = [
  { path: '/', component: Default },
  { path: '/card', component: Card },
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

