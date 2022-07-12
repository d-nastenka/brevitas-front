<template>
  <div
    class="flex-card"
    :style="{
      background: card.backgroundColor
    }"
  >
    <div
      class="data-user"
      :style="{
        color: card.textColor,

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
    
  </div>
</template>

<script>
export default {
  name: "CardFront",
  props: {
    card: Object,
  }
};
</script>

<style scoped>
.flex-card {
    /* display: flex; */
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


</style>
