<template>
    <div class="reg-flex">
        <div class="form-reg">
            <div class="reg-title">
                <h3>Регистрация</h3>
            </div>

            <form @submit.prevent="submitForm">
                <div class="form-input">
                    <div class="reg-input">
                        <input v-model="form.name" placeholder="Имя">
                    </div>
                    <div class="reg-input">
                        <input v-model="form.surname" placeholder="Фамилия">
                    </div>
                    <div class="reg-input">
                        <input v-model="form.email" placeholder="Email">
                    </div>
                    <div class="reg-input">
                        <input v-model="form.login" placeholder="Логин">
                    </div>
                    <div class="reg-input">
                        <input v-model="form.password" placeholder="Пароль">
                    </div>
                    <button type="submit" class="btn-reg"> Зарегистрироваться</button>
                </div>
            </form> 
        </div>
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

.reg-flex {
    display: flex;
    justify-content: center;

    margin-top: 20px;
}

.form-reg {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    

    width: 300px;
    padding: 32px;
    border-radius: 10px;
    box-shadow: 0 4px 16px #ccc;
}

.reg-title {
    text-align: center;
    margin: 0 0 20px 0;
    font-weight: normal;
}



.reg-input {
    width: 100%;
    padding: 0 0 10px 0;
    border: none;    
}

.btn-reg { 
    background-color: rgba(63, 63, 63, 0.897);
    color: white;
    font-size: 14px;
    padding: 10px 20px;
    border: none;
    cursor: pointer;
    border-radius: 7px;
    text-align: center;
}

.btn-reg:hover {
    background-color: white;
    color: rgb(76, 76, 76);
}

</style>
