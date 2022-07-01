<template>
  <div class="page-see-card">
    <div class="title-seecard">
      <h3>Визитка</h3>
    </div>
    <div class="flex-field">
      <div class="flex-field-card">
        <div class="field-card">
          <div class="data-user">
            <div class="data-card">
              {{ dataCard.name }}
              {{ dataCard.surname }}
            </div>

            <div class="data-card">
              {{ dataCard.description }}
            </div>
          </div>
          <div class="contacts">
            <div class="data-card">
              <a :href="`mailto:${dataCard.mail}`" target="_blank">{{
                dataCard.mail
              }}</a>
            </div>
            <div class="data-card">
              <a :href="dataCard.link" target="_blank">{{ dataCard.link }}</a>
            </div>
            <div class="data-card">
              <a :href="`tel:${dataCard.phone}`" target="_blank">{{
                dataCard.phone
              }}</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SeeCard",

  data() {
    return {
      dataCard: {}
    };
  },
  created() {
    this.getCard();
    console.log(this.dataCard);
  },
  methods: {
    async getCard() {
      let res = await fetch(
        `http://localhost:3000/visits/${this.$route.params.id}`,
        {
          method: "GET",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
          }
        }
      );
      this.dataCard = await res.json();
    }
  },
  computed: {}
};
</script>

<style scoped>
.flex-field {
  display: flex;
  flex-direction: row;
  justify-content: center;

  margin-top: 40px;
}

.flex-field-card {
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  width: 400px;
  height: 200px;
  padding: 32px;
  border-radius: 5px;
  box-shadow: 0 4px 16px #ccc;
  background: linear-gradient(45deg, #393939, #e1e1e1);
}

.field-card {
  /* margin-left: 200px; */
  border: 5px;
  /* box-shadow: 0 1px 2px rgb(10, 10, 10); */
}

.data-card {
  display: flex;
  flex-direction: row;
  justify-content: center;

  font-family: serif;
  /* font-family: Fantasy; */
  color: #ffffff;
}

.data-user {
  font-size: 27px;
  font-weight: normal;
}

.contacts {
  font-size: 20px;
}

a {
  color: #aeaeae;
}
</style>
