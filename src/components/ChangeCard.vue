<template>
  <div class="flex-cont">
    <link href="https://css.gg/menu-right-alt.css" rel="stylesheet" />
    <Header />
    <div class="page-create-card">
      <div class="title-createcard">
        <h3>Изменить визитку</h3>
      </div>
      <div class="create-visits">
        <div class="flex-fields">
          <div class="field-form">
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
          <div
            class="field-card"
            :style="{
              background: dataToSend.backgroundColor
            }"
          >
            <div
              class="data-user"
              :style="{
                color: dataToSend.textColor,
                'align-items': dataToSend.textPosition
              }"
            >
              <div class="data-card">
                {{ dataToSend.name }}
                {{ dataToSend.surname }}
              </div>

              <div class="data-card">
                {{ dataToSend.description }}
              </div>
            </div>
            <div
              class="contacts"
              :style="{
                color: dataToSend.linksColor,
                'align-items': dataToSend.textPosition
              }"
            >
              <div class="data-card">
                {{ dataToSend.mail }}
              </div>
              <div class="data-card">
                {{ dataToSend.link }}
              </div>
              <div class="data-card">
                {{ dataToSend.phone }}
              </div>
            </div>
          </div>
          <div class="field-menu">
            Цвет фона
            <input type="color" v-model="dataToSend.backgroundColor" />
            Текст
            <input type="color" v-model="dataToSend.textColor" />
            Текст контактов
            <input type="color" v-model="dataToSend.linksColor" />
            <div class="text-position">
              <button class="btnText" @click="btnTextLeft">
                <i
                  class="gg-menu-right-alt"
                  :style="{
                    width: '10px',
                    height: '10px'
                  }"
                ></i>
              </button>
              <button class="btnText" @click="btnTextCenter">
                <i
                  class="gg-menu-right-alt"
                  :style="{
                    width: '12.5px',
                    height: '10px'
                  }"
                ></i>
              </button>
              <button class="btnText" @click="btnTextRight">
                <i
                  class="gg-menu-right-alt"
                  :style="{
                    width: '16px',
                    height: '10px'
                  }"
                ></i>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div class="field-btn">
        <div v-if="!nameErrors">
          <button @click="addCard" class="btn">
            <!-- <button type="submit" class="btn-card"> -->
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
    Footer
  },
  mixins: [validationMixin],
  data() {
    return {
      IdCard: this.$route.params.id,
      dataCard: {},
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
        textPosition: ""
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
      console.log(this.dataToSend);
      // const data = {};
      // for (let i = 0; i < this.formFill.length; i++) {
      //   data[this.formFill[i].value] = this.formFill[i].data;
      // }

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
    },
    btnTextLeft() {
      this.dataToSend.textPosition = "flex-start";
    },
    btnTextCenter() {
      this.dataToSend.textPosition = "center";
    },
    btnTextRight() {
      this.dataToSend.textPosition = "flex-end";
    }
  }
};
</script>

<style scoped>
.page-create-card {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.title-createcard {
  margin-top: 30px;
}
.flex-cont {
  /* height: 100%; */
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.flex-fields {
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  flex-wrap: wrap;

  margin: 0px 20px 40px 20px;
}

.field-form {
  width: 290px;
  height: 300px;
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
  justify-content: space-between;

  /* margin-left: 200px; */

  width: 400px;
  height: 200px;
  padding: 32px;
  border-radius: 5px;
  box-shadow: 0 4px 16px #ccc;
  margin-top: 20px;
}

.field-menu {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  /* margin-left: 200px; */

  width: 150px;
  height: 200px;
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

.data-card {
  display: flex;
  /* flex-direction: row;
  justify-content: center;

  font-family: serif; */
}

.data-user {
  display: flex;
  flex-direction: column;
  font-size: 30px;
  font-weight: bold;
}

.contacts {
  display: flex;
  flex-direction: column;
  font-size: 20px;
}

.field-btn {
  margin-bottom: 20px;
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
.text-position {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  margin-top: 10px;
}

.btnText {
  border: none;
  background-color: rgba(28, 28, 28, 0);

  color: rgb(61, 61, 61);
  cursor: pointer;
  /* width: 20px;
  height: 20px; */
}

.btnText:hover {
  border: none;
  background-color: rgba(28, 28, 28, 0);
  /* width: 20px;
  height: 20px; */
  color: rgb(22, 22, 22);
  cursor: pointer;
}
</style>
