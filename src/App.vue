<template>
  <div id="app">
    
    <!-- <Form  @addUser="addUser"/>
    <Users :users="users" @deleteUser=deleteUser /> -->
    <!-- <Reg @addUser="addUser"/> -->
    <div class="header">
      <div class="head-title">
        <h1>Brevitas</h1>
      </div>

      <div class="pages">
        <p>
            <router-link to="/">Home</router-link> 
            <router-link to="/card">New Card</router-link>
            <router-link to="/registration">Registration</router-link> 
            <router-link to="/authorization">Authorization</router-link>
        </p>
      </div>
    </div>

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
  /* background-color: #a8d0e6; */
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

.header {
  /* background-color: #a8d0e6; */
  display: flex;
}

.head-title {
  margin-right: 30px;
  margin-left: 30px;
  
  font-size: 20px;
}

.pages {
  display: flex;
  flex-direction: column;
  justify-content: flex-end;

  margin-block: 10px;
  margin-left: 20px;
}

</style>
