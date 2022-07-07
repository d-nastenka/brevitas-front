<template>
  
    <div class="wrapper">     
      <div class="home-titR1">
        <h3>Создайте визитку своими руками</h3>
        <div class="contLeft">
            <p >
            Конструктор визиток - это сайт где вы можете создать визитку по своему
            вкусу на вашем компьютере
            </p>
        </div>      
      </div>

        <div class="home-titL1">
            <h3>Ключевые особенности</h3>
            <div class="contR">
             <p >
                Мы придумали новый способ создания визиток, где процесс похож на игру. Теперь каждый — дизайнер, если есть страсть к любимому делу. 
            </p>
            </div>
           
        </div>
        <div class="home-titR2">
            <h3>Ключевые особенности</h3>
            <div class="contLeft">
                <p>
                    Воплощайте в жизнь любые ваши идеи! Конструктор визиток - это сайт где вы можете создать визитку по своему вкусу на вашем компьютере
                </p>
            </div>
        </div>        
      <div class="home-tittle">
        <h3>Просто создайте свою визитку мы обо всем позаботились</h3>
      </div>
      <div class="content"></div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.contLeft {
  margin-left: 16%;
  max-width: 364px;

  font-family: "Tenor Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 28px;
  display: flex;
  align-items: center;
  letter-spacing: 3px;
  text-align: left;
  color: #ffffff;
}

.contR {
  margin-left: 60%;
  margin-right: 5%;
  max-width: 364px;

  font-family: "Tenor Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 28px;
  display: flex;
  align-items: center;
  text-align: right;
  letter-spacing: 3px;

  color: #5f5e5e;
}

.wrapper {
  background: linear-gradient(90deg, #016670, #fff9c7);
  padding-top: 9px;
  margin-top: 1px;
}

.content {
  margin-bottom: 1px;
  padding-bottom: 20px;
}

.home-titR1{
    background: url(/image/111.png) 75%/160px no-repeat ;
}
.home-titL1{
    background: url(/image/2.png) 20%/170px no-repeat ;
}
.home-titR2{
    background: url(/image/lamp.png) 75%/160px no-repeat ;
}



</style>
