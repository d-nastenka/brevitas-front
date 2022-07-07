<template>
  <div class="page-card">
    <div class="form-cards">
      <div class="title-cards">
        <h3>Создать новую визитку</h3>
      </div>

      <form @submit.prevent="addCard">
        <div class="form-input-cards">
          <div v-for="(i, key) in formFill" :key="key">
            <div :error-messages="nameErrors" class="cards-input">
              <input
                class="imput_reg_visit"
                v-model="dataToSend[i.value]"
                :placeholder="i.textPlaceholder"
              />
            </div>
          </div>
          <p>
            <font color="red"> {{ nameErrors }}</font>
          </p>
          <div v-if="!nameErrors">
            <button type="submit" class="btn-card">
              <span>Создать визитку</span>
            </button>
          </div>
          <div v-else>
            <a class="btn-card_NO"
              ><span class="btn-card_text">Создать визитку</span></a
            >
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { validationMixin } from "vuelidate";
import {
  required,
  minLength,
  email,
  url,
  numeric
} from "vuelidate/lib/validators";

export default {
  name: "Card",
  probs: {
    dataToSend: Object
  },
  mixins: [validationMixin],
  data() {
    return {
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
  methods: {
    async addCard() {
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
        }
      });

      this.$router.push("/");
    }
  }
};
</script>

<style scoped>
.page-card {
  display: flex;
  justify-content: center;
  /* background: linear-gradient(70deg, #026670, #9fedd7); */
  background: linear-gradient(90deg, #016670, #fff9c7);
  margin-top: 1px;
  margin-bottom: 1px;

  padding-top: 30px;
  padding-bottom: 30px;
}

.form-cards {
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  width: 300px;
  padding: 32px;
  background-color: #ffffff63;
  border-radius: 10px;
}

.title-cards {
  text-align: center;
  margin: 0 0 17px 0;
  font-weight: normal;
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
  /*box-sizing: border-box;*/
}
.imput_reg_visit:focus {
  background-color: rgba(255, 255, 255, 0.347);
}
</style>
