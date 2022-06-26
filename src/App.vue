<template>
  <div id="app">
    
    <!-- <Form  @addUser="addUser"/>
    <Users :users="users" @deleteUser=deleteUser /> -->
    <!-- <Reg @addUser="addUser"/> -->
 <header class="head">
   <!--<div class="header"> -->
      <div class="head-title">
        <h1>Brevitas</h1>
      </div>

      <div class="pages">
        <p>
            <router-link class="pages_ell" to="/">Home</router-link> 
            <router-link class="pages_ell" to="/card">New Card</router-link>
            <router-link class="pages_ell" to="/registration">Registration</router-link> 
            <router-link class="pages_ell" to="/authorization">Authorization</router-link>
        </p>
      </div>
    <!--</div> -->
</header>
    <router-view/>

    <!-- <component :is="layout">
          <router-view/>
    </component> -->

  </div>

</template>

<script>

// import Form from './components/Form.vue'
// import Users from './components/Users.vue'
import Home from "./components/Default.vue"
import Card from "./components/Card.vue"
import Reg from "./components/Reg.vue"
import Auth from "./components/Auth.vue"


export default {
  name: 'app',
  components: {
      // Form,
      // Users,
      Home,
      Card,
      Reg,
      Auth
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
    // changeStatus() {
    //   this.status = !this.status

    // },
      addUser(user) {
          this.users.push(user);
          console.log(users)
      },

    // deleteUser(i) {
    //   this.users.splice(i, 1)
    // },
    // submitForm () {
    //   console.log(this.form)
    // }
  },
  computed: {
      // layout(){
      //     return this.$route.meta.layout || "default-layout" 
      // }
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
  margin-top: 30px;
  /*background-color: #a8d0e6; */
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

.head {
    width: 102%;
    height: 200px;
    display: flex;
    justify-content: center;
    align-items: center; 
    margin-top: -30px; 
    margin-left: -5px;
    

    background-color: #9FEDD7;
    /*background-image: url(.jpg);*/
    background-size: cover;
}

.head-title {
  margin-right: 330px;
  margin-left: 30px;
  
  font-size: 30px;/*шрифт*/ 
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

</style>
