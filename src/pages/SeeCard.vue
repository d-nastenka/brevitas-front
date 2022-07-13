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
          background: dataCard.backgroundColor,
          'align-items': dataCard.textPosition,
          'justify-content': dataCard.textJustify
        }"
      >
        <CardFront :card="dataCard" />
      </div>
      <div
        v-else
        class="field-card"
        :style="{
          background: dataCard.backgroundColor,
          'align-items': dataCard.linksPosition,
          'justify-content': dataCard.contJustify
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
    CardBack,
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

h3 {
  color: black;
}

.field-card {
  display: flex;
  flex-direction: row;
  justify-content: center;

  width: 400px;
  height: 200px;
  padding: 32px;
  border-radius: 5px;
  box-shadow: 0 4px 16px #ccc;
  margin-top: 20px;
}
</style>
