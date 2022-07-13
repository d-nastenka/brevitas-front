<template>
  <div class="flex-menu">
    Цвет фона
    <input class="kroog" type="color" v-model="card.backgroundColor" />
    <div class="if-side" v-if="btnSide">
      Цвет текста
      <input class="kroog" type="color" v-model="card.textColor" />

      Положение текста
      <div class="buttuns-position">
        <button class="btnText" @click="changeTextPosition('flex-start')">
          <i
            class="gg-menu-right-alt"
            :style="{
              width: '10px',
              height: '10px'
            }"
          ></i>
        </button>
        <button class="btnText" @click="changeTextPosition('center')">
          <i
            class="gg-menu-right-alt"
            :style="{
              width: '12.5px',
              height: '10px'
            }"
          ></i>
        </button>
        <button class="btnText" @click="changeTextPosition('flex-end')">
          <i
            class="gg-menu-right-alt"
            :style="{
              width: '16px',
              height: '10px'
            }"
          ></i>
        </button>
        <br />
        <button @click="changeJust('flex-start')">Верх</button>
        <button @click="changeJust('center')">Середина</button>
        <button @click="changeJust('flex-end')">Низ</button>
      </div>
      Размер текста
      <button @click="btnTextPlus">
        Увеличить
      </button>
      <button @click="btnTextMinus">
        Уменьшить
      </button>
      Шрифт
    </div>

    <div class="if-side" v-else>
      Цвет текста
      <input type="color" v-model="card.linksColor" />

      Положение текста
      <div class="buttuns-position">
        <button class="btnText" @click="changeLinksPosition('flex-start')">
          <i
            class="gg-menu-right-alt"
            :style="{
              width: '10px',
              height: '10px'
            }"
          ></i>
        </button>
        <button class="btnText" @click="changeLinksPosition('center')">
          <i
            class="gg-menu-right-alt"
            :style="{
              width: '12.5px',
              height: '10px'
            }"
          ></i>
        </button>
        <button class="btnText" @click="changeLinksPosition('flex-end')">
          <i
            class="gg-menu-right-alt"
            :style="{
              width: '16px',
              height: '10px'
            }"
          ></i>
        </button>
        <br />
        <button @click="changeContJust('flex-start')">Верх</button>
        <button @click="changeContJust('center')">Середина</button>
        <button @click="changeContJust('flex-end')">Низ</button>
      </div>
      Размер текста
      <button @click="btnContPlus">
        Увеличить
      </button>
      <button @click="btnContMinus">
        Уменьшить
      </button>
      Шрифт
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
    changeTextPosition(textPosit) {
      this.card.textPosition = textPosit;
    },
    changeLinksPosition(linkPos) {
      this.card.linksPosition = linkPos;
    },
    changeJust(textJust) {
      this.card.textJustify = textJust;
    },
    changeContJust(contJust) {
      this.card.contJustify = contJust;
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

  }
};
</script>

<style scoped>
.kroog {
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
  border: 0;
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
