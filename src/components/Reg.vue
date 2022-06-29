<template>
    <div class="reg-flex">
        <div class="form-reg">
            <div class="reg-title">
                <h3>Регистрация</h3>
            </div>

            <form @submit.prevent="addUser">
                <div class="form-input">
                    <div v-for="(i, key) in formReg" :key="key">
                        <div class="reg-input">
                            <input v-model="dataRegToSend[i.value]" required :placeholder="i.textPlaceholder">
                        </div>
                    </div>    
                    <button  type="submit" class="btn-reg" > Зарегистрироваться</button>
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
            dataRegToSend: {
                name: "",
                surname: "",
                email: "",
                login: "",
                password: "",
            },
            formReg: [
                {
                    textPlaceholder: 'Имя',
                    value: 'name',
                    data: ''
                },
                {
                    textPlaceholder: 'Фамилия',
                    value: 'surname',
                    data: ''
                },
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
    methods: {
        addUser() {
            // const data = {};
            // for (let i = 0; i < this.formReg.length; i++) {
            //     data[this.formReg[i].value] = this.formReg[i].data;
            // }
            console.log(this.dataRegToSend);
            // console.log(data);

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
}

.btn-reg:hover {
    background-color: white;
    color: rgb(76, 76, 76);
}

</style>
