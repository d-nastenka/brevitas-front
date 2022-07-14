<template>
  <div class="flex-cont">
    <Header />
    <div class="page">
      <link href="https://css.gg/css" rel="stylesheet" />
      <h3>Мои визитки</h3>
      <!-- <div id="wait-mounted"> -->
      <div class="wrapper-cards">
        <div v-if="imgLengthstatus">У вас пока нет визиток</div>
        <div class="flex-container" v-else>
          <LoadingCards
            class="imges-card"
            v-for="(item, key) in dataCard"
            :key="key"
            :card="item"
            @deleteCard="deleteCard"
          />
        </div>
      </div>
      <!-- </div> -->
    </div>
    <Footer />
  </div>
</template>

<script>
import LoadingCards from "../components/LoadingCards.vue";
import Header from "../components/AppHeader.vue";
import Footer from "../components/AppFooter.vue";

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
    async getCard() {
      let res = await fetch("http://localhost:3000/visits", {
        method: "GET",
        headers: {
          "Content-Type": "application/json"
        },
        credentials: "include"
      });
      console.log(res);
      if (res.ok) {
        this.dataCard = await res.json();
        console.log(this.dataCard);
      }
    },
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
        console.log(item)
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
  /* display: flex;
  flex-direction: column;
  justify-content: space-between; */

  /* padding-bottom: 90px; */
}

h3 {
  font-family: "Tenor Sans";
  font-style: normal;

  font-size: 36px;
  line-height: 42px;

  letter-spacing: 0.232836px;

  color: #016670;
}

.page {
  padding-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  align-content: center;
  min-height: calc(100vh - 165px);
  /* height: 85vh; */
}

.wrapper-cards {
  padding-bottom: 100px;
  padding: 0px 5% 0px 5%;
}

/* .imges-card {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
} */

.flex-container {
  width: 100%;

  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  gap: 30px 120px;
  padding-bottom: 80px;
  /* padding: 20px 20px 20px 20px; */
  /* padding-top: 20px;
  padding-bottom: 80px; */
}

@media screen and (max-width: 2000px) {
  .flex-container {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
  }
}
</style>
