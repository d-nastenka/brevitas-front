<template>
  <div id="app">
    <!-- <Header /> -->
    <router-view />
    <!-- <Footer /> -->
  </div>
</template>

<script>
import Header from "./components/AppHeader.vue";
import Footer from "./components/AppFooter.vue";

// import Home from "./components/Default.vue";
// import MyCards from "./components/MyCards.vue";
// import Card from "./components/Card.vue";
// import CreateCard from "./components/CreateCard.vue";
// import Reg from "./components/Reg.vue";
// import Auth from "./components/Auth.vue";
// import ChangeCard from "./components/ChangeCard.vue";
// import SeeCard from "./components/SeeCard.vue";

// import LoadingCard from "./components/LoadingCard.vue";

export default {
  name: "app",
  components: {
    Header,
    Footer
    // Home,
    // MyCards,
    // Card,
    // Reg,
    // Auth,
    // CreateCard,
    // ChangeCard,
    // SeeCard,
    // LoadingCard
  },
  data() {
    return {};
  },
  methods: {},
  computed: {}
};
</script>

<style>
/*шрифты*/
@import url('https://fonts.googleapis.com/css2?family=Tenor+Sans&display=swap'); 
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@500&family=Tenor+Sans&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@500&family=Roboto&family=Tenor+Sans&display=swap');

#app {
  /*font-family: "Avenir", Helvetica, Arial, sans-serif;*/
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;

  background: #f5f5f5;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

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
  height: auto;
}

.btn {
  font-family: 'Roboto';
  background-color: #096b73;
  color: white;
  font-size: 25px;
  padding: 10px 20px;
  border: none;
  cursor: pointer;
  border-radius: 30px;
  text-align: center;
  transition: all 0.5s;
  width: 84.812px;
  height: 46px;
}

.btn:hover {
  background-color: rgb(186, 220, 222);
  color: rgb(76, 76, 76);
}

.btn_NO {
  font-family: 'Roboto';
  background-color: #84abae;
  color: white;
  font-size: 25px;
  padding: 10px 20px;
  border: none;
  cursor: not-allowed;
  border-radius: 30px;
  text-align: center;
  transition: all 0.5s;
  width: 84.812px;
  height: 46px;
}

/*кнопки валидные*/
 .btn-card {
  width: 150px;
  height: 35px;
  padding: 10px 20px;

  background-color: #ffffff;
  font-size: 34px;
  border-radius: 166px;
  position: relative;
  border: solid;
  border-color: #096B73;
  cursor: pointer;
  text-align: center;
  overflow: hidden;
  transition: all 0.5s ease-in-out;
   color: #016670;
}

.btn-card_NO {
  width: 159px;
  height: 40px;
  padding: 10px 20px;

  background-color: #ffffff;
  font-size: 34px;
  border-radius: 166px;
  position: relative;
  border: solid;
  border-color: #096B73;
  cursor: pointer;
  text-align: center;
  overflow: hidden;
  transition: all 0.5s ease-in-out;
}

.btn-card:hover {
  color: #f5f5f5;
}

.btn-card_text {
  position: relative;
  height: 25px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-top: 8px;
  z-index: 1;
  margin-left: 15px;
 
}

.btn-card::before {
  content: "";
  position: absolute;
  width: 250px;
  height: 200px;
  background-color: #096B73;
  margin-top: -40px;
  left: 80%;
  z-index: 0;
  transition: all 0.5s ease-in-out;
  transform: rotateZ(28deg);
}

.btn-card:hover:before {
  left: -7%; 
} 
/*окна авторизации и регистрации*/
.back-cont {
  background: linear-gradient(
    180deg,
    #016670 0%,
    rgba(217, 217, 217, 0.59) 100%
  );
  width: 100%;
  height: 100vh;
}
.logo-title {
  font-family: "Tenor Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 50px;
  line-height: 75px;
  height: 170px;
  /* identical to box height */

  display: flex;
  align-items: center;
  text-align: center;
  letter-spacing: 0.232836px;

  color: #ffffff;

  cursor: pointer;
}
.auth-flex {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background: linear-gradient(
    180deg,
    #016670 0%,
    rgba(217, 217, 217, 0.59) 100%
  );
  width: 100%;
  height: 100%;
}
.form-auth {
  display: flex;
  flex-direction: column;
  width: 588px;
  height: 580px;
  box-sizing: border-box;
  background: rgba(255, 255, 255, 0.1);
  box-shadow: 4px 4px 15px rgba(1, 102, 112, 0.31);
  backdrop-filter: blur(15px);
  border-radius: 20px;
  align-items: center;
  flex-wrap: nowrap;
  justify-content: space-evenly;
  border: 1px solid  #ffffff50;
  
}
.auth-title {
  font-family: "Tenor Sans";
  font-style: normal;
  font-size: 27px;

  display: flex;
  align-items: center;
  text-align: center;
  justify-content: center;

  letter-spacing: 0.232836px;

  color: #e4e7e7;
}

.input-auth {
  padding: 7px 19px;
  margin-bottom: 2px;
  border: 0px;
  width: 400px;
  border-bottom: 1px solid #ffffff;
  background-color: rgba(0, 0, 0, 0);
  outline: none;
}

.input-auth:focus {
  background-color: rgba(255, 255, 255, 0.347);
}

.form-flexx {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: 80%;
  flex-wrap: nowrap;
  align-content: stretch;
  margin-top: 30px;
}
</style>
