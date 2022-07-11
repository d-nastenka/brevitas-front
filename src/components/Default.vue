<template>
  <!-- TODO: Переверстать по макету  -->
  <div>
    <Header />
    <div class="flexCtr">
  
      <div class="listbord">
      <carousel>
        <slide class="sliders">
         <p>
          Создать визитку самому
         </p>
        </slide>
        <slide>
          Slide 2 Content
        </slide>
         <slide>
          Slide 1 Content
        </slide>
        <slide>
          Slide 2 Content
        </slide>
         <slide>
          Slide 1 Content
        </slide>
        <slide>
          Slide 2 Content
        </slide>
         <slide>
          Slide 1 Content
        </slide>
        <slide>
          Slide 2 Content
        </slide>
      </carousel>
        <!--контент меняющийся-->
      </div>
      <div class="content">
        <h2 style="margin-top: 0px;">Просто создайте свою визитку, мы обо всем позаботились</h2>
        <div class="cart2">
          <div class="cart">
            <img src="/image/gl1.png" alt="">
            <p>Зайдите в редактор</p>
          </div>
          <div class="cart">
            <img  src="/image/arrow.png" alt style="margin-bottom: 80px;" >
          </div>
          <div class="cart">
            <img src="/image/gl2.png" alt style="margin-top: 22px;">
            <p style="margin-top: 52px;">Скачайте в любом удобном размере</p>
          </div>          
        </div>
        <a class="btn-reg_NO">Войти</a>
      </div>
      <div class="contentvisints">
        <h3 style="margin-top: 0px; margin-bottom: 60px;">Примеры визиток</h3>
      <div class="visits">
        <img src="/image/visit.png" alt="">
        <img src="/image/visit.png" alt="">
        <img src="/image/visit.png" alt="">
      </div>
      
      </div>

    </div>
    <Footer />
  </div>
</template>

<script>
import Header from "./AppHeader.vue";
import Footer from "./AppFooter.vue";


import Vue from 'vue';
import VueCarousel from 'vue-carousel';
Vue.use(VueCarousel);
import { Carousel, Slide } from 'vue-carousel';







export default {
  components: {
    Header,
    Footer,
    Carousel,
    Slide
  }
};
</script>

<style>
.flexCtr {
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  flex-wrap: nowrap;
  align-items: center;
}

.listbord {
  margin-top: 48px; /*исправить*/
  width: 1320px;
  height: 683px;
  background: #ffffff;
  border-radius: 20px;
}
.content {
  margin-top: 137px;
  height: 683px;
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  align-items: center;
}
.content h2 {
  width: 1026px;
  height: 150px;

  font-family: "Tenor Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 64px;
  line-height: 75px;
  display: flex;
  align-items: center;

  color: #000000;
}

.cart2{
  width: 754px;
  height: 248px;
  margin-bottom: 30px;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-items: center;
}
.cart{
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  align-items: center;
}

.cart p{
width: 248px;
height: 74px;

font-family: 'Roboto';
font-style: normal;
font-weight: 400;
font-size: 24px;
line-height: 28px;
display: flex;
align-items: center;
text-align: center;
justify-content: center;
color: #000000;
}

.btn-reg_NO {/*доделать эту долбаную кнопку))*/ 
  background-color: #65989d;
  color: white;
  font-size: 17px;
  padding: 10px 20px;
  border: none;
  border-radius: 74px;
  text-align: center;
  transition: all 0.5s;
  width: 202px;
  height: 45px;
  margin-top: 50px;
  margin-bottom: 30px;
}
.contentvisints {
  height: 476px;
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: flex-start;
}

.contentvisints h3{
  width: 362px;
  height: 47px;
  left: 539px;
  top: 1472px;

  font-family: 'Tenor Sans';
  font-style: normal;
  font-weight: 400;
  font-size: 40px;
  line-height: 47px;
  /* identical to box height */

  display: flex;
  align-items: center;
  text-align: center;
  letter-spacing: 0.232836px;

  color: #000000;
}
.visits img{
  margin-left: 21px;
  margin-right: 21px;
}

.sliders p{
width: 555px;
height: 150px;

font-family: 'Tenor Sans';
font-style: normal;
font-weight: 400;
font-size: 64px;
line-height: 75px;
display: flex;
align-items: center;

color: #016670;
}
</style>
