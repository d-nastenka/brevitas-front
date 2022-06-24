<template>
  <div id="app">
    <!-- <router-link to="/">Home</router-link> 
    <router-link to="/card">Card</router-link> -->

    <!-- <component :is="layout">
          <router-view/>
    </component> -->

    <!-- <input v-model="msg">
    <div v-text="msg">  </div> -->
    
    <div >
      <div v-if="status"> 
        Условие да
      </div>
      <div v-else>
        Условие нет
      </div>
    </div>
    <button @click="changeStatus"> Сменить условие </button>
  </div>

</template>

<script>

export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      status: true,
      users: ['Jonh', 'Ben', 'Ann']
    }
  },
  methods: {
    changeStatus() {
      this.status = !this.status

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
