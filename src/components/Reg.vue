<template>
    <div>
        <h3>Регистрация</h3>

        <form @submit.prevent="submitForm">
        <div>
            <input v-model="form.name" placeholder="Имя">
        </div>
        <div>
            <input v-model="form.surname" placeholder="Фамилия">
        </div>
        <div>
            <input v-model="form.email" placeholder="Email">
        </div>
        <div>
            <input v-model="form.login" placeholder="Логин">
        </div>
        <div>
            <input v-model="form.password" placeholder="Пароль">
        </div>
        <button type="submit"> Зарегистрироваться</button>

        </form> 
    </div>
    

</template>

<script>

export default {
    name: 'Reg',
    data () {
        return {
            form: {
                name: '',
                surname: '',
                email: '',
                login: '',
                password: ''
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
                    email: '',
                    login: '',
                    password: ''
                }
        }
    }
}
</script>


<style>

</style>
