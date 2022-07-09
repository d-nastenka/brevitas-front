<template>
  <div class="auth-flex">
    <div class="logo-title" @click="$router.push('/')">
      <h3>Brevitas</h3>
    </div>
    <div class="form-auth">
      <div class="auth-title">
        <h3>Вход</h3>
      </div>

      <form @submit.prevent="sendAuth">
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
      if (res.ok) {
        this.$router.push("/");
      }
    }
  }
};
</script>

<style>
.logo-title {
  font-family: "Tenor Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 50px;
  line-height: 75px;
  /* identical to box height */

  display: flex;
  align-items: center;
  text-align: center;
  letter-spacing: 0.232836px;

  color: #ffffff;

  cursor: pointer;
}

.auth-flex {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  /* align-content: space-between; */
  align-items: center;
  /* align-items: center; */

  background: linear-gradient(
    180deg,
    #016670 0%,
    rgba(217, 217, 217, 0.59) 100%
  );
  width: 100%;
  height: 100%;
  /* padding-top: 50px; */
  /* padding-bottom: 50px; */

  /* height: 100%; */
}

.form-auth {
  /* display: flex;
  flex-direction: column;
  justify-content: center;

  width: 300px;
  padding: 10px;
  background-color: #ffffff63;
  border-radius: 10px;
  height: 45%; */
  display: flex;
  flex-direction: column;
  justify-content: space-b;

  width: 450px;
  height: 480px;
  box-sizing: border-box;

  background: rgba(255, 255, 255, 0.1);
  box-shadow: 4px 4px 15px rgba(1, 102, 112, 0.31);
  backdrop-filter: blur(15px);
  /* Note: backdrop-filter has minimal browser support */

  border-radius: 20px;
}

.auth-title {
  font-family: "Tenor Sans";
  font-style: normal;
  font-size: 30px;

  display: flex;
  align-items: center;
  text-align: center;
  justify-content: center;

  letter-spacing: 0.232836px;

  color: #e4e7e7;
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

.btn-auth {
  background-color: #096b73;
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
