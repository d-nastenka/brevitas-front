<template>
  <div class="reg-flex">
    <div class="form-reg">
      <div class="reg-title">
        <h3>Регистрация</h3>
      </div>

      <form @submit.prevent="addUser">
        <div class="form-input">
          <div v-for="(i, key) in formReg" :key="key">
            <div :error-messages="nameErrors" class="reg-input">
              <input
                v-model="dataReg[i.value]"
                :placeholder="i.textPlaceholder"
              />
            </div>
          </div>
          <p>
            <font color="red"> {{ nameErrors }}</font>
          </p>

          <div v-if="!nameErrors">
            <button type="submit" class="btn-card">Зарегистрироваться</button>
          </div>
          <div v-else>
            <a class="btn-card_NO">Зарегистрироваться</a>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { validationMixin } from "vuelidate";
import { required, minLength, email } from "vuelidate/lib/validators";

export default {
  name: "Reg",
  mixins: [validationMixin],
  data() {
    return {
      dataReg: {
        email: "",
        login: "",
        password: "",
        confirm: ""
      },
      formReg: [
        {
          textPlaceholder: "Почта",
          value: "email",
          data: ""
        },
        {
          textPlaceholder: "Логин",
          value: "login",
          data: ""
        },
        {
          textPlaceholder: "Пароль",
          value: "password",
          data: ""
        },
        {
          textPlaceholder: "Подтверждение пароля",
          value: "confirm",
          data: ""
        }
      ]
    };
  },
  validations: {
    dataReg: {
      email: { required, email },
      login: { required },
      password: { required, minLength: minLength(6) },
      confirm: { required }
    }
  },
  computed: {
    nameErrors() {
      const errors = [];
      var newmes = "";

      if (
        !this.$v.dataReg.login.required ||
        !this.$v.dataReg.email.required ||
        !this.$v.dataReg.password.required ||
        !this.$v.dataReg.confirm.required
      ) {
        errors.push("заполните все поля ");
        newmes = newmes + errors;
      } else {
        if (!this.$v.dataReg.email.email) {
          newmes = "";
          errors.push(" введите правильный email");
          newmes = newmes + errors;
        }
        if (this.$v.dataReg.login.numeric) {
          newmes = "";
          errors.push("в имени должны быть только буквы!");
          newmes = newmes + errors;
        }
        if (!this.$v.dataReg.password.minLength) {
          newmes = "";
          errors.push("минимальная длина пароля 6");
          newmes = newmes + errors;
        }
        if (this.$v.dataReg.password.$model != this.$v.dataReg.confirm.$model) {
          newmes = "";
          errors.push("пароли не совпадают");
          newmes = newmes + errors;
        }
      }
      return newmes;
    }
  },

  methods: {
    async addUser() {
      let res = await fetch("http://localhost:3000/auth/register", {
        method: "POST",
        body: JSON.stringify(this.dataReg),
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        }
      });

      this.$router.push("/authorization");
    }
  }
};
</script>

<style>
.reg-flex {
  display: flex;
  justify-content: center;

  margin-top: 20px;
}

.form-reg {
  display: flex;
  flex-direction: column;
  justify-content: flex-end;

  width: 300px;
  padding: 32px;
  border-radius: 10px;
  box-shadow: 0 4px 16px #ccc;
}

.reg-title {
  text-align: center;
  margin: 0 0 17px 0;
  font-weight: normal;
}

.reg-input {
  width: 100%;
  padding: 0 0 12px 0;
  border: none;
}

.btn-reg {
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

.btn-reg:hover {
  background-color: white;
  color: rgb(76, 76, 76);
}
</style>
