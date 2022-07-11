<template>
  <div
    class="flex-card"
    :style="{
      background: card.backgroundColor
    }"
  >
    <div
      v-if="btnSide"
      class="data-user"
      :style="{
        color: card.textColor,
        'align-items': card.textPosition,
        'font-size': `${card.sizeText}px`
      }"
    >
      <div class="data-card">
        {{ card.name }}
        {{ card.surname }}
      </div>

      <div class="data-card">
        {{ card.description }}
      </div>
    </div>
    <div
      v-else
      class="contacts"
      :style="{
        color: card.linksColor,
        'align-items': card.textPosition,
        'font-size': `${card.sizeCont}px`
      }"
    >
      <div class="data-card">
        {{ card.mail }}
      </div>
      <div class="data-card">
        {{ card.link }}
      </div>
      <div class="data-card">
        {{ card.phone }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Card",
  props: {
    card: Object,
    btnSide: Boolean
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
