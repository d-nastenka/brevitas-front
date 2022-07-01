<template>
  <div class="page-create-card">
    <div class="title-createcard">
      <h3>Создать визитку</h3>
    </div>
    <div class="flex-field">
      <div class="field-create">
        <div v-for="(i, key) in dataToSend" :key="key">
          <div class="text-card">
            {{ i }}
          </div>
        </div>
      </div>

      <div class="menu-create"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CreateCard",
  // props: {
  //         dataToSend: {
  //         name: String,
  //         surname: String,
  //         description: String,
  //         mail: String,
  //         link: String,
  //         phone: Number,
  // }},
  data() {
    return {
      dataToSend: {
        name: "",
        surname: "",
        description: "",
        mail: "",
        link: "",
        phone: ""
      }
    };
  },

  methods: {
    printData(dataOfCard) {
      this.dataToSend.push(dataOfCard);
    }
  },
  computed: {}
};
</script>

<style scoped>
.flex-field {
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;

  margin-top: 40px;
}

.field-create {
  display: flex;
  /* flex-direction: row; */
  justify-content: center;

  /* margin-left: 200px; */

  width: 400px;
  height: 200px;
  padding: 32px;
  border-radius: 5px;
  box-shadow: 0 4px 16px #ccc;
}

.menu-create {
  /* display: flex;
    flex-direction: row;
    justify-content: center; */

  /* margin-left: 200px; */

  width: 150px;
  height: 200px;
  padding: 32px;
  border-radius: 5px;
  box-shadow: 0 4px 16px #ccc;
}
</style>
