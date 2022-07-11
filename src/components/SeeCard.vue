<template>
  <div class="flex-container">
    <Header />
    <div class="page-see-card">
      <div class="title-seecard">
        <h3>Визитка</h3>
      </div>
      <div class="flex-field">
        <div class="flex-field-card" :style="{
              background: dataCard.backgroundColor
            }">
          <div class="field-card">
            <div class="if-side" v-if="showBtn">
              <div class="data-user" :style="{
                color: dataCard.textColor,
                'align-items': dataCard.textPosition
              }">
                <div class="data-card">
                  {{ dataCard.name }}
                  {{ dataCard.surname }}
                </div>

                <div class="data-card">
                  {{ dataCard.description }}
                </div>
              </div>
            </div>
            <div v-else>
              <div class="contacts" :style="{
                color: dataCard.linksColor,
                'align-items': dataCard.textPosition
              }">
                <div class="data-card">
                  <a :href="mail" target="_blank">{{ dataCard.mail }}</a>
                </div>
                <div class="data-card">
                  <a :href="link" target="_blank">{{ dataCard.link }}</a>
                </div>
                <div class="data-card">
                  <a :href="numberPhone" target="_blank">{{
                    dataCard.phone
                  }}</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="btn-side">
        <button class="btn-card-side" @click="showBtn = !showBtn">
          {{ btnText }}
        </button>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import Header from "./AppHeader.vue";
import Footer from "./AppFooter.vue";

export default {
  name: "SeeCard",
  components: {
    Header,
    Footer
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
    mail() {
      return `mailto:${this.dataCard?.mail}`;
    },
    link() {
      return this.dataCard?.link;
    },
    numberPhone() {
      return `tel:${this.dataCard?.phone}`;
    },
    btnText() {
      return this.showBtn ? "Обратная сторона" : "Лицевая сторона";
    }
  }
};
</script>

<style scoped>
.flex-container {
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

h3 {
  color: black;
}

.flex-field {
  display: flex;
  flex-direction: row;
  justify-content: center;

  margin-top: 40px;
  padding-bottom: 20px;
}

.flex-field-card {
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  width: 400px;
  height: 200px;
  padding: 32px;
  border-radius: 8px;
  box-shadow: 0 4px 16px #ccc;
  /* background: linear-gradient(45deg, #77c2ea, #464646); */
}

.field-card {
  /* margin-left: 200px; */
  border: 5px;
  /* box-shadow: 0 1px 2px rgb(10, 10, 10); */
}

.data-card {
  display: flex;
  flex-direction: row;
  justify-content: center;

  font-family: serif;
  /* font-family: Fantasy; */
  color: #ffffff;
}

.data-user {
  font-size: 30px;
  font-weight: bold;
}

.contacts {
  font-size: 20px;
}

a {
  color: #c0bfbf;
}

.btn-card-side {
  background-color: #096B73;
  color: white;
  font-size: 14px;
  padding: 10px 20px;
  border: none;
  cursor: pointer;
  border-radius: 30px;
  text-align: center;

  margin-top: 10px;

}
</style>
