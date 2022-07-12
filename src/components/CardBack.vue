<template>
  <div
    class="flex-card"
    :style="{
      background: card.backgroundColor
    }"
  >
    <div
      class="contacts"
      :style="{
        color: card.linksColor,
        'font-size': `${card.sizeCont}px`
      }"
    >
      <div class="data-card">
        <a :href="mail" target="_blank">{{ card.mail }}</a>
      </div>
      <div class="data-card">
        <a :href="link" target="_blank">{{ card.link }}</a>
      </div>
      <div class="data-card">
        <a :href="numberPhone" target="_blank">{{ card.phone }}</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CradBack",
  props: {
    card: Object
  },
  computed: {
    mail() {
      return `mailto:${this.card?.mail}`;
    },
    link() {
      return this.card?.link;
    },
    numberPhone() {
      return `tel:${this.card?.phone}`;
    },
    btnText() {
      return this.showBtn ? "Обратная сторона" : "Лицевая сторона";
    }
  }
};
</script>

<style scoped>
.data-card {
  display: flex;
  /* flex-direction: column; */
  /* justify-content: center; */

  /* font-family: serif; */
}

.data-user {
  display: flex;
  flex-direction: column;

  font-size: 30px;
  font-weight: bold;
}

.contacts {
  display: flex;
  flex-direction: column;
  font-size: 20px;
}
</style>
