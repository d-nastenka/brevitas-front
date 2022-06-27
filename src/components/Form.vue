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
      <button type="submit"> Create user</button>

    </form>  
</template>

<script>
export default {
    name: 'Form',
    data () {
        return {
            form: {
                name: '',
                surname: '',
                age: 0
            }
            
        }
    },
    methods: {
    
        submitForm () {
            console.log(this.form)
            this.$emit("addUser", this.form)

            this.form = {
                    name: '',
                    surname: '',
                    age: 0
                }
        }
    }
}
</script>

<style>

</style>
