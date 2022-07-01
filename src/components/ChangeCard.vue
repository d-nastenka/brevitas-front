<template>
    <div class="page-card">

        <div class="form-cards">
            <div class="title-cards">
                <h3>Изменить визитку</h3>
            </div>
            <!-- {{ $route.params.id }} -->
            <form @submit.prevent="changeCard">
                <div class="form-input-cards">
                    <div v-for="(item, key) in formFill" :key="key" >
                        <div class="cards-input">
                            <input v-model="dataOfCard[item.value]" :placeholder="item.textPlaceholder">
                             
                        </div>
                    </div>
                    <button type="submit" class="btn-card">Сохранить</button>
                </div>
            </form>


        </div>
        
    </div>
</template>

<script>

export default {
    name: "ChangeCard",    
    data () {
        return {
            IdCard: this.$route.params.id,
            dataOfCard: {
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
    computed: {

    },
    created() {
      this.getCard()
      console.log(this.dataCard)
    },
    methods: {
        getCard() {
            let promise =  fetch(`http://localhost:3000/visits/${this.$route.params.id}`, {
                method: "GET",
                // body: JSON.stringify(this.dataOfCard),
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }, 
            })
            .then(res => res.json())
            .then(res => {
                  
                this.dataOfCard = res
                console.log(this.dataOfCard)
            })
        },
        // async 
        changeCard() {         
            let promise =  fetch(`http://localhost:3000/visits/${this.$route.params.id}`, {
                method: "PUT",
                body: JSON.stringify(this.dataOfCard),
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }, 
            })
            this.$router.push("/")        
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