<template>
  <div class="flex-menu">
    <div class="fons">
       <h3>Фон</h3> 
       <div class="fons__color">
        <p>Цвет</p>
        <input class="kroog" type="color" v-model="card.backgroundColor" />
       </div>
      
    </div>
   
    <div class="if-side" v-if="btnSide">
      <h3>Текст</h3> 
     
      
    <div class="positiions">
      <p>Положение</p> 
      <div class="buttuns-position">
        <div class="positioon__L">
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
        </div>
        <div class="position__R">
           <button @click="changeJust('flex-start')">В</button>
          <button @click="changeJust('center')">Се</button>
          <button @click="changeJust('flex-end')">Н</button>
        </div>
       
      </div>
    </div>
      
      <div class="selector">
       <p>Размер текста</p> 
        <select v-model="card.sizeText">
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
        <p>цвет</p>
        <input class="kroog" type="color" v-model="card.textColor" />
      </div>
    </div>
    

    <div class="if-side" v-else>
      <h3>Текст</h3>
      <input class="kroog" type="color" v-model="card.linksColor" />

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
      <select v-model="card.sizeCont">
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

/*------------------- */
.fons{
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}
.fons__color{
  display: flex;
}
.selector{
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: space-between;
  width: 70%;
}
.positiions{
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  align-items: flex-start;
  width: 100%;
}
.buttuns-position{
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
}
</style>
