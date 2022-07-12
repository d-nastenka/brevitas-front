<template>
  <div class="flex-cont">
    <Header />
    <div class="page">
      <link href="https://css.gg/css" rel="stylesheet" />
      <h3>Мои визитки</h3>
      <div id="wait-mounted">
        <div class="wrapper-cards">
          <div v-if="imgLengthstatus">У вас пока нет визиток</div>
          <div class="flex-container" v-else>
            <div
              class="imges-card"
              v-for="(item, key) in dataCard"
              :key="key"
              
            >
              <LoadingCards :card="item" @deleteCard="deleteCard" />
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import LoadingCards from "./LoadingCards.vue";
import Header from "./AppHeader.vue";
import Footer from "./AppFooter.vue";

export default {
  name: "MyCards",
  components: {
    LoadingCards,
    Header,
    Footer
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
    // TODO: Нет валидации
    async getCard() {
      let res = await fetch("http://localhost:3000/visits", {
        method: "GET",
        headers: {
          "Content-Type": "application/json"
        },
        credentials: "include"
      });
      if (res.ok) {
        this.dataCard = await res.json();
      }
    },
    // TODO: Нет валидации
    async deleteCard(item) {
      let res = await fetch(`http://localhost:3000/visits/${item._id}`, {
        method: "DELETE",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        credentials: "include"
      });
      if (res.ok) {
        this.dataCard.splice(item, 1);
      }
    }
  },
  computed: {
    imgLengthstatus() {
      return !(this.dataCard.length > 0);
    }
  }
};
</script>

<style scoped>
.flex-cont {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

h3 {
  color: black;
}

.page {
  padding-top: 20px;
}

.wrapper-cards {
  padding: 0px 2% 0px 2%;
}

.imges-card {
  display: flex;
  flex-direction: column;
  /* justify-content: space-between; */
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
</style>
