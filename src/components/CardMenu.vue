<template>

  <div class="flex-menu">
    Цвет фона
    <input class="kroog" type="color" v-model="card.backgroundColor" />
    <div class="if-side" v-if="btnSide">
      Цвет текста
      <input class="kroog" type="color" v-model="card.textColor" />

      Положение текста
      <div class="buttuns-position">
        <button class="btnText" @click="btnTextLeft">
          <i
            class="gg-menu-right-alt"
            :style="{
              width: '10px',
              height: '10px'
            }"
          ></i>
        </button>
        <button class="btnText" @click="btnTextCenter">
          <i
            class="gg-menu-right-alt"
            :style="{
              width: '12.5px',
              height: '10px'
            }"
          ></i>
        </button>
        <button class="btnText" @click="btnTextRight">
          <i
            class="gg-menu-right-alt"
            :style="{
              width: '16px',
              height: '10px'
            }"
          ></i>
        </button>
        <button @click="btnJustStart">Верх </button>
        <button @click="btnJustCenter">Середина </button>
        <button @click="btnJustEnd"> Низ</button>
        
      </div>
      Размер текста
      <button @click="btnTextPlus">
        Увеличить
      </button>
      <button @click="btnTextMinus">
        Уменьшить
      </button>
    </div>

    <div class="if-side" v-else>
      Цвет текста
      <input type="color" v-model="card.linksColor" />

      Положение текста
      <div class="buttuns-position">
        <button class="btnText" @click="btnLinksLeft">
          <i
            class="gg-menu-right-alt"
            :style="{
              width: '10px',
              height: '10px'
            }"
          ></i>
        </button>
        <button class="btnText" @click="btnLinksCenter">
          <i
            class="gg-menu-right-alt"
            :style="{
              width: '12.5px',
              height: '10px'
            }"
          ></i>
        </button>
        <button class="btnText" @click="btnLinksRight">
          <i
            class="gg-menu-right-alt"
            :style="{
              width: '16px',
              height: '10px'
            }"
          ></i>
        </button>
        <button @click="btnContJustStart">Верх </button>
        <button @click="btnContJustCenter">Середина </button>
        <button @click="btnContJustEnd"> Низ</button>
      </div>
      Размер текста
      <button @click="btnContPlus">
        Увеличить
      </button>
      <button @click="btnContMinus">
        Уменьшить
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "CardMenu",
  props: {
    card: Object,
    btnSide: Boolean
  },
  methods: {
    btnTextLeft() {
      this.card.textPosition = "flex-start";
    },
    btnTextCenter() {
      this.card.textPosition = "center";
    },
    btnTextRight() {
      this.card.textPosition = "flex-end";
    },
    btnLinksLeft() {
      this.card.linksPosition = "flex-start";
    },
    btnLinksCenter() {
      this.card.linksPosition = "center";
    },
    btnLinksRight() {
      this.card.linksPosition = "flex-end";
    },
    btnTextPlus() {
      this.card.sizeText = this.card.sizeText + 1;
    },
    btnTextMinus() {
      this.card.sizeText = this.card.sizeText - 1;
    },
    btnContPlus() {
      this.card.sizeCont = this.card.sizeCont + 1;
    },
    btnContMinus() {
      this.card.sizeCont = this.card.sizeCont - 1;
    },
    btnJustStart() {
        this.card.textJustify = "flex-start";
    },
    btnJustCenter() {
        this.card.textJustify = "center";
    },
    btnJustEnd() {
        this.card.textJustify = "flex-end";
    },
    btnContJustStart() {
        this.card.contJustify = "flex-start";
    },
    btnContJustCenter() {
        this.card.contJustify = "center";
    },
    btnContJustEnd() {
        this.card.contJustify = "flex-end";
    },
  }
};
</script>

<style scoped>

.kroog{
  border-top-width: 0px;
  border-left-width: 0px;
  border-bottom-width: 0px;
  border-right-width: 0px;
  padding-right: 0px;
  padding-left: 0px;
  padding-top: 0px;
  padding-bottom: 0px;
  width: 50px;
  height: 50px;
  border:0 ;
  border-radius: 50px; 
}
input.kroog::-webkit-color-swatch {
    border: 0;
    border-radius: 50%;
}
.flex-menu {
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  width: 100%;
  flex-wrap: nowrap;
  justify-content: center;
}

.if-side {
  display: flex;
  flex-direction: column;
}

.btnText {
  border: none;
  background-color: rgba(28, 28, 28, 0);

  color: rgb(61, 61, 61);
  cursor: pointer;
  /* width: 20px;
  height: 20px; */
}

.btnText:hover {
  border: none;
  background-color: rgba(28, 28, 28, 0);
  /* width: 20px;
  height: 20px; */
  color: rgb(22, 22, 22);
  cursor: pointer;
}
</style>
