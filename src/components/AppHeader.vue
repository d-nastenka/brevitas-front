<template>
  <header class="head">
    
    <div class="pages">

      <div class="head_title">
        <h1>Brevitas</h1>
      </div>

      <a  v-if="$store.state.isAuth" class="btn_head" @click="$router.push('/card')">
      Создать новую визитку</a>
      <a  v-if="$store.state.isAuth" class="btn_head" @click="$router.push('/')"> Мои визитки</a>
      <div v-else class="btn_head">     
        <a class="btn_autor" @click="$router.push('/authorization')"> <img class="img_reg" src="/image/reg.png" alt=""> Войти</a>

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
  height: 105px;
  display: flex;
  /* justify-content: center; */
  align-items: center;
  background-size: cover;
  margin-bottom: 50px;
  margin-right: 20px;
  
  
  /*варианты цветов*/
 background: linear-gradient(70deg, #026670, #9fedd7);

 /*background: linear-gradient(70deg, #1672f9, #46c7ff);*/
/*#46c7ff*/
  
}

.head_title {
  margin-right: 70px;
  margin-left: 30px;

  font-size: 27px; /*шрифт*/
 
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  padding-left: 50px;


 color: #fce4de;

  /*бакграунд*/ 
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

  margin-left: 10px;
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
  align-items: center
}
.img_reg{
  width: 25px;
  height: 30px;
}
</style>
