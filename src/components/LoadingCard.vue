<template>
  <div>
    <link href="https://css.gg/css" rel="stylesheet" />
    <div class="data-user">
      <div class="data-card">
        {{ card.name }}
        {{ card.surname }}
      </div>

      <div class="data-card">
        {{ card.description }}
      </div>
    </div>
    <div class="contacts">
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
  name: "LoadingCard",
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
        phone: ""
      }
    };
  },
  mounted() {

  },
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

<style>
.data-card {
  display: flex;
  flex-direction: row;
  justify-content: center;
  /* padding-top: 30px; */
}

.data-user {
  font-size: 19px;
  font-weight: normal;
  padding-top: 25px;
  color: #e1e1e1;
}

.contacts {
  font-size: 15px;
  padding-top: 30px;
  color: #c7c7c7;
}

.buttons {
  display: flex;
  flex-direction: row;
  justify-content: space-around;

  padding: 0px 27px 0px 27px;
}

.buttons .btn {
  border: none;
  background-color: rgba(28, 28, 28, 0);
  /* padding: 0px 30px 3px 30px; */
  color: rgb(54, 54, 54);
  margin: 10px 0 10px 0;
  cursor: pointer;
}

.buttons .btn:hover {
  border: none;
  background-color: rgba(28, 28, 28, 0);

  color: rgb(22, 22, 22);
  cursor: pointer;
}
</style>
