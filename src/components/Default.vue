<template>
  <!-- TODO: Переверстать по макету  -->
  <div>
    <Header />
    <div class="flexCtr">
      <div class="listbord">
        <!--контент меняющийся-->
      </div>
      <div class="content">
        <h2>Просто создайте свою визитку мы обо всем позаботились</h2>
      </div>
      <div class="contentvisints">
        <h3>Примеры визиток</h3>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import Header from "./AppHeader.vue";
import Footer from "./AppFooter.vue";

export default {
  components: {
    Header,
    Footer
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
  height: 683px;
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

.contentvisints {
  height: 476px;
}
</style>
