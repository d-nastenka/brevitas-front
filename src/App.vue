<template>
  <div id="app">
    <Header />
    <router-view/>
    <Footer />

  </div>
</template>

<script>


import Header from './components/AppHeader.vue'
import Footer from './components/AppFooter.vue'

import Home from "./components/Default.vue"
import Card from "./components/Card.vue"
import CreateCard from "./components/CreateCard.vue"
import Reg from "./components/Reg.vue"
import Auth from "./components/Auth.vue"
import ChangeCard from "./components/ChangeCard.vue"
import SeeCard from "./components/SeeCard.vue"


export default {
  name: 'app',
  components: {
      Header,
      Footer,
      Home,
      Card,
      Reg,
      Auth,
      CreateCard,
      ChangeCard,
      SeeCard
  },
  data () {
    return {
      users: {
          name: '',
          surname: '',
          email: '',
          login: '',
          password: ''
      }
      
    }

  },
  methods: {
      addUser(user) {
          this.users.push(user);
          console.log(users)
      },
  },
  computed: {

  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;

}



h1, h2 {
  font-weight: bold;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #484a49;
}

.pages {
  display: flex;
  flex-direction: column;
  justify-content: flex-end;

  margin-block: 5px;
  margin-left: 20px;
}

.pages_ell{
  margin-left: 25px;
}



html, body {
  box-sizing: border-box;
  margin: 0px;
  padding: 0px;
}

</style>
