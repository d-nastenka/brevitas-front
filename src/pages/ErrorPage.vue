<template>
  <div class="er" >
    <div>
      <p class="error-text">404</p>
      <p class="errP">ERROR 404</p>
    </div>
    <hr>
    <p class="P">страница не найдена</p>
    <a class="btn-card" @click="$router.push('/')"><p class="btn-card_text">HOME</p> </a>
  </div>
</template>

<script>
export default {
  name: "ErrorPage"
};
</script>

<style scoped>

.er{
  height: 1064px;
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: center;
  align-items: center;
  align-content: center;
}
.er hr{
  margin-top: 100px;
  background-color: #016670;
  border: 1px;
}
.P{
  font-family: 'Tenor Sans';
  color: #016670;
  /*font-family: 'Tenor Sans';*/
  font-style: normal;
  font-weight: 400;
  font-size: 40px;
  line-height: 75px; 
  margin-top: 0px;
  margin-bottom: 10px;
}
.error-text {
  
  font-style: normal;
  font-weight: 400;
  font-size: 400px;
  line-height: 75px; 
  color: rgba(0, 0, 0, 0.181); 
  margin-top: 0;
  margin-bottom: 0;
}

.errP{
  color: #016670;
  font-family: 'Tenor Sans';
  font-style: normal;
  font-weight: 700;
  font-size: 46px;
  line-height: 75px; 
  margin-top: 0;
  margin-bottom: 0;
}
</style>
