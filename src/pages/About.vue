<template>
  <div class="flex-cont">
    <div>
      <Header />
    </div>
    <div>
      <a>Контакты</a>
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
  }
};
</script>

<style scoped>
.flex-cont {
  /* height: 100vh; */
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
</style>
