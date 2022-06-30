<template>
    <div class="reg-flex">
        <div class="form-reg">
            <div class="reg-title">
                <h3>Регистрация</h3>
            </div>

            <form @submit.prevent="addUser">
                <div class="form-input">
                    <div v-for="(i, key) in formReg" :key="key">
                        <div :error-messages = "nameErrors" class="reg-input">
                            <input v-model="dataRegToSend[i.value]"  
                            :placeholder="i.textPlaceholder">
                        </div>
                          
                    </div>  
                    <p> <font color="red"> {{nameErrors}}</font></p>
                    <button  type="submit" class="btn-reg">Зарегистрироваться</button>
                </div>
            </form> 
        </div>
    </div>
    

</template>

<script>

import {validationMixin} from 'vuelidate';
import {required, minLength, email} from 'vuelidate/lib/validators'


export default {
    name: "Reg",
    mixins:[validationMixin, ],
    data () {
        return {
            dataRegToSend: {
                email: "",
                login: "",
                password: "",
            },
            formReg: [
                {
                    textPlaceholder: 'Почта',
                    value: 'email',
                    data: ''
                },
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
     validations:{
        dataRegToSend: {
            email: {required, email},
            login: {required},
            password: {required, minLength:minLength(11)}
        }
    },
    computed: {
        nameErrors(){
            const errors=[];
            var newmes ='';

            if((!this.$v.dataRegToSend.login.required)||(!this.$v.dataRegToSend.email.required)||(!this.$v.dataRegToSend.password.required)) {
                errors.push('заполните все поля ');
                newmes =newmes+ errors;
            }
            else {
            if(!this.$v.dataRegToSend.email.email){
                newmes = '';
                errors.push(' введите правильный email')
                newmes = newmes+errors;
            }
            if((this.$v.dataRegToSend.login.numeric)){
                newmes = '';
                errors.push('в имени должны быть только буквы!');
                newmes = newmes+errors;
            }
      
            }
            return newmes;
        }
    },

    methods: {
        addUser() {
            let promise =  fetch('http://localhost:3000/users', {
                method: "POST",
                body: JSON.stringify(this.dataRegToSend),
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                
            });
   
            this.$router.push("/")

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
    margin: 0 0 17px 0;
    font-weight: normal;
}


.reg-input {
    width: 100%;
    padding: 0 0 12px 0;
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

    margin-top: 10px;
}

.btn-reg:hover {
    background-color: white;
    color: rgb(76, 76, 76);
}

</style>
