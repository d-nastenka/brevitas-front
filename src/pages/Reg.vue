<template>
  <div class="back-cont">
    <div class="auth-flex">
      <div class="logo-title" @click="$router.push('/')">
        <h3>Brevitas</h3>
      </div>
      <div class="form-auth">
        <div class="auth-title">
          <h3>Регистрация</h3>
        </div>

        <form class="form-flex">
      
          <div v-for="(i, key) in formReg" :key="key">
            <div :error-messages="nameErrors" class="reg-input">
              <input
                class="input-auth"
                v-model="dataReg[i.value]"
                :placeholder="i.textPlaceholder"
              />
            </div>
          </div>
          <p>
            <font color="red"> {{ nameErrors }}</font>
          </p>
          
          
         
        </form>
        <div v-if="!nameErrors">
            <a @click="addUser" type="submit" class="btn">Зарегистрироваться</a>
          </div>
          <div v-else>
            <a class="btn_NO">Зарегистрироваться</a>
          </div>
      </div>
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
    // TODO: Отрефакторить
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
        },
        credentials: "include"
      });
      console.log(res);
      if (res.ok) {
        this.$router.push("/authorization");
      }
    }
  }
};
</script>

<style>
.back-cont {
  background: linear-gradient(
    180deg,
    #016670 0%,
    rgba(217, 217, 217, 0.59) 100%
  );
  width: 100%;
  height: 100vh;
}

.reg-flex {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  /* align-content: space-between; */
  align-items: center;
}

.form-flex {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  height: 50%;
  flex-wrap: nowrap;
}

.reg-input {
  width: 100%;
  padding: 0 0 12px 0;
  border: none;
}

::placeholder {
  font-family: "Roboto";
  font-style: normal;
  font-size: 19px;

  letter-spacing: 0.232836px;

  color: #ffffff;
}
</style>
