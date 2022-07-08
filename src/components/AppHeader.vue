<template>
  <header>

    <div class="head_title" @click="$router.push('/')">
      <h1>Brevitas</h1>
    </div>
    <div class="btn_head">
      <a v-if="isAuth" @click="$router.push('/card')"> Создать новую визитку</a>
      <a v-if="isAuth" @click="$router.push('/mycards')"> Мои визитки</a>
      <a v-if="isAuth" @click="usLogout">Выход</a>
      <div v-else>
        <a class="btn_autor" @click="$router.push('/authorization')">Войти</a>
      </div>
    </div>
  </header>
</template>

<script>
import { mapMutations, mapState } from "vuex";

export default {
  name: "Header",
  mounted() {
    console.log(this.$store);
  },
  methods: {
    // TODO: Нет валидации
    async usLogout() {
      const res = await fetch("http://localhost:3000/auth/logout", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        credentials: "include"
      });
      if (res.ok) {
        this.$router.push("/authorization");
      }
    },
    ...mapMutations("mAuth", ["ChangeAuth"])
  },
  computed: {
    ...mapState("mAuth", ["isAuth"])
  }
  // computed: mapState ({
  //     //return this.$store.state.isAuth;
  //     isAuthUs: state => state.isAuth,
  //   }),
};
</script>

<style>
header {
  width: 100%;
  display: flex;
  align-items: center;

  background: #f5f5f5;

  height: 69px;
  /* left: 0px; */
  outline: 2px solid #c1c1c1;

  flex-direction: row;

  justify-content: space-between;
  align-items: center;

}

header div {
  display: flex;
  padding-right: 30px;
}

.head_title {

  font-family: "Inter";
  font-style: normal;
  font-weight: 500;
  line-height: 44px;

  display: flex;
  align-items: center;
  text-align: center;
  letter-spacing: 0.232836px;

  color: #016670;
  cursor: pointer;

  padding-left: 60px;
}
.head_title h1 {
  font-size: 36px;
}

.btn_head a {
  /* padding: 10px 20px; */
  cursor: pointer;
  border-radius: 4px;
  text-align: center;

  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 17px;
  line-height: 28px;
  display: flex;
  align-items: center;
  text-align: center;
  letter-spacing: 0.232836px;

  color: #000000;
  
  padding-left: 25px;
}
</style>
