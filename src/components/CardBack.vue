<template>
  <div class="flex-card">
    <div
      class="contacts"
      :style="{
        color: card.color.links,
        'font-size': `${card.sizes.links}px`,
        'align-items': card.positions.links
      }"
    >
      <div class="data-card">
        <a class="links" :href="mail" target="_blank">{{ card.mail }}</a>
      </div>
      <div class="data-card">
        <a class="links" :href="link" target="_blank">{{ card.link }}</a>
      </div>
      <div class="data-card">
        <a class="links" :href="numberPhone" target="_blank">{{ card.phone }}</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CardBack",
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
a {
  text-decoration: none;
  color: inherit; 
}
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

.links{
  text-decoration: none;
}
</style>
