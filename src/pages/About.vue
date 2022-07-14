<template>
  <div class="flex-cont">
    <div>
      <Header />
    </div>
    <div class="page-about">
      <div class="about-title">
        <a>Контакты</a>
      </div>
      <div class="about-cont">
        <div class="info">
          <div class="about-name">
            <p>Анастасия Дедюхина</p>
          </div>
          <div class="about-img">
            <img class="img-p" src="/image/nastya.jpg" alt="" />
          </div>
          <div class="about-prof">
            <p>Front-end программист</p>
          </div>
          <div class="about-contacts">
            <img class="img-tg" src="/image/tg.png" alt="" />
            <a class="links" href="https://t.me/d_nastenkaa" target="_blank"
              >@d_nastenkaa</a
            >
          </div>
        </div>
        <div class="info">
          <div class="about-name">
            <p>Дарья Черных</p>
          </div>
          <div class="about-img">
            <!-- <img class="img-p" src="/image/nastya.jpg" alt="" /> -->
          </div>
          <div class="about-prof">
            <p>Front-end программист</p>
          </div>
          <div class="about-contacts">
            <img class="img-tg" src="/image/tg.png" alt="" />
            <a class="links" href="https://t.me/goMantra" target="_blank"
              >@goMantra</a
            >
          </div>
        </div>
        <div class="info">
          <div class="about-name">
            <p>Максим Пряхин</p>
          </div>
          <div class="about-img">
            <img class="img-p" src="/image/maks.jpg" alt="" />
          </div>
          <div class="about-prof">
            <p>Back-end программист</p>
          </div>
          <div class="about-contacts">
            <img class="img-tg" src="/image/tg.png" alt="" />
            <a class="links" href="https://t.me/Mattakushi1337" target="_blank"
              >@Mattakushi1337</a
            >
          </div>
        </div>
        <div class="info">
          <div class="about-name">
            <p>Анастасия Оглоблина</p>
          </div>
          <div class="about-img">
            <!-- <img class="img-p" src="/image/nastya.jpg" alt="" /> -->
          </div>
          <div class="about-prof">
            <p>Дизайнер</p>
          </div>
          <div class="about-contacts">
            <img class="img-tg" src="/image/tg.png" alt="" />
            <a class="links" href="https://t.me/kimler21" target="_blank"
              >@kimler21</a
            >
          </div>
        </div>
      </div>
    </div>
    <div>
      <Footer />
    </div>
  </div>
</template>

<script>
import Header from "../components/AppHeader.vue";
import Footer from "../components/AppFooter.vue";

export default {
  name: "About",
  components: {
    Header,
    Footer
  },
  data() {
    return {};
  }
};
</script>

<style scoped>
.flex-cont {
  /* height: 100vh; */
  /* height: 100vh; */
  /* display: flex;
  flex-direction: column;
  justify-content: space-between; */
}
.page-about {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-bottom: 40px;
  min-height: calc(100vh - 144px);
}

.about-title {
  font-family: "Tenor Sans";
  font-style: normal;

  font-size: 36px;
  line-height: 42px;
  letter-spacing: 0.232836px;

  color: #016670;
  padding-top: 68.75px;
}

.about-cont {
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  padding-top: 45px;
  padding-right: 350px;
  padding-left: 350px;
}

.info {
  display: flex;
  flex-direction: column;
  align-items: center;
}

p {
  font-family: "Roboto";
  font-style: normal;

  font-size: 24px;
  line-height: 28px;
  /* display: flex;
  align-items: center;
  text-align: center; */
  letter-spacing: 0.232836px;

  color: #000000;
}

.about-prof {
  padding-top: 25px;
}

.about-prof p {
  width: 208px;
  height: 54px;
}

.img-p {
  width: 273px;
  height: 273px;
  border-radius: 5px;
  margin-top: 27px;
}
.img-tg {
  width: 40px;
  height: 40px;
}

.links {
  font-family: "Roboto";
  font-style: normal;
  font-size: 24px;
  line-height: 28px;
  /* display: flex;
  align-items: center;
  text-align: center; */
  letter-spacing: 0.232836px;

  color: #000000;
  text-decoration: none;
  color: inherit;
}

.about-contacts {
  display: flex;
  flex-direction: row;
  align-content: center;
  align-items: center;
  justify-content: center;
  padding-top: 47px;
  padding-bottom: 47px;
}
</style>
