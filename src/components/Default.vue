<template>
  <div class="page">
    <h3>Мои визитки</h3>
    <div id="wait-mounted">
      <!-- <button @click="getCard">Получить</button> -->
      <div class="wrapper">
        <div v-if="imgLengthstatus">У вас пока нет визиток</div>
        <div class="flex-container" v-else>
          <div class="imges-card" v-for="(i, key) in dataCard" :key="key">
            <div class="buttons">
              <button class="btn">Изменить</button>
              <button class="btn">Скачать</button>
              <button class="btn" @click="deleteCard(key)">Удалить</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
  status: false,
  data() {
    return {
      // img: [1, 2, 3, 4, 5, 5, 6, 6, 4],
      dataCard: [
        // name: "",
        // surname: "",
        // description: "",
        // mail: "",
        // link: "",
        // phone: "",
      ],
    }
  },
  created() {
      this.getCard()
      console.log(this.dataCard)
  },
  mounted() {
    
    console.log(this.dataCard)
  },
  methods: {
    getCard() {
      let promise =  fetch('http://localhost:3000/visits', {
        method: "GET",
        headers: {
          'Content-Type': 'application/json'
        },
      })
        .then(res => res.json())
        .then(res => {       
            // for (let i = 0; i < res.length; i++) {
            //     this.dataCard[i] = res[i]
            // }
            this.dataCard = res
        })
        console.log(this.dataCard)
    },
    deleteCard(i) {
      let promise =  fetch(`http://localhost:3000/visits/${this.dataCard[i]._id}`, {
        method: "DELETE",
        body: JSON.stringify(this.dataCard[i]._id),
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },        
      })
      console.log(this.dataCard[i]._id)
    }
  },
  computed: {
    imgLengthstatus() {
        return !(this.dataCard.length > 0)
    }
  }
}

</script>


<style>



.wrapper {
  padding: 0px 2% 0px 2%;
  
}

.imges-card {
  width: 300px;
  height: 200px;

  margin-left: 15px;
  margin-right: 15px;

  border: 1px solid rgb(77, 77, 77);
  box-shadow: rgba(0, 0, 0, 1.2) 0px 1px 3px;
}

.flex-container {
  width: 100%;

  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  gap: 30px;
  cursor: pointer;
    
}

.imges-card {
    height: 200px;
    
    display: flex;
    
    flex-direction: column;
    justify-content: flex-end;
    border-radius: 2px;
    /* margin-block: 1px; */
}

.buttons {
  padding: 0 1px 2px 1px;
}

.buttons .btn {    
    background-color: rgba(63, 63, 63, 0.897);
    color: white;
    font-size: 14px;
    padding: 10px 19px;
    border: none;
    cursor: pointer;
    border-radius: 5px;
    text-align: center;
}

.buttons .btn:hover {
    background-color: white;
    color: rgb(76, 76, 76);
}

</style>