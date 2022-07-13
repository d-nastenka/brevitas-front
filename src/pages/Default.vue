<template>

  <!-- TODO: размер текста поменять с 15 на 17 хотя бы
  
   кнопке переделать на ерроре
  
  адаптацию сделать-->

  <div>
    <Header />
    <div class="flexCtr">
      
      <div class="listbord">
        <hr>
      <carousel>
        <slide class="slider">
         <div class="sl_ell_1">
          <h3>
          Создать визитку самому
         </h3>
          <p>
          Конструктор визиток - это сайт где вы можете создать визитку по своему вкусу на вашем компьютере
          </p>
         </div>
         
        </slide>
        <slide>
          <div class="images">
            <img src="/image/visit.png" alt="">
         </div>
        </slide>
         <slide>
          <div class="images">
            <img src="/image/visit.png" alt="">
         </div>
        </slide>
        <slide class="sliderR">
         <div class="sl_ell_2">
          <h3>
           Ключевые особенности
         </h3>
          <p>
          Мы создали сайт для удобного офрмления визиток с вашего компьютера.</p>
         </div>
        
        </slide>
         <slide class="slider">
         <div class="sl_ell_1">
          <h3>
         Сайт конструктор
         </h3>
          <p>
         Воплощайте в жизнь любые ваши идеи! Наш сайт поможет вам воплотить их.</p>
         </div>
         
        </slide>
        <slide>
          <div class="images">
            <img src="/image/visit.png" alt="">
         </div>
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
        <a class="btn-card" @click="$router.push('/authorization')"><p class="btn-card_text">Начать</p> </a>
      </div>
      <div class="contentvisints">
        <h3 style="margin-top: 40px; margin-bottom: 60px;">Примеры визиток</h3>
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
import Header from "../components/AppHeader.vue";
import Footer from "../components/AppFooter.vue";
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
  height: 587px;
  background: #ffffff;
  border-radius: 20px;
}

.listbord hr{
  width: 80%;
  margin-top: 45px; 

  height: 0px;
  border: 0.5px solid #096B73;
}
.content {
  margin-top: 137px;
  height: 583px;
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

.slider {
  width: 1000px;
  height: 440px;
}
.sliderR{
  width: 1000px;
  height: 440px;
}
.slider h3{
  width: 555px;
  height: 150px;

  font-family: 'Tenor Sans';
  font-style: normal;
  font-weight: 400;
  font-size: 64px;
  line-height: 75px;
  display: flex;
  align-items: center;
  text-align: left;

  color: #016670;
}
.slider p{
  width: 580px;
  height: 74px;
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 28px;
  display: flex;
  align-items: center;
  text-align: left;
  justify-content: center;
  color: #000000;
}
.sliderR h3{
  width: 555px;
  height: 150px;

  font-family: 'Tenor Sans';
  font-style: normal;
  font-weight: 400;
  font-size: 64px;
  line-height: 75px;
  display: flex;
  align-items: center;
  text-align: right;

  color: #016670;
}

.sliderR p{
  width: 580px;
  height: 74px;
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 28px;
  display: flex;
  align-items: center;
  text-align: right;
  justify-content: center;
  color: #000000;
}

.sl_ell_1{
  display: flex;
  margin-left: 80px;
  flex-direction: column;
  flex-wrap: nowrap;
  align-items: center;
}
.sl_ell_2{
  display: flex;
  margin-right: 80px;
  flex-direction: column;
  flex-wrap: nowrap;
  align-items: center;
}
.images{
  height: 440px;
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: center;
}
</style>
