<template>
  <!-- <div class="field-card-flex"> -->
  <div
    class="field-card"
    :style="{
      background: card.color.background,
      'align-items': card.positions.text,
      'justify-content': card.justify.text
    }"
  >
    <link href="https://css.gg/css" rel="stylesheet" />

    <CardFront :card="card" />

    <!-- <div class="buttons">
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
  </div> -->
    <div class="buttons">
      <button class="btn1" @click="changeCard(card)">
        <img src="/image/change.png" alt="" />
      </button>

      <button class="btn1" @click="seeCard(card)">
        <img src="/image/look.png" alt="" />
      </button>
      <button class="btn1" @click="deleteCard(card)">
        <img src="/image/delete.png" alt="" />
      </button>
    </div>
  </div>
</template>

<script>
import CardFront from "./CardFront.vue";
export default {
  name: "LoadingCards",
  components: {
    CardFront
  },
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
        color: {
          background: "",
          text: "",
          links: ""
        },
        positions: {
          text: "",
          links: ""
        },
        sizes: {
          text: 30,
          links: 20
        },
        justify: {
          text: "",
          links: ""
        }
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
  display: flex;
  flex-direction: column;
  position: relative;

  width: 450px;
  height: 250px;
  padding: 32px;
  border-radius: 5px;
  box-shadow: 0 4px 16px #ccc;
  margin-top: 20px;
}
.data-card {
  display: flex;
}

.data-user {
  display: flex;
  flex-direction: column;

  font-size: 19px;
  font-weight: normal;
  /* padding-top: 25px; */

  color: #e1e1e1;
}

.buttons {
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;

  overflow: hidden;

  position: absolute;
  bottom: 0;
  left: 0;

  left: 50%;
  margin-right: -50%;
  transform: translate(-50%, 0%);
}

.buttons .btn1 {
  border: none;
  background-color: rgba(28, 28, 28, 0);
  padding: 0px 27px 0px 27px;
  color: rgb(0, 0, 0);

  margin: 0 0 -200px 0;
  transition: margin 0.2s;
  cursor: pointer;
  /* display: flex;
  justify-content: center;
  align-items: center; */
}
.imges-card:hover .btn1 {
  margin: 10px 0 10px 0;
}

img {
  width: 40px;
  height: 40px;
  background-color: rgba(28, 28, 28, 0);
}
</style>
