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
import Header from "./AppHeader.vue";
import Footer from "./AppFooter.vue";

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
