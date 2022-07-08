<template>
  <footer class="footer">
    <div class="footer-flex">
      <div class="foot-row">
        <div class="footkont">
          <!-- Наше расположение -->
          <!-- <p class="foot-text">
            Россия <br />
            г.Красноярск, улица, дом
          </p> -->
        </div>
        <div class="footkont">
          О нас
          <!-- <p class="foot-text">+7 (913)333-99-99</p> -->
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "Footer"
};
</script>
<style>
.footer {
  width: 100%;
  height: 69px;

  display: flex;
  justify-content: flex-start;
  align-items: center;

  background: #f5f5f5;
  outline: 1px solid #c1c1c1;
}

.footer-flex {
  display: flex;
  flex-direction: column;
  justify-content: center;

}

.foot-row {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;


}
.foot-text {
  font-weight: 300;
  font-size: 10px;
  line-height: 1.3;
}

.footkont {
  color: #000000;
  font-style: normal;
  padding: 20px;
  font-size: 15px;

/* font-family: 'Roboto'; */

  /* display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  text-align: center; */
  letter-spacing: 0.232836px;

  /* padding-top: 20px;
  padding-bottom: 20px; */
}
</style>
