<template>
  <div id="app">
    
    <!-- <Form  @addUser="addUser"/>
    <Users :users="users" @deleteUser=deleteUser /> -->
    <p>
        <router-link to="/">Home</router-link> 
        <router-link to="/card">New Card</router-link>
    </p>

    <router-view/>

    <component :is="layout">
          <router-view/>
    </component>

  </div>

</template>

<script>

// import Form from './components/Form.vue'
// import Users from './components/Users.vue'
import Default from "./components/Default.vue"
import Card from "./components/Card.vue"


export default {
  name: 'app',
  components: {
      // Form,
      // Users,
      Default,
      Card
  },
  data () {
    return {
      // users: [{
      //   name: 'John',
      //   surname: 'ffff',
      //   age: 20,
      // }, {
      //   name: 'Ben',
      //   surname: 'nnnn',
      //   age: 21
      // }, {
      //   name:'Ann',
      //   surname: 'jdjd',
      //   age: 20
      // }],
      // tempUser: '',
      // form: {
      //   name: '',
      //   surname: '',
      //   age: 0

      // }
    }

  },
  methods: {
    // changeStatus() {
    //   this.status = !this.status

    // },
    // addUser(user) {
    //   this.users.push(user);
    // },

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
  margin-top: 55px;
}

h1, h2 {
  font-weight: normal;
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
  color: #42b983;
}
</style>
