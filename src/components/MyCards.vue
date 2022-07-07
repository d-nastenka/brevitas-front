<template>
  <div class="page">
    <link href="https://css.gg/css" rel="stylesheet" />
    <h3>Мои визитки</h3>
    <div id="wait-mounted">
      <div class="wrapper-cards">
        <div v-if="imgLengthstatus">У вас пока нет визиток</div>
        <div class="flex-container" v-else>
          <div class="imges-card" v-for="(item, key) in dataCard" :key="key">
            <LoadingCard :card="item" @deleteCard="deleteCard" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import LoadingCard from "./LoadingCard.vue";

export default {
  name: "MyCards",
  components: {
    LoadingCard
  },
  status: false,
  data() {
    return {
      dataCard: []
    };
  },
  created() {
    this.getCard();
  },
  mounted() {},
  methods: {
    async getCard() {
      let res = await fetch("http://localhost:3000/visits", {
        method: "GET",
        headers: {
          "Content-Type": "application/json"
        },
        credentials: "include"
      });
      this.dataCard = await res.json();
    },
    async deleteCard(item) {
      let res = await fetch(`http://localhost:3000/visits/${item._id}`, {
        method: "DELETE",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        }
      });
      this.dataCard.splice(item, 1);
    }
  },
  computed: {
    imgLengthstatus() {
      return !(this.dataCard.length > 0);
    }
  }
};
</script>

<style  scoped>
.page {
  padding-top: 20px;
}

.wrapper-cards {
  padding: 0px 2% 0px 2%;
}

.imges-card {
  width: 320px;
  height: 200px;

  margin-left: 72px;
  margin-right: 72px;

  border: none;

  
  box-shadow: 0 4px 16px rgb(134, 134, 134);
  background: linear-gradient(45deg, #77c2ea, #464646);

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  
}

.flex-container {
  width: 100%;

  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  gap: 30px;

  padding-top: 20px;
  padding-bottom: 30px;
}

@media screen and (max-width: 1200px) {
  .flex-container {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
  }
}


.imges-card {
  height: 200px;

  display: flex;

  flex-direction: column;
  justify-content: space-between;
  border-radius: 2px;

  font-family: serif;
  border-radius: 5px;
}
</style>
