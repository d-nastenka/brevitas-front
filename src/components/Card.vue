<template>
    <div class="page-card">

        <div class="form-cards">
            <div class="title-cards">
                <h3>Создать новую визитку</h3>
            </div>
            <form @submit.prevent="submitForm">
                <div class="form-input-cards">
                    <!-- <div v-for="(i, key) in forms" :key="key"> -->
                        <!-- <div class="cards-input">
                            <input v-model="forms.i">
                        </div> -->


                    <div class="cards-input">
                        <input required  v-model="forms.name" :maxlength="maxlen=20" placeholder="Имя">
                    </div>
                    <div class="cards-input">
                        <input required  v-model="forms.surname" :maxlength="maxlen=20" placeholder="Фамилия">
                    </div>
                    <div class="cards-input">
                        <input required  v-model="forms.description" placeholder="Описание">
                    </div>
                    <div class="cards-input">
                        <input required  v-model="forms.email" placeholder="Почта">
                    </div>
                    <div class="cards-input">
                        <input required  v-model="forms.link" placeholder="Ссылка">
                    </div>
                    <div class="cards-input">
                        <input required  v-model="forms.phone" :maxlength="maxlen=7" placeholder="Телефон">
                    </div>
                    <!-- </div> -->
                    <button type="submit" class="btn-card"> Создать визитку</button>
                </div>
            </form>

        </div>

    </div>
</template>

<script>


export default {
    name: "Card",
    data () {
        return {
            forms: {
                name: '',
                surname: '',
                description: '',
                email: '',
                link: '',
                phone: ''
            },
            textInput: [
                'Имя',
                'Фамилия',
                'Описание',
                'Почта',
                'Ссылка',
                'Телефон'
            ],
            maxlen: 0,
        }
    },

}

    var regName = /^.*[^A-zА-яЁё].*$/;
    var regpas = /^\d+$/;

    
/*
    if (form.name==='')  {
        console.log('пусто');
        alert("заполните все поля!")
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