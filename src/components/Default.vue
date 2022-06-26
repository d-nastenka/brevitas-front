<template>
  <div>
    <h3>Мои визитки</h3>

    <div class="wrapper">
      <div v-if="imgLengthstatus">У вас пока нет визиток</div>
      <div class="flex-container" v-else>
        <div class="imges-card" v-for="(i, key) in img" :key="key">
          <div class="buttons">
            <button>Изменить</button>
            <button>Скачать</button>
            <button>Удалить</button>
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
      img: [1, 2, 3, 4, 5, 5, 6, 6, 4],
    };
  },
  methods: {},
  computed: {
    imgLengthstatus() {
        return !(this.img.length > 0)
    }
  }
};
</script>


<style>

.wrapper {
  padding: 0px 2% 0px 2%;
}
.imges-card {
  width: 300px;
  height: 200px;
  /* margin: 2 auto; */
  margin-left: 15px;
  margin-right: 15px;

  padding: 0px 0px 0px 0px;
  border: 1px solid rgb(77, 77, 77);
  box-shadow: rgba(0, 0, 0, 1.2) 0px 1px 3px;
}

.flex-container {
    width: 100%;

  display: flex;
  /* justify-content: space-around; */
  justify-content: flex-start;
  flex-wrap: wrap;
  gap: 30px;
}

.imges-card {
    height: 200px;
    
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
}

/* button {
    background-color: #026670; 
    border: 1px solid rgb(17, 17, 17);
    color: white;
    padding: 10px 20px;
    text-align: center;
    display: inline-block;
} */

</style>