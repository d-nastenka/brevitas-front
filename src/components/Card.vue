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
                            <input v-model="i.data" required :placeholder="i.textPlaceholder">
                        </div>
                    </div>

                    <button type="submit" class="btn-card"> Создать визитку</button>
                </div>
            </form>
            <p>{{formFill.data}}</p>

        </div>

    </div>
</template>

<script>


export default {
    name: "Card",
    data () {
        return {
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
            // запрос на сервер
            // this.formFill.push(this.formFill.data);
            // console.log(this.formFill);

            const obj = {};

            
        }
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