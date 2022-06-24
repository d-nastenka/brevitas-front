<template>
  <div id="app">
    
    <Form  @addUser="addUser"/>
    <Users :users="users" @deleteUser=deleteUser />

  </div>

</template>

<script>

import Form from './components/Form.vue'
import Users from './components/Users.vue'

export default {
  name: 'app',
  components: {
    Form,
    Users
  },
  data () {
    return {
      users: [{
        name: 'John',
        surname: 'ffff',
        age: 20,
      }, {
        name: 'Ben',
        surname: 'nnnn',
        age: 21
      }, {
        name:'Ann',
        surname: 'jdjd',
        age: 20
      }],
      tempUser: '',
      form: {
        name: '',
        surname: '',
        age: 0

      }
    }

  },
  methods: {
    changeStatus() {
      this.status = !this.status

    },
    addUser(user) {
      this.users.push(user);
    },

    deleteUser(i) {
      this.users.splice(i, 1)
    },
    // submitForm () {
    //   console.log(this.form)
    // }
  }
  // computed: {
  //           layout(){
  //               return this.$route.meta.layout || "default-layout" 
  //           }
  //       }
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
