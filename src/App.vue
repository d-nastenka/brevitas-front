<template>
  <div id="app">
    <!-- <router-link to="/">Home</router-link> 
    <router-link to="/card">Card</router-link> -->

    <!-- <component :is="layout">
          <router-view/>
    </component> -->

    <!-- <input v-model="msg">
    <div v-text="msg">  </div> -->
    
    <!-- <div >
      <div v-if="status"> 
        Условие да
      </div>
      <div v-else>
        Условие нет
      </div>
    </div>
    <button @click="changeStatus"> Сменить условие </button> -->

    <div v-for="(user, key) in users" :key="key">
      <div>
        {{ user.name }} 
        {{ user.age }}
      </div>
      <button @click="deleteUser(key)">Delete </button>
    </div>

    <input v-model="tempUser" >
    <button @click="addUser">Add</button>

  </div>

</template>

<script>

export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      status: true,
      users: [{
        name: 'John',
        age: 20,
      }, {
        name: 'Ben',
        age: 21
      }, {
        name:'Ann',
        age: 20
      }],
      tempUser: ''
    }
  },
  methods: {
    changeStatus() {
      this.status = !this.status

    },
    addUser() {
      this.users.push(this.tempUser);
      this.tempUser = ''
    },
    deleteUser(i) {
        this.users.splice(i, 1)
    }
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
