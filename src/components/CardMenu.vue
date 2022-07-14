<template>
  <div class="flex-menu">
    <div class="fons">
      <h3>Фон</h3>
      <div class="fons__color">
        <p>Цвет</p>
        <input class="kroog" type="color" v-model="card.color.background" />
      </div>
    </div>

    <div class="if-side" v-if="btnSide">
      <h3>Текст</h3>

      <div class="positiions">
        <p>Положение</p>

        <div class="buttuns-position">
          <div class="positioon__L">
            <a class="btnText" @click="changeTextPosition('flex-start')">
              <img src="/image/texts_icon/L1.png" alt="">
            </a>
            <a class="btnText" @click="changeTextPosition('center')">
              <img src="/image/texts_icon/L2.png" alt="">
            </a>
            <a class="btnText" @click="changeTextPosition('flex-end')">
              <img src="/image/texts_icon/L3.png" alt="">
            </a>
          </div>
          <div class="position__R">
            <a  @click="changeJust('flex-start')"><img class="R1" src="/image/texts_icon/R.png" alt=""></a>
            <a  @click="changeJust('center')"><img class="R2" src="/image/texts_icon/R.png" alt=""></a>
            <a  @click="changeJust('flex-end')"><img class="R3" src="/image/texts_icon/R.png" alt=""></a>
          </div>
        </div>
      </div>

      <div class="selector">
        <p>Размер текста</p>
        <select v-model="card.sizes.text">
          <option value="18">18</option>
          <option value="20">20</option>
          <option value="22">22</option>
          <option value="24">24</option>
          <option value="26">26</option>
          <option value="28">28</option>
          <option value="30">20</option>
          <option value="32">32</option>
          <option value="34">34</option>
          <option value="36">36</option>
          <option value="38">38</option>
          <option value="40">40</option>
        </select>
      </div>

      <div class="fons__color">
        <p>Цвет</p>
        <input class="kroog" type="color" v-model="card.color.text" />
      </div>
    </div>
    <div class="if-side" v-else>
      <h3>Текст</h3>
      <div class="positiions">
        <p>Положение</p>
     <div class="buttuns-position">
        <div class="positioon__L">
          <a class="btnText" @click="changeLinksPosition('flex-start')">
          <img src="/image/texts_icon/L1.png" alt="">
        </a>
        <a class="btnText" @click="changeLinksPosition('center')">
         <img src="/image/texts_icon/L2.png" alt="">
        </a>
        <a class="btnText" @click="changeLinksPosition('flex-end')">
         <img src="/image/texts_icon/L3.png" alt="">
        </a>
        </div>
          <div>
          <a @click="changeContJust('flex-start')"><img class="R1" src="/image/texts_icon/R.png" alt=""></a>
          <a @click="changeContJust('center')"><img class="R2" src="/image/texts_icon/R.png" alt=""></a>
          <a @click="changeContJust('flex-end')"><img class="R3" src="/image/texts_icon/R.png" alt=""></a>
     
          </div>
        </div>
      </div>
      
      <div  class="selector">
        <p>Размер текста</p> 
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
       <div class="fons__color">
        <p>Цвет</p>
        <input class="kroog" type="color" v-model="card.color.links" />
       </div> 
    </div>
  </div>
</template>

<script>
export default {
  name: "CardMenu",
  data() {
    return {
      sizeText: [18, 20, 22, 24, 26, 28, 30, 32, 34, 36, 38, 40]
    };
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
    }
  }
};
</script>

<style scoped>
h3 {
  font-family: "Roboto";
  font-style: normal;

  font-size: 20px;
  line-height: 23px;
  display: flex;
  align-items: center;
  letter-spacing: 0.232836px;

  color: #000000;
}

p {
  font-family: "Roboto";
  font-style: normal;
  font-size: 17px;
  line-height: 16px;
  display: flex;
  align-items: center;
  letter-spacing: 0.232836px;
}

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
  margin-left: 20px;
}
input.kroog::-webkit-color-swatch {
  border: 0;
  border-radius: 50%;
}
.flex-menu {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  height: 100%;
  width: 100%;
  flex-wrap: nowrap;
  justify-content: center;
}

.if-side {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
}

.btnText {
  border: none;
  background-color: rgba(28, 28, 28, 0);
  color: rgb(61, 61, 61);
  cursor: pointer;
  margin-right: 4px;
}

.btnText:hover {
  border: none;
  background-color: rgba(28, 28, 28, 0);
  color: rgb(22, 22, 22);
  cursor: pointer;
}

/*------------------- */
.fons {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}
.fons__color {
  display: flex;
}
.selector {
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: space-between;
  width: 70%;
}
.positiions {
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  align-items: flex-start;
  width: 100%;
}
.buttuns-position {
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  height: 40px;
}

.R1{
  margin-bottom: 10px;
  margin-right: 10px;
  cursor: pointer;
}
.R2{
  margin-bottom: 5px;
  margin-right: 10px;
  cursor: pointer;
}
.R3{
  cursor: pointer;
}

</style>
