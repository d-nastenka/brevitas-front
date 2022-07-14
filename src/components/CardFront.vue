<template>
  <div class="flex-card">
    <div
      class="data-user"
      :style="{
        color: card.color.text,
        'font-size': `${card.sizes.text}px`,
        'align-items': card.positions.text
      }"
    >
      <div class="data-card">
        {{ card.name }}
      </div>
      <div class="data-card">
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
    card: Object
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
