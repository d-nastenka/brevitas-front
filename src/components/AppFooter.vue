<template>
  <footer class="footer">
    <div class="footer-flex">
      <div class="foot-row">
        <div class="footkont">
          Наше расположение
          <p class="foot-text">
            Россия <br />
            г.Красноярск, улица, дом
          </p>
        </div>
        <div class="footkont">
          контакты
          <p class="foot-text">+ 8 (913)-99-99 <br />почта@gmail.com</p>
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
  background: linear-gradient(70deg, #026670, #9fedd7);
  padding-top: 20px;
  width: 100%;
  height: 20%;
  justify-content: center;
  align-items: center;
  padding-bottom: 10px;
}

.footer-flex {
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
}

.foot-row {
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  font-weight: 700;
  font-size: 17px;
  line-height: 1.3;
}
.foot-text {
  font-weight: 300;
  font-size: 15px;
  line-height: 1.3;
}

.footkont {
  color: #ffffff;
  padding-top: 35px;
}
</style>
