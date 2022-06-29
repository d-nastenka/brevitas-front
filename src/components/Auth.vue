<template>
    <div class="auth-flex">
        <div class="form-auth">
            <div class="auth-title">
                <h3>Авторизация</h3>
            </div>

            <form @submit.prevent="sendAuth">
                <div v-for="(i, key) in formAuth" :key="key">
                    <div class="auth-input">
                        <input v-model="dataAuthToSend[i.value]" required :placeholder="i.textPlaceholder">
                    </div>
                </div>
            <button type="submit" class="btn-auth"> Войти </button>
            <div>
                <p>
                    <router-link class="pages_ell" to="/registration">Зарегистрироваться</router-link> 
                    
                </p>
                
            </div>
            <router-view/>
            </form> 
        </div>
    </div>
</template>

<script>


import Reg from "./Reg.vue"

export default {
    name: "Auth",
    components: {
      Reg
    },
    data () {
        return {
            dataAuthToSend: {
                login: "",
                password: "",
            },
            formAuth: [
                {
                    textPlaceholder: 'Логин',
                    value: 'login',
                    data: ''
                },
                {
                    textPlaceholder: 'Пароль',
                    value: 'password',
                    data: ''
                },
            ]
        }
    },
    methods: {
        sendAuth() {
            console.log(this.dataAuthToSend);
        }
    }
}
</script>

<style>
.auth-flex {
    display: flex;
    justify-content: center;

    margin-top: 20px;
}

.form-auth {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    

    width: 300px;
    padding: 32px;
    border-radius: 10px;
    box-shadow: 0 4px 16px #ccc;
}

.auth-title {
    text-align: center;
    margin: 0 0 17px 0;
    font-weight: normal;
}

.auth-input {
    width: 100%;
    padding: 0 0 12px 0;
    border: none;     
}

.btn-auth { 
    background-color: rgba(63, 63, 63, 0.897);
    color: white;
    font-size: 14px;
    padding: 10px 20px;
    border: none;
    cursor: pointer;
    border-radius: 7px;
    text-align: center;
}

.btn-auth:hover {
    background-color: white;
    color: rgb(76, 76, 76);
}
</style>