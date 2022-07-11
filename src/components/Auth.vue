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

        <form @submit.prevent="sendAuth" class="form-flexx">
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
          <a type="submit" class="btn-card"> <p class="btn-card_text">Войти</p> </a>
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

/* .btn {
  width: 150px;
} */
.back-cont {
  background: linear-gradient(
    180deg,
    #016670 0%,
    rgba(217, 217, 217, 0.59) 100%
  );
  width: 100%;
  height: 100vh;
}


/* для фикса бага с обрезанием стр нужно добавить свойство только для этой странички
#app{
  height: 100%;
}
*/

.logo-title {
  font-family: "Tenor Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 50px;
  line-height: 75px;
  height: 170px;
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
  align-items: center;

  /* align-items: center; */

  /* padding-top: 50px; */
  /* padding-bottom: 50px; */

  /* height: 100%; */

  background: linear-gradient(
    180deg,
    #016670 0%,
    rgba(217, 217, 217, 0.59) 100%
  );
  width: 100%;
  height: 100%;
  

}

.form-auth {
  display: flex;
  flex-direction: column;
  width: 588px;
  height: 580px;
  box-sizing: border-box;
  background: rgba(255, 255, 255, 0.1);
  box-shadow: 4px 4px 15px rgba(1, 102, 112, 0.31);
  backdrop-filter: blur(15px);
  border-radius: 20px;
  align-items: center;
  flex-wrap: nowrap;
  justify-content: space-evenly;
  
}

.auth-title {
  font-family: "Tenor Sans";
  font-style: normal;
  font-size: 27px;

  display: flex;
  align-items: center;
  text-align: center;
  justify-content: center;

  letter-spacing: 0.232836px;

  color: #e4e7e7;
}

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
