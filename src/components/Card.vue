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
                            <input v-model="dataToSend[i.value]" required :placeholder="i.textPlaceholder">
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
        }
    },
    computed: {

    } 
}





    var regName = /^.*[^A-zА-яЁё].*$/;
    var regpas = /^\d+$/;

    
/*
    if (formFill.data == '')  {
        console.log('пусто');
        
    }

    if (regName.test(N) == true) {
        console.log('введи буквы');
        alert("пропишите ИМЯ буквами!")
    }
*/

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