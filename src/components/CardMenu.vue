<template>
  <div class="flex-menu">
    Цвет фона
    <input class="kroog" type="color" v-model="card.color.background" />
    <div class="if-side" v-if="btnSide">
      Цвет текста
      <input class="kroog" type="color" v-model="card.color.text" />

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
      <select v-model="card.sizes.text" >
        <option card.sizes.text="18">18</option>
        <option value="20">20</option>
        <option value="22">22</option>
        <option value="24">24</option>
        <option value="26">26</option>
        <option value="28">28</option>
        <option value="30">30</option>
        <option value="32">32</option>
        <option value="34">34</option>
        <option value="36">36</option>
        <option value="38">38</option>
        <option value="40">40</option>
      </select>
    </div>

    <div class="if-side" v-else>
      Цвет текста
      <input class="kroog" type="color" v-model="card.color.links" />

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
      <select v-model="card.sizes.links">
        <option value="18">18</option>
        <option value="20">20</option>
        <option value="22">22</option>
        <option value="24">24</option>
        <option value="26">26</option>
        <option value="28">28</option>
        <option value="30">30</option>
        <option value="32">32</option>
        <option value="34">34</option>
        <option value="36">36</option>
        <option value="38">38</option>
        <option value="40">40</option>
      </select>

    </div>
  </div>
</template>

<script>
export default {
  name: "CardMenu",
  data() {
    return {
      sizeText: [18, 20, 22, 24, 26, 28, 30, 32, 34, 36, 38, 40]
    }
  },
  props: {
    card: Object,
    btnSide: Boolean
  },
  methods: {
    changeTextPosition(textPosit) {
      this.card.positions.text = textPosit;
    },
    changeLinksPosition(linkPos) {
      this.card.positions.links = linkPos;
    },
    changeJust(textJust) {
      this.card.justify.text = textJust;
    },
    changeContJust(contJust) {
      this.card.justify.links = contJust;
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
