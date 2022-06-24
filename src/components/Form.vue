<template>
   <form @submit.prevent="submitForm">
      <div>
        <input v-model="form.name">
      </div>
      <div>
        <input v-model="form.surname">
      </div>
      <div>
        <input v-model="form.age">
      </div>
      <div v-for="(i, key) in form" :key="key">
        
        {{ form.name }} 
        {{ form.surname }}
        {{ form.age }}
      </div>
      <button type="submit"> Create user</button>

    </form>  
</template>

<script>
export default {
    name: 'Form',
    data () {
        return {
            form: [{
                name: '',
                surname: '',
                age: 0
            }]
            
        }
    },
    methods: {
    
    submitForm () {
      console.log(this.form)
    }
  }
}
</script>

<style scoped>

</style>
