<template>
  <div class="page">
    <h3>Мои визитки</h3>
    <div id="wait-mounted">
      <div class="wrapper">
        <div v-if="imgLengthstatus">У вас пока нет визиток</div>
        <div class="flex-container" v-else>
          <div class="imges-card" v-for="(i, key) in dataCard" :key="key">
            <div class="data-user">
              <div class="data-card">
                {{ i.name }}
                {{ i.surname }}
              </div>

              <div class="data-card">
                {{ i.description }}
              </div>
            </div>
            <div class="contacts">
              <div class="data-card">
                {{ i.mail }}
              </div>
              <div class="data-card">
                {{ i.link }}
              </div>
              <div class="data-card">
                {{ i.phone }}
              </div>
            </div>

            <div class="buttons">
              <button class="btn" @click="changeCard(key)">Изменить</button>
              <button class="btn" @click="seeCard(key)">Посмотреть</button>
              <button class="btn" @click="deleteCard(key)">Удалить</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
  status: false,
  data() {
    return {
      dataCard: []
    };
  },
  created() {
    this.getCard();
  },
  mounted() {},
  methods: {
    async getCard() {
      let res = await fetch("http://localhost:3000/visits", {
        method: "GET",
        headers: {
          "Content-Type": "application/json"
        }
      });
      this.dataCard = await res.json();
    },
    async deleteCard(i) {
      let res = fetch(`http://localhost:3000/visits/${this.dataCard[i]._id}`, {
        method: "DELETE",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        }
      });
      this.dataCard.splice(i, 1);
    },
    changeCard(i) {
      this.$router.push(`/changecard/${this.dataCard[i]._id}`);
    },
    seeCard(i) {
      this.$router.push(`/seecard/${this.dataCard[i]._id}`);
    }
  },
  computed: {
    imgLengthstatus() {
      return !(this.dataCard.length > 0);
    }
  }
};
</script>

<style>
.wrapper {
  padding: 0px 2% 0px 2%;
}

.imges-card {
  width: 320px;
  height: 200px;

  margin-left: 72px;
  margin-right: 72px;

  /* border: 1px solid rgb(77, 77, 77);
  box-shadow: rgba(0, 0, 0, 1.2) 0px 1px 3px; */
  border-radius: 7px;
  box-shadow: 0 4px 16px rgb(134, 134, 134);
  background: linear-gradient(45deg, #77c2ea, #464646);

  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.flex-container {
  width: 100%;

  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  gap: 30px;
  cursor: pointer;
}

.imges-card {
  height: 200px;

  display: flex;

  flex-direction: column;
  justify-content: space-between;
  border-radius: 2px;

  font-family: serif;
}

.buttons {
  padding: 0 1px 2px 1px;
}

.buttons .btn {
  background-color: #232829;
  color: white;
  font-size: 14px;
  padding: 10px 19px;
  border: none;
  cursor: pointer;
  border-radius: 5px;
  text-align: center;
}

.buttons .btn:hover {
  background-color: white;
  color: rgb(76, 76, 76);
  border-radius: 7px;
  box-shadow: 0 2px 10px rgb(134, 134, 134);
}

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
</style>
