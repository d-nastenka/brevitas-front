<template>
  <div>
    <Header />
    <link href="https://css.gg/menu-right-alt.css" rel="stylesheet" />
    
    <div class="page-create-card">
      <div class="title-createcard">
        <h3>Создать визитку</h3>
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
              background: dataToSend.backgroundColor,
              'align-items': dataToSend.textPosition,
              'justify-content': dataToSend.textJustify
            }"
          >
            <CardFront :card="dataToSend" />
          </div>
          <div
            v-else
            class="field-card"
            :style="{
              background: dataToSend.backgroundColor,
              'align-items': dataToSend.linksPosition,
              'justify-content': dataToSend.contJustify
            }"
          >
            <CardBack :card="dataToSend" />
            
              </div>
            <div class="btn-side">
              <button class="btn-card-side" @click="showBtn = !showBtn">
                {{ btnText }}
              </button>
            </div>
          </div> 
          <div class="field-form_menu">
            <CardMenu  :card="dataToSend" :btnSide="showBtn" />
          </div> 
        
        </div>
        

      <div class="field-btn">
        <div v-if="!nameErrors">
          <button @click="addCard" class="btn">
            <span>Сохранить</span>
          </button>
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
import Header from "./AppHeader.vue";
import Footer from "./AppFooter.vue";
import CardMenu from "./CardMenu.vue";
import CardFront from "./CardFront.vue";
import CardBack from "./CardBack.vue";

import { validationMixin } from "vuelidate";
import {
  required,
  minLength,
  email,
  url,
  numeric
} from "vuelidate/lib/validators";

export default {
  name: "CreateCard",
  components: {
    Header,
    Footer,
    CardMenu,
    CardFront,
    CardBack
  },
  mixins: [validationMixin],
  data() {
    return {
      // dataCard: {},
      showBtn: true,
      check: true,
      dataToSend: {
        name: "",
        surname: "",
        description: "",
        mail: "",
        link: "",
        phone: "",
        backgroundColor: "",
        textColor: "",
        linksColor: "",
        textPosition: "",
        linksPosition: "",
        sizeText: 30,
        sizeCont: 20,
        textJustify: "",
        contJustify: ""
      },
      formFill: [
        {
          textPlaceholder: "Имя",
          value: "name",
          data: ""
        },
        {
          textPlaceholder: "Фамилия",
          value: "surname",
          data: ""
        },
        {
          textPlaceholder: "Описание",
          value: "description",
          data: ""
        },
        {
          textPlaceholder: "Почта",
          value: "mail",
          data: ""
        },
        {
          textPlaceholder: "Ссылка",
          value: "link",
          data: ""
        },
        {
          textPlaceholder: "Телефон",
          value: "phone",
          data: ""
        }
      ]
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
  methods: {
    async addCard() {
      console.log(this.dataToSend);

      let res = await fetch("http://localhost:3000/visits", {
        method: "POST",
        body: JSON.stringify(this.dataToSend),
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        credentials: "include"
      });
      if (res.ok) {
        this.$router.push("/mycards");
      }
    }
  },
  created() {}
};
</script>

<style scoped>
.page-create-card {
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  flex-wrap: nowrap;
  align-items: center;
}

.title-createcard {
  margin-top: 30px;
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
    align-items: center;
    width: 100%;
    justify-content: space-evenly;
}

.field-form_menu {
  width: 300px;
  height: 350px;
  padding: 32px;
  border-radius: 5px;
  box-shadow: 0 4px 16px #ccc;
  margin-top: 20px;
}
.field-card {
  /* display: flex;
  flex-direction: row;
  justify-content: center; */
  display: flex;
  flex-direction: column;
  /* justify-content: space-between; */

  /* margin-left: 200px; */

  width: 450px;
  height: 250px;
  padding: 32px;
  border-radius: 5px;
  box-shadow: 0 4px 16px #ccc;
  margin-top: 20px;
}

.field-menu {
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  /* margin-left: 200px; */

  width: 170px;
  height: 300px;
  padding: 32px;
  border-radius: 5px;
  box-shadow: 0 4px 16px #ccc;

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
  margin-bottom: 60px;
  margin-top: 60px;
  display: flex;
  flex-direction: column;
}

::placeholder {
  font-family: "Roboto";
  font-style: normal;
  font-size: 16px;

  letter-spacing: 0.232836px;

  color: #a6a3a3;
}

.btn-side{
  margin-top: 20px;
}
</style>
