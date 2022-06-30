<template>
    <div class="page-see-card">
        <div class="title-seecard">
            <h3>Визитка</h3>
        </div>
        <div class="flex-field">
            <div class="field-card">
        
            </div>

        </div>

        

    </div>
</template>

<script>


export default {
    name: "SeeCard",

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
        }
    },
    
    methods: {
        // printData(dataOfCard) {
        //     this.dataToSend.push(dataOfCard);
        // }
    },
    computed: {

    } 
}


</script>

<style scoped>

.flex-field {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;

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