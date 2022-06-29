<template>
    <div class="page-card">

        <div class="form-cards">
            <div class="title-cards">
                <h3>Создать новую визитку</h3>
            </div>
            
            <form @submit.prevent="addCard">
                <div class="form-input-cards">
                    <div v-for="(i, key) in formFill" :key="key" >
                        <div :error-messages = "nameErrors" class="cards-input">
                            <input  v-model="dataToSend[i.value]" 
                            :placeholder="i.textPlaceholder" 
                            >  
                        </div>
                    </div>
                    <p> <font color="red"> {{nameErrors}}</font></p> 
                    <button type="submit" class="btn-card"> Создать визитку</button>

                    
                </div>
            </form>


        </div>

    </div>
</template>

<script>

import {validationMixin} from 'vuelidate';
import {required, minLength, email} from 'vuelidate/lib/validators'
import CreateCard from "./CreateCard.vue"


export default {
    name: "Card",
    components: {
      CreateCard
    },
    mixins:[validationMixin, ],
    data () {
        return {
            dataToSend: {
                name: "",
                surname: "",
                description: "",
                mail: "",
                link: "",
                phone: "",
            },
            formFill: [
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
                    textPlaceholder: 'Описание',
                    value: 'description',
                    data: ''
                },
                {
                    textPlaceholder: 'Почта',
                    value: 'mail',
                    data: ''
                },
                {
                    textPlaceholder: 'Ссылка',
                    value: 'link',
                    data: ''
                },
                {
                    textPlaceholder: 'Телефон',
                    value: 'phone',
                    data: ''
                },
            ]       
        }
    },
    validations:{
        dataToSend: {
            name: {required},
            surname: {required},
            description: {required},
            mail: {required, email},
            link: {required},
            phone: {required, minLength:minLength(11)}
        }
    },
    computed: {
        nameErrors(){
            var regName = /^.*[^A-zА-яЁё].*$/;
            var regpas = /^\d+$/;

            const errors=[];
            var newmes ='';
            if((!this.$v.dataToSend.name.required)||(!this.$v.dataToSend.surname.required)||(!this.$v.dataToSend.description.required)||(!this.$v.dataToSend.mail.required)
            ||(!this.$v.dataToSend.link.required)||(!this.$v.dataToSend.phone.required)) {
                errors.push('заполните все поля ');
                newmes =newmes+ errors;
            }else {
            
                if(!this.$v.dataToSend.phone.minLength){
                    newmes = '';
                    errors.push('введите правильный полный номер телефона!')
                    newmes = newmes+errors;
                }
                if(!this.$v.dataToSend.mail.email){
                    newmes = '';
                    errors.push('введите правильный email')
                    newmes = newmes+errors;
                }
                 /*if((this.$v.dataToSend.phone){
                errors.push('в поле ТЕЛЕФОН должны быть только цифры!'); 
                newmes = newmes+errors;
                 if((regName.test(this.$v.dataToSend.name))||(regName.test(this.$v.dataToSend.surname)))
                errors.push('в имени и фамилии должны быть только буквы!');
            */
            }
            return newmes;
        }
    },
    methods: {
        // async 
        addCard() {

            var regName = /^.*[^A-zА-яЁё].*$/;
            var regpas = /^\d+$/;

            if((regName.test(this.dataToSend.name))||(regName.test(this.dataToSend.surname)))
               alert('в имени и фамилии должны быть только буквы!')

           const data = {};
                        for (let i = 0; i < this.formFill.length; i++) {
                            data[this.formFill[i].value] = this.formFill[i].data;
                        }
                    
            
            //await
            let promise =  fetch('http://localhost:3000/visits', {
                method: "POST",
                body: JSON.stringify(this.dataToSend),
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                
            })
            this.$router.push("/createcard")        
        }
    }
}


</script>

<style scoped>
.page-card {
    display: flex;
    justify-content: center;

    margin-top: 20px;
}

.form-cards {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;

    width: 300px;
    padding: 32px;
    border-radius: 10px;
    box-shadow: 0 4px 16px #ccc;
}

.title-cards {
    text-align: center;
    margin: 0 0 17px 0;
    font-weight: normal;
}


.cards-input {
    width: 100%;
    padding: 0 0 12px 0;
    border: none;
}

.btn-card {
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

.btn-card:hover {
    background-color: white;
    color: rgb(76, 76, 76);
}
</style>