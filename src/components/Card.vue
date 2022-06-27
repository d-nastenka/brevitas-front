<template>
    <div class="page-card">

        <div class="form-cards">
            <div class="title-cards">
                <h3>Создать новую визитку</h3>
            </div>
            <form @submit.prevent="submitForm">
                <div class="form-input-cards">
                    <div class="cards-input">
                        <input v-model="form.name" placeholder="Имя">
                    </div>
                    <div class="cards-input">
                        <input v-model="form.surname" placeholder="Фамилия">
                    </div>
                    <div class="cards-input">
                        <input v-model="form.description" placeholder="Описание">
                    </div>
                    <div class="cards-input">
                        <input v-model="form.email" placeholder="Почта">
                    </div>
                    <div class="cards-input">
                        <input v-model="form.link" placeholder="Ссылка">
                    </div>
                    <div class="cards-input">
                        <input v-model="form.phone" placeholder="Телефон">
                    </div>
                    <button type="submit" class="btn-card"> Создать визитку</button>
                </div>
            </form>

        </div>

    </div>
</template>

<script>



    var regName = /^.*[^A-zА-яЁё].*$/;
    var regpas = /^\d+$/;

    N = form.name
   

    console.log(regName.test(N))
    event.preventDefault();
    console.log(N)
   

    if (!N)  {
        console.log('пусто');
        alert("заполните все поля!")
    }

    if (regName.test(N) == true) {
        console.log('введи буквы');
        alert("пропишите ИМЯ буквами!")
    }

    export default {
        name: "Card",
        data() {
            return {
                form: {
                    name: '',
                    surname: '',
                    description: '',
                    email: '',
                    link: '',
                    phone: ''
                }

            }
        },
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