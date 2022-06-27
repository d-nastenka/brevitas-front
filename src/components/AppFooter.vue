<template>
    <footer class="footer">
        <div class="foot-row">
            <div class="footkont">
                   Наше расположение
                <p class="foot-text">Россия <br> г.Красноярск, улица, дом</p>
            </div>
            <div class="footkont">
                контакты
             <p class="foot-text">+ 8 (913)-99-99 <br>почта@gmail.com </p>
         </div>
        </div>      
    </footer>
</template>

<script>


export default {
   name: "Footer",
}
</script>

<style>
/*подвал*/
.footer{
    background: #026670;
    margin-top: 30px;
    margin-left: -7px;
    margin-bottom: -7px;
    padding-top: 30px;
    padding-bottom: 20px; 
    width: 101%;
    height: 200px;
    justify-content: center;
    align-items: center; 
    
}

.foot-row{
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    font-weight: 700;
    font-size: 24px;
    line-height: 1.3;
}
.foot-text{
    font-weight: 300;
    font-size: 20px;
    line-height:  1.3; 
}
/*конец подвал*/
</style>