<template>
  <div class="auth-flex">
    <div class="form-auth">
      <div class="auth-title">
        <h3>Авторизация</h3>
      </div>

      <form @submit.prevent="sendAuth">
        <div v-for="(item, key) in formAuth" :key="key">
          <div class="auth-input">
            <input
              v-model="dataAuth[item.value]"
              required
              :placeholder="item.textPlaceholder"
            />
          </div>
        </div>
        <button type="submit" class="btn-auth">Войти</button>
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
</template>

<script>
import Reg from "./Reg.vue";

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
      this.$router.push("/");
    }
  }
};
</script>

<style>
.auth-flex {
  display: flex;
  justify-content: center;

  margin-top: 20px;
}

.form-auth {
  display: flex;
  flex-direction: column;
  justify-content: flex-end;

  width: 300px;
  padding: 32px;
  border-radius: 10px;
  box-shadow: 0 4px 16px #ccc;
}

.auth-title {
  text-align: center;
  margin: 0 0 17px 0;
  font-weight: normal;
}

.auth-input {
  width: 100%;
  padding: 0 0 12px 0;
  border: none;
}

.btn-auth {
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

.btn-auth:hover {
  background-color: white;
  color: rgb(76, 76, 76);
}
.btn-auth {
  background-color: rgba(63, 63, 63, 0.897);
  color: white;
  font-size: 14px;
  padding: 10px 20px;
  border: none;
  cursor: pointer;
  border-radius: 7px;
  text-align: center;
  transition: all 0.5s;
  margin-top: 10px;
}

.btn-auth:hover {
  background-color: rgb(186, 220, 222);
  color: rgb(76, 76, 76);
}

.move-reg {
  text-align: center;
  padding-right: 20px;
}

.btn_head_autor {
  color: rgb(5, 5, 5);
  font-size: 14px;
  padding: 10px 20px;
  border: none;
  cursor: pointer;
  border-radius: 4px;
  text-align: center;

  margin-left: 10px;
}
.btn_head_autor {
  color: rgb(5, 5, 5);
  font-size: 14px;
  padding: 10px 20px;
  border: none;
  cursor: pointer;
  border-radius: 4px;
  text-align: center;
  transition: all 0.5s;
  margin-left: 10px;
}

.btn_head_autor:hover {
  color: rgb(75, 75, 76);
  font-size: 16px;
}
</style>
