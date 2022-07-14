<template>
  <div class="flex-container">
    <Header />
    <div class="page-see-card">
      <div class="title-seecard">
        <h3>Визитка</h3>
      </div>
      <div
        v-if="showBtn"
        class="field-card"
        :style="{
          background: dataCard.color.background,
          'align-items': dataCard.positions.text,
          'justify-content': dataCard.justify.text
        }"
      >
        <CardFront :card="dataCard" />
      </div>
      <div
        v-else
        class="field-card"
        :style="{
          background: dataCard.color.background,
          'align-items': dataCard.positions.links,
          'justify-content': dataCard.justify.links
        }"
      >
        <CardBack :card="dataCard" />
      </div>
    </div>
    <div class="btn-side">
      <button class="btn-card-side" @click="showBtn = !showBtn">
        {{ btnText }}
      </button>
    </div>

    <Footer />
  </div>
</template>

<script>
import Header from "../components/AppHeader.vue";
import Footer from "../components/AppFooter.vue";
import CardFront from "../components/CardFront.vue";
import CardBack from "../components/CardBack.vue";

export default {
  name: "SeeCard",
  components: {
    Header,
    Footer,
    CardFront,
    CardBack
  },
  data() {
    return {
      dataCard: {},
      showBtn: true
    };
  },
  created() {
    this.getCard();
    console.log(this.dataCard);
  },
  methods: {
    async getCard() {
      let res = await fetch(
        `http://localhost:3000/visits/${this.$route.params.id}`,
        {
          method: "GET",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
          },
          credentials: "include"
        }
      );
      if (res.ok) {
        this.dataCard = await res.json();
      }
    }
  },
  computed: {
    btnText() {
      return this.showBtn ? "Обратная сторона" : "Лицевая сторона";
    }
  }
};
</script>

<style scoped>
.title-seecard {
  /* font-family: "Tenor Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 36px;
  line-height: 42px;
  display: flex;
  align-items: center;
  text-align: center;
  letter-spacing: 0.232836px;

  color: #016670; */
}

h3 {
  margin-top: 55px;

  font-family: "Tenor Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 36px;
  line-height: 42px;
  display: flex;
  align-items: center;
  text-align: center;
  letter-spacing: 0.232836px;

  color: #016670;
}
.page-see-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.flex-container {
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.field-card {
  display: flex;
  flex-direction: row;
  justify-content: center;

  width: 673px;
  height: 346px;
  padding: 32px;
  border-radius: 5px;
  box-shadow: 0 4px 16px #ccc;
  margin-top: 20px;
}

.btn-side {
  margin-top: 100px;
  width: 100%;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: center;
  align-content: flex-end;
}

.btn-card-side {
  width: 241.29px;
  height: 62.92px;
  left: 839px;
  top: 774px;
  cursor: pointer;

  display: flex;
  border: 1.2px solid #000000;
  border-radius: 56px;
  align-items: center;
  flex-direction: row;
  align-content: center;
  justify-content: center;
  font-size: 24px;
}

.btn-card-side p {
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 28px;
  display: flex;
  align-items: center;
  text-align: center;
  letter-spacing: 0.232836px;

  color: #000000;
}
</style>
