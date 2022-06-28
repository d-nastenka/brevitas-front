<template>
    <div class="page-card">

        <div class="form-cards">
            <div class="title-cards">
                <h3>Создать новую визитку</h3>
            </div>
            <form @submit.prevent="addCard">
                <div class="form-input-cards">
                    <div v-for="(i, key) in formFill" :key="key">
                        <div class="cards-input">
                            <input v-model="dataToSend[i.value]" :placeholder="i.textPlaceholder">
                        </div>
                    </div>

                    <button type="submit" class="btn-card"> Создать визитку</button>
                </div>
            </form>


        </div>

    </div>
</template>

<script>

// async function postData(url = '', data = {}) {

//     const response = await fetch(url, {
//         method: 'POST'
//     });
//     return await response.json();
// }

export default {
    name: "Card",
    data () {
        return {
            dataToSend: {
                name: "",
                surname: "",
                description: "",
                email: "",
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
                    value: 'email',
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
    methods: {
        addCard() {

            // const data = {};
            // for (let i = 0; i < this.formFill.length; i++) {
            //     data[this.formFill[i].value] = this.formFill[i].data;
            // }
            // console.log(this.dataToSend);
            // postData('http://localhost:3000/', { answer: 42 })
            // .then((data) => {
            //     console.log(this.dataToSend)
            // })
            colsole.log(fetch('http://localhost:3000/'))
                // .then((response) => {
                //     return response.json();
                // })
                // .then((data) => {
                //     console.log(data);
                // });


            // запрос на сервер
           //console.log(this.formFill[i].data) 
            var regName = /^.*[^A-zА-яЁё].*$/;
            var regpas = /^\d+$/;

            const data = {};
            for (let i = 0; i < this.formFill.length; i++) {
                data[this.formFill[i].value] = this.formFill[i].data;
            }
            //console.log(this.dataToSend.name);
            if((regName.test(this.dataToSend.name))||(regName.test(this.dataToSend.surname)))
                 alert("в имени и фамилии должны быть только буквы!")
            if(!regpas.test(this.dataToSend.phone))
                 alert("в поле ТЕЛЕФОН должны быть только цифры!")
            if((!this.dataToSend.name)||(!this.dataToSend.surname)||(!this.dataToSend.description)||(!this.dataToSend.email)||(!this.dataToSend.link)||(!this.dataToSend.phone))
                 alert("заполните все поля! ")
            if(!this.dataToSend.email.includes('@'))
                    alert("введите правильный email!")  
            if(this.dataToSend.phone.length<11)
                    alert("введите правильный полный номер телефона!") 

        }
    },
    computed: {

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
    margin: 0 0 20px 0;
    font-weight: normal;
}


.cards-input {
    width: 100%;
    padding: 0 0 10px 0;
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
}

.btn-card:hover {
    background-color: white;
    color: rgb(76, 76, 76);
}
</style>