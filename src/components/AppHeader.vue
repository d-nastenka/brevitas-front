<template>
  <header class="head">
    <div class="head-title">
      <h1>Brevitas</h1>
    </div>
    <div class="pages">
      <!-- <div v-if="$store.state.isAuth"> -->
      <a
        v-if="$store.state.isAuth"
        class="btn_head"
        @click="$router.push('/card')"
      >
        Создать новую визитку
      </a>
      <a v-if="$store.state.isAuth" class="btn_head" @click="$router.push('/')">
        Мои визитки</a
      >
      <!-- </div> -->
      <div v-else class="btn_autor">
        <!-- <div class="btn_autor"> -->
        <a class="btn_head" @click="$router.push('/authorization')"> Войти</a>
        <!-- <router-link class="pages_ell" to="/authorization">Войти</router-link>-->
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: "Header",
  mounted() {
    console.log(this.$store);
  }
  // props: {
  //   isAuth: Boolean
  // },
};
</script>

<style>
.head {
  width: 100%;
  height: 125px;
  display: flex;
  /* justify-content: center; */
  align-items: center;

  /* background-color: #353535; */
  color: rgb(199, 199, 199);
  background-color: #003c41;
  /*background-image: url(.jpg);*/
  background-size: cover;

  margin-bottom: 50px;
  margin-right: 20px;
}

.head-title {
  margin-right: 70px;
  margin-left: 30px;

  font-size: 27px; /*шрифт*/

  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  padding-left: 50px;
}

.btn_head {
  color: rgb(227, 227, 227);
  font-size: 17px;
  padding: 10px 20px;
  border: none;
  cursor: pointer;
  border-radius: 4px;
  text-align: center;

  margin-left: 10px;
}

.pages {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.btn_autor {
  display: flex;
}
</style>
