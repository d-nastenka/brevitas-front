<template>
  <div id="app">
    <Header />
    <router-view />
    <Footer />
  </div>
</template>

<script>
import Header from "./components/AppHeader.vue";
import Footer from "./components/AppFooter.vue";

import Home from "./components/Default.vue";
import MyCards from "./components/MyCards.vue";
import Card from "./components/Card.vue";
import CreateCard from "./components/CreateCard.vue";
import Reg from "./components/Reg.vue";
import Auth from "./components/Auth.vue";
import ChangeCard from "./components/ChangeCard.vue";
import SeeCard from "./components/SeeCard.vue";

import LoadingCard from "./components/LoadingCard.vue";

export default {
  name: "app",
  components: {
    Header,
    Home,
    Footer,
    MyCards,
    Card,
    Reg,
    Auth,
    CreateCard,
    ChangeCard,
    SeeCard,
    LoadingCard
  },
  // props: {
  //   isAuth: Boolean
  // },
  data() {
    return {
      users: {
        name: "",
        surname: "",
        email: "",
        login: "",
        password: ""
      },
      // isAuth: false
    };
  },
  methods: {
    // addUser(user) {
    //   this.users.push(user);
    //   console.log(users);
    // }
  },
  computed: {}
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

h1,
h2 {
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

.pages {
  display: flex;
  flex-direction: column;
  justify-content: flex-end;

  margin-block: 5px;
  margin-left: 20px;
}

.pages_ell {
  margin-left: 25px;
}

html,
body {
  box-sizing: border-box;
  margin: 0px;
  padding: 0px;
}

/*кнопки валидные*/
.btn-card {
  background-color: #3d6c71;
  color: white;
  font-size: 14px;
  padding: 10px 20px;
  border: none;
  cursor: pointer;
  border-radius: 7px;
  text-align: center;

  margin-top: 10px;
}
.btn-card_NO:hover {
  background-color: #3d6c71;

  color: white;
  border-radius: 7px;
  
}

.btn-card_text{
position: relative;
height: 80px;
}

.btn-card_NO {
  background-color: #bae5e9;
  color: rgb(76, 76, 76);
  font-size: 14px;
  padding: 10px 20px;
  border: none;
  cursor: pointer;
  border-radius: 12px;
  text-align: center;
  overflow: hidden;
  transition: all 0.5s ease-in-out;
  /*opacity: 0.6;
  cursor: not-allowed;*/

  font-family: Arial, Helvetica, sans-serif;
  text-decoration: none;
  position: relative;
  display: inline-block;
}

.btn-card_NO::before{
  content: '';
  position: absolute;
  width: 150px;
  height: 40px;
  border: 0;
  background-color: #74a3a3;
  top: -10;
  left:70%;
  z-index: 1;

  transition: all 0.5s ease-in-out;
}

.btn-card_NO:hover:before{
left:0%;
}
</style>
