<template>
  <div class="flex-cont">
    <Header />
    <div class="page-create-card">
      <div class="title-createcard">
        <h3>Создать визитку</h3>
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
              background: backgroundColor,
              color: textColor
            }"
          >
            <div class="data-user">
              <div class="data-card">
                {{ dataToSend.name }}
                {{ dataToSend.surname }}
              </div>

              <div class="data-card">
                {{ dataToSend.description }}
              </div>
            </div>
            <div class="contacts">
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
            <input type="color" v-model="backgroundColor" />
            Цвет текста
            <input type="color" v-model="textColor" />
          </div>
        </div>
      </div>
      <div class="field-btn">
        <div v-if="!nameErrors">
          <button @click="addCard" class="btn-card">
          <!-- <button type="submit" class="btn-card"> -->
            <span>Создать визитку</span>
          </button>
        </div>
        <div v-else>
          <a class="btn-card_NO"> <span>Создать визитку</span></a>
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
      backgroundColor: "white",
      textColor: "black",
      dataCard: {},
      check: true,
      dataToSend: {
        name: "",
        surname: "",
        description: "",
        mail: "",
        link: "",
        phone: ""
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
    btnAddCard() {}
  },
  methods: {
    // TODO: Нет валидации
    async addCard() {
      console.log(this.dataToSend);
      const data = {};
      for (let i = 0; i < this.formFill.length; i++) {
        data[this.formFill[i].value] = this.formFill[i].data;
      }

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
        console.log(this.dataToSend);
        this.$router.push("/mycards");
      }
      console.log(this.dataToSend);
    }
  },
  created() {}
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
  height: 100hv;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.flex-fields {
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  flex-wrap: wrap;

  margin-top: 40px;

  margin-bottom: 40px;
}

.field-form {
  width: 250px;
  height: 300px;
  padding: 32px;
  border-radius: 5px;
  box-shadow: 0 4px 16px #ccc;
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
}

.field-menu {
  /* display: flex;
    flex-direction: row;
    justify-content: center; */

  /* margin-left: 200px; */

  width: 150px;
  height: 200px;
  padding: 32px;
  border-radius: 5px;
  box-shadow: 0 4px 16px #ccc;
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
  flex-direction: row;
  justify-content: center;

  font-family: serif;
}

.data-user {
  font-size: 30px;
  font-weight: bold;
}

.contacts {
  font-size: 20px;
}

.field-btn {
  margin-bottom: 30px;
}

.btn-card {
  background-color: #096b73;
  color: white;
  font-size: 14px;
  padding: 10px 20px;
  border: none;
  cursor: pointer;
  border-radius: 7px;
  text-align: center;
  transition: all 0.5s;
}

.btn-card:hover {
  background-color: rgb(186, 220, 222);
  color: rgb(76, 76, 76);
}

.btn-card_NO {
  background-color: #65989d;
  color: white;
  font-size: 14px;
  padding: 10px 20px;
  border: none;

  border-radius: 7px;
  text-align: center;
  transition: all 0.5s;

}
</style>
