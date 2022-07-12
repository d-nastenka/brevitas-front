<template>
  <div
    class="field-card"
    :style="{
      background: card.backgroundColor,
    }"
  >
    <link href="https://css.gg/css" rel="stylesheet" />
    <div
      class="data-user"
      :style="{
        color: card.textColor,
        'align-items': card.textPosition,
        'justify-content': card.textJustify
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
    

    <div class="buttons">
      <button class="btn" @click="changeCard(card)">
        <i class="gg-pen"></i>
      </button>

      <button class="btn" @click="seeCard(card)">
        <i class="gg-eye"></i>
      </button>
      <button class="btn" @click="deleteCard(card)">
        <i class="gg-trash"></i>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "LoadingCards",
  props: {
    card: Object
  },
  data() {
    return {
      dataCard: {
        name: "",
        surname: "",
        description: "",
        mail: "",
        link: "",
        phone: "",
        backgroundColor: "",
        textColor: "",
        linksColor: "",
        textPosition: ""
      }
    };
  },
  mounted() {},
  methods: {
    changeCard(item) {
      this.$router.push(`/changecard/${item._id}`);
    },
    seeCard(item) {
      this.$router.push(`/seecard/${item._id}`);
    },
    deleteCard(item) {
      this.$emit("deleteCard", item);
    }
  }
};
</script>

<style scoped>
.field-card {
  width: 320px;
  height: 200px;

  margin-left: 72px;
  margin-right: 72px;

  border: none;

  box-shadow: 0 2px 4px rgb(134, 134, 134);
  /* background: linear-gradient(45deg, #77c2ea, #464646); */

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  border-radius: 5px;
  
}
.data-card {
  display: flex;
  padding: 0px 20px 0px 20px;
  /* flex-direction: column; */
  /* justify-content: center; */
  /* padding-top: 30px; */
}

.data-user {
  display: flex;
  flex-direction: column;

  font-size: 19px;
  font-weight: normal;
  /* padding-top: 25px; */
  
  color: #e1e1e1;
}

.contacts {
  display: flex;
  flex-direction: column;
  /* position: absolute; */
  font-size: 15px;
  padding-top: 30px;
  color: #c7c7c7;
}

.buttons {
  display: flex;
  flex-direction: row;
  justify-content: space-around;

  overflow: hidden;
  padding: 0px 27px 0px 27px;
}

.buttons .btn {
  border: none;
  background-color: rgba(28, 28, 28, 0);

  color: rgb(61, 61, 61);

  margin: 0 0 -200px 0;
  transition: margin 0.2s;
  cursor: pointer;
}
.imges-card:hover .btn {
  margin: 10px 0 10px 0;
}
.buttons .btn:hover {
  border: none;
  background-color: rgba(28, 28, 28, 0);

  color: rgb(22, 22, 22);
  cursor: pointer;
}
</style>
