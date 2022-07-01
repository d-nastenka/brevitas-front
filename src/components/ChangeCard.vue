<template>
  <div class="page-card">
    <div class="form-cards">
      <div class="title-cards">
        <h3>Изменить визитку</h3>
      </div>
      <!-- {{ $route.params.id }} -->
      <form @submit.prevent="changeCard">
        <div class="form-input-cards">
          <div v-for="(item, key) in formFill" :key="key">
            <div class="cards-input">
              <input
                :error-messages="nameErrors"
                v-model="dataOfCard[item.value]"
                :placeholder="item.textPlaceholder"
              />
            </div>
          </div>
          <p>
            <font color="red"> {{ nameErrors }}</font>
          </p>
          <div v-if="!nameErrors">
            <button type="submit" class="btn-card">Сохранить</button>
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
  name: "ChangeCard",
  mixins: [validationMixin],
  data() {
    return {
      check: true,
      IdCard: this.$route.params.id,
      dataOfCard: {
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
  computed: {
    nameErrors() {
      const errors = [];
      var newmes = "";

      if (
        !this.$v.dataOfCard.name.required ||
        !this.$v.dataOfCard.surname.required ||
        !this.$v.dataOfCard.description.required ||
        !this.$v.dataOfCard.mail.required ||
        !this.$v.dataOfCard.link.required ||
        !this.$v.dataOfCard.phone.required
      ) {
        errors.push("заполните все поля ");
        newmes = newmes + errors;
        check: false;
      } else {
        if (!this.$v.dataOfCard.phone.minLength) {
          newmes = "";
          errors.push(" введите правильный полный номер телефона");
          newmes = newmes + errors;
        }
        if (!this.$v.dataOfCard.mail.email) {
          newmes = "";
          errors.push(" введите правильный email");
          newmes = newmes + errors;
        }
        if (!this.$v.dataOfCard.link.url) {
          newmes = "";
          errors.push(" введите правильную ссылку");
          newmes = newmes + errors;
        }
        if (
          this.$v.dataOfCard.name.numeric ||
          this.$v.dataOfCard.surname.numeric
        ) {
          newmes = "";
          errors.push("в имени и фамилии должны быть только буквы!");
          newmes = newmes + errors;
        }
        if (!this.$v.dataOfCard.phone.numeric) {
          newmes = "";
          errors.push("в поле ТЕЛЕФОН должны быть только цифры!");
          newmes = newmes + errors;
        }
      }
      return newmes;
    }
  },
  validations: {
    dataOfCard: {
      name: { required, numeric },
      surname: { required, numeric },
      description: { required },
      mail: { required, email },
      link: { required, url },
      phone: { required, minLength: minLength(11), numeric }
    }
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
          }
        }
      );
      this.dataOfCard = await res.json();
    },
    async changeCard() {
      const data = {};
      for (let i = 0; i < this.formFill.length; i++) {
        data[this.formFill[i].value] = this.formFill[i].data;
      }

      let res = await fetch(
        `http://localhost:3000/visits/${this.$route.params.id}`,
        {
          method: "PUT",
          body: JSON.stringify(this.dataOfCard),
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
          }
        }
      );
      this.$router.push("/");
    }
  }
};
</script>

<style scoped>
.page-card {
  display: flex;
  justify-content: center;

  margin-top: 20px;
}

.form-cards {
  display: flex;
  flex-direction: column;
  justify-content: flex-end;

  width: 300px;
  padding: 32px;
  border-radius: 10px;
  box-shadow: 0 4px 16px #ccc;
}

.title-cards {
  text-align: center;
  margin: 0 0 17px 0;
  font-weight: normal;
}

.cards-input {
  width: 100%;
  padding: 0 0 12px 0;
  border: none;
}

.btn-card {
  background-color: rgba(63, 63, 63, 0.897);
  color: white;
  font-size: 14px;
  padding: 10px 20px;
  border: none;
  cursor: pointer;
  border-radius: 7px;
  text-align: center;

  margin-top: 10px;
}

.btn-card:hover {
  background-color: white;
  color: rgb(76, 76, 76);
}
</style>

