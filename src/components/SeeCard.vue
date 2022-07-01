<template>
    <div class="page-see-card">
        <div class="title-seecard">
            <h3>Визитка</h3>
        </div>
        <div class="flex-field">
            <div class="field-card">
                {{ dataCard }}
            </div>

        </div>

        

    </div>
</template>

<script>


export default {
    name: "SeeCard",

    data () {
        return {
            // dataToSend: {
            //     name: "",
            //     surname: "",
            //     description: "",
            //     mail: "",
            //     link: "",
            //     phone: "",
            // },
            dataCard: {}
        }
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
                 this.dataCard = res     

            })
        },
    },
    computed: {

    } 
}


</script>

<style scoped>

.flex-field {
    display: flex;
    flex-direction: row;
    justify-content: center;

    margin-top: 40px;
}

.field-card {
    display: flex;
    /* flex-direction: row; */
    justify-content: center;
    
    /* margin-left: 200px; */

    width: 400px;
    height: 200px;
    padding: 32px;
    border-radius: 5px;
    box-shadow: 0 4px 16px #ccc;
}


</style>