<template>
    <footer class="footer">
        <div class="footer-flex">
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
        </div>    
    </footer>
</template>

<script>


export default {
   name: "Footer",
}
</script>

<style>

.footer{
    background: #026670;
    margin-top: 30px;
    margin-left: -7px;
    margin-bottom: -7px;
    padding-top: 20px;
    padding-bottom: 15px; 
    width: 101%;
    height: 175px;
    justify-content: center;
    align-items: center; 
    
}

.footer-flex {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
}

.foot-row{
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    font-weight: 700;
    font-size: 17px;
    line-height: 1.3;
}
.foot-text{
    font-weight: 300;
    font-size: 15px;
    line-height:  1.3; 
}

.footkont {
    color: rgb(199, 199, 199);
    padding-top: 35px;
}

</style>