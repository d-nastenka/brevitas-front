<template>
  <div class="back-cont">
    <div class="auth-flex">
      <div class="logo-title" @click="$router.push('/')">
        <h3>Brevitas</h3>
      </div>
      <div class="form-auth">
        <div class="auth-title">
          <h3>Вход</h3>
        </div>

        <form  class="form-flexx">
          <div v-for="(item, key) in formAuth" :key="key">
            <div class="auth-input">
              <input
                class="input-auth"
                v-model="dataAuth[item.value]"
                required
                :placeholder="item.textPlaceholder"
              />
            </div>
          </div>
          <a @click="sendAuth" class="btn-card"> <p class="btn-card_text">Войти</p> </a>
          <div class="move-reg">
            <p>
              <a class="btn_head_autor" @click="$router.push('/registration')"
                >Зарегистрироваться</a
              >
            </p>
          </div>
          <router-view />
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import Reg from "../pages/Reg.vue";

export default {
  name: "Auth",
  components: {
    Reg
  },
  data() {
    return {
      dataAuth: {
        login: "",
        password: ""
      },
      AuthEr: {},
      formAuth: [
        {
          textPlaceholder: "Логин",
          value: "login",
          data: ""
        },
        {
          textPlaceholder: "Пароль",
          value: "password",
          data: ""
        }
      ]
    };
  },
  methods: {
    async sendAuth() {
      let res = await fetch("http://localhost:3000/auth/login", {
        method: "POST",
        body: JSON.stringify(this.dataAuth),
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        credentials: "include"
      });
      if (res.ok) {
        this.$router.push("/");
      }
    }
  }
};
</script>

<style>



.form-flexx {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  height: 60%;
  flex-wrap: nowrap;
  align-content: stretch;
}

.auth-input {
  width: 100%;
  padding: 0 0 12px 0;
  border: none;
}

.input-auth {
  padding: 7px 19px;
  margin-bottom: 2px;
  border: 0px;
  width: 300px;
  border-bottom: 1px solid #ffffff;
  background-color: rgba(0, 0, 0, 0);
  outline: none;
}

.input-auth:focus {
  background-color: rgba(255, 255, 255, 0.347);
}

::placeholder {
  font-family: "Roboto";
  font-style: normal;
  font-size: 19px;

  letter-spacing: 0.232836px;

  color: #ffffff;
}

.move-reg {
  text-align: center;
}

.btn_head_autor {
  color: #096B73;
  font-size: 24px;
  border: none;
  cursor: pointer;
  transition: all 0.5s;
}

.btn_head_autor:hover {
  color: #06474d;
  font-size: 26px;
}
</style>
