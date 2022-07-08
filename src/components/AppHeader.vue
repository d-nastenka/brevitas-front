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
  /* height: 15%; */
  display: flex;

  align-items: center;
  background-size: cover;

  background: #f5f5f5;

  height: 69px;
  left: 0px;
  border: 1px solid #c1c1c1;
}

.pages {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}

.head_title {
  /* display: flex;
  flex-direction: row;
  justify-content: flex-start; */
  /* padding-left: 50px; */

  /* position: absolute; */
  width: 142px;
  height: 44px;
  left: 0px;
  top: 11px;

  font-family: "Inter";
  font-style: normal;
  font-weight: 500;
  font-size: 36px;
  line-height: 44px;
  /* identical to box height */

  display: flex;
  align-items: center;
  text-align: center;
  letter-spacing: 0.232836px;

  color: #016670;
}
.btn_head {
  /* display: flex;
  flex-direction: column;
  justify-content: flex-end; */

  color: #3d4644;
  font-size: 17px;
  padding: 10px 20px;
  border: none;
  cursor: pointer;
  border-radius: 4px;
  text-align: center;

  /* position: absolute; */
  /* width: 63px;
  height: 28px; */
  /* left: 1049px; */
  /* top: 25px; */

  /* font-family: "Roboto"; */
  font-style: normal;
  font-weight: 400;
  font-size: 17px;
  line-height: 28px;
  display: flex;
  align-items: center;
  text-align: center;
  letter-spacing: 0.232836px;

  color: #000000;
}

/* .pages {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
} */

/* .btn_autor {
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  align-items: center;
} */
</style>
