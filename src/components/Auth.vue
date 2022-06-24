<template>
    <div>
        <h3>Авторизация</h3>

         <form @submit.prevent="submitForm">
        <div>
            <input v-model="form.login" placeholder="Логин">
        </div>
        <div>
            <input v-model="form.password" placeholder="Пароль">
        </div>
        
        <button type="submit"> Войти </button>

        </form> 
    </div>
</template>

<script>

export default {
    name: "Auth",
    data () {
        return {
            form: {
                login: '',
                password: ''
            }
            
        }
    },
    methods: {
    
        submitForm () {
            console.log(this.form)
            //this.$emit("addUser", this.form)

            this.form = {
                    login: '',
                    password: ''
                }
        }
    }
}
</script>