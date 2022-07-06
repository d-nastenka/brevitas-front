<template>
  <header class="head">
    <div class="pages">
      <h1 class="head_title">Brevitas</h1>
      <a class="btn_head" @click="$router.push('/')">
        Главная страница
      </a>
      <a v-if="isAuth" class="btn_head" @click="$router.push('/card')">
        Создать новую визитку</a
      >
      <a v-if="isAuth" class="btn_head" @click="$router.push('/mycards')">
        Мои визитки</a
      >
      <a v-if="isAuth" class="btn_head" @click="usLogout">Выход</a>
      <div v-else class="btn_head">
        <a class="btn_autor" @click="$router.push('/authorization')">
          <img class="img_reg" src="/image/reg.png" alt="" />Войти</a
        >
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
    async usLogout() {
      const res = await fetch("http://localhost:3000/auth/logout", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        credentials: "include"
      });
      this.$router.push("/authorization");
    },
    ...mapMutations(["ChangeAuth"])
  },
  computed: {
    ...mapState(["isAuth"])
  }
  // computed: mapState ({
  //     //return this.$store.state.isAuth;
  //     isAuthUs: state => state.isAuth,
  //   }),
};
</script>

<style>
.head {
  width: 100%;
  height: 15%;
  display: flex;
  /* justify-content: center; */
  align-items: center;
  background-size: cover;
  margin-right: 20px;

  /*варианты цветов*/
  background: linear-gradient(70deg, #026670, #9fedd7);

  /*background: linear-gradient(70deg, #1672f9, #46c7ff);*/
  /*#46c7ff*/
}

.head_title {
  margin-right: 50px;

  font-size: 55px; /*шрифт*/
  font-family: "Ubuntu", sans-serif;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  padding-left: 50px;

  color: #fce4de;

  /*/*бакграунд*/
  /*background-image: linear-gradient(to right,#fce4de, #fcfcfc);
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;*/
}
.btn_head {
  color: #fce4de;
  font-size: 17px;
  padding: 10px 20px;
  border: none;
  cursor: pointer;
  border-radius: 4px;
  text-align: center;
}

.pages {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}

.btn_autor {
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  align-items: center;
}
.img_reg {
  width: 25px;
  height: 30px;
}
</style>
