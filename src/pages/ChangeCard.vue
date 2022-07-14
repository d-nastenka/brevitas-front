<template>
  <div ><!--todo поменять курсор на кнопке обратная сторона-->
    <Header />
    <link href="https://css.gg/menu-right-alt.css" rel="stylesheet" />
    
    <div class="page-create-card">
      <div>
        <h3 class="title-createcard">Изменить визитку</h3>
      </div>

        <div class="flex-fields">
          <div class="field-form_menu">
            <form>
              <!-- <form @submit.prevent="addCard"> -->
              <div class="form-input-cards">
                <div v-for="(item, key) in formFill" :key="key">
                  <div :error-messages="nameErrors" class="cards-input">
                    <input
                      class="imput_reg_visit"
                      v-model="dataToSend[item.value]"
                      :placeholder="item.textPlaceholder"
                    />
                  </div>
                </div>
                <p>
                  <font color="red"> {{ nameErrors }}</font>
                </p>
              </div>
            </form>
          </div>
          <div>
            <div
            v-if="showBtn"
            class="field-card"
            :style="{
              background: dataToSend.color.background,
              'align-items': dataToSend.positions.text,
              'justify-content': dataToSend.justify.text
            }"
          >
            <CardFront :card="dataToSend" />
          </div>
          <div
            v-else
            class="field-card"
            :style="{
              background: dataToSend.color.background,
              'align-items': dataToSend.positions.links,
              'justify-content': dataToSend.justify.links
            }"
          >
            <CardBack :card="dataToSend" />
            </div>
          </div>
          <div class="field-form_menu">
            <CardMenu :card="dataToSend" :btnSide="showBtn" />
          </div>
        </div>
         
      <div class="btn-side">
        <a class="btn-side__card" @click="showBtn = !showBtn">
          {{ btnText }}
        </a>
      </div>
      
      <div class="field-btn">
        <div v-if="!nameErrors">
          <a @click="addCard" class="btn">
            <span>Сохранить</span>
          </a>
        </div>
        <div v-else>
          <a class="btn_NO"> <span>Сохранить</span></a>
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import Header from "../components/AppHeader.vue";
import Footer from "../components/AppFooter.vue";
import CardMenu from "../components/CardMenu.vue";
import CardFront from "../components/CardFront.vue";
import CardBack from "../components/CardBack.vue";
import cardData from "../mixins/cardData";

import { validationMixin } from "vuelidate";

import {
  required,
  minLength,
  email,
  url,
  numeric
} from "vuelidate/lib/validators";

export default {
  // mixins: [cardData],
  name: "CreateCard",
  components: {
    Header,
    Footer,
    CardMenu,
    CardFront,
    CardBack
  },
  mixins: [validationMixin, cardData],
  data() {
    return {
      IdCard: this.$route.params.id,
      showBtn: true,
      check: true,
    };
  },
  validations: {
    dataToSend: {
      name: { required, numeric },
      surname: { required, numeric },
      description: { required },
      mail: { required, email },
      link: { required, url },
      phone: { required, minLength: minLength(11), numeric }
    }
  },
  computed: {
    // TODO: Отрефакторить, убрать повторение кода
    nameErrors() {
      const errors = [];
      var newmes = "";

      if (
        !this.$v.dataToSend.name.required ||
        !this.$v.dataToSend.surname.required ||
        !this.$v.dataToSend.description.required ||
        !this.$v.dataToSend.mail.required ||
        !this.$v.dataToSend.link.required ||
        !this.$v.dataToSend.phone.required
      ) {
        errors.push("заполните все поля ");
        newmes = newmes + errors;
        check: false;
      } else {
        if (!this.$v.dataToSend.phone.minLength) {
          newmes = "";
          errors.push(" введите полный номер телефона");
          newmes = newmes + errors;
        }
        if (!this.$v.dataToSend.mail.email) {
          newmes = "";
          errors.push(" введите правильный email");
          newmes = newmes + errors;
        }
        if (!this.$v.dataToSend.link.url) {
          newmes = "";
          errors.push(" введите правильную ссылку");
          newmes = newmes + errors;
        }
        if (
          this.$v.dataToSend.name.numeric ||
          this.$v.dataToSend.surname.numeric
        ) {
          newmes = "";
          errors.push("в имени и фамилии должны быть только буквы!");
          newmes = newmes + errors;
        }
        if (!this.$v.dataToSend.phone.numeric) {
          newmes = "";
          errors.push("в поле ТЕЛЕФОН должны быть только цифры!");
          newmes = newmes + errors;
        }
      }
      return newmes;
    },
    btnText() {
      return this.showBtn ? "Обратная сторона" : "Лицевая сторона";
    }
  },
  created() {
    this.getCard();
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
        this.dataToSend = await res.json();
      }
    },
    async addCard() {
      let res = await fetch(
        `http://localhost:3000/visits/${this.$route.params.id}`,
        {
          method: "PUT",
          body: JSON.stringify(this.dataToSend),
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
          },
          credentials: "include"
        }
      );
      if (res.ok) {
        this.$router.push("/mycards");
      }
    }
  }
};
</script>

<style scoped>
.page-create-card {
  display: flex;
  flex-direction: column;
/*
  justify-content: space-between;
  min-height: calc(100vh - 144px);
*/
  justify-content: center;
  width: 100%;
  flex-wrap: nowrap;
  align-items: center;
}

.title-createcard {
  margin-top: 55px;

  font-family: 'Tenor Sans';
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
.flex-cont {
  height: 100%;

  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  align-content: center;
  justify-content: space-around;
}

.flex-fields {
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  /* margin: 0px 20px 40px 20px; */
  align-items: flex-end;
  width: 100%;
  justify-content: space-evenly;
}

.field-form_menu {
  width: 283px;
  height: 328px;
  padding: 32px;
  border-radius: 15px;
  box-shadow: 0px 4px 4px rgba(1, 102, 112, 0.1);
  margin-top: 20px;
  background-color: rgb(255, 255, 255);
}
.field-card {

  display: flex;
  flex-direction: column;
  background: #DCDCDC;
  width: 673px;
  height: 346px;
  padding: 32px;
  border-radius: 5px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.2);
  margin-top: 20px;
}

.field-menu {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 170px;
  height: 300px;
  padding: 32px;
  border-radius: 5px;
  box-shadow: 0 4px 16px #ccc;
  justify-content: space-around;
  margin-top: 20px;
}

.cards-input {
  width: 100%;
  padding: 0 0 9px 0;
  border: none;
}
.imput_reg_visit {
  padding: 7px 19px;
  margin-bottom: 2px;
  border: 0px;
  border-bottom: 2px solid rgb(0, 0, 0);
  background-color: rgba(0, 0, 0, 0);
  outline: none;
}
.imput_reg_visit:focus {
  background-color: rgba(255, 255, 255, 0.347);
}

.field-btn {
  margin-bottom: 79px;
  margin-top: 60px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  flex-wrap: nowrap;
  width: 77%;
  height: 70px;
}

::placeholder {
  font-family: "Roboto";
  font-style: normal;
  font-size: 16px;

  letter-spacing: 0.232836px;

  color: #a6a3a3;
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

.btn-side__card{
  width: 241.29px;
  height: 62.92px;
  left: 839px;
  top: 774px;

  display: flex;
  border: 1.2px solid #000000;
  border-radius: 56px;
  align-items: center;
  flex-direction: row;
  align-content: center;
  justify-content: center;

}

.btn-side__card p{
  font-family: 'Roboto';
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
