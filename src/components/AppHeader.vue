<template>
    <header class="head">
      <div class="head-title">
        <h1>Brevitas</h1>
      </div>

      <div class="pages">
            <div class="menu">
              <router-link class="pages_ell" to="/">Мои визитки</router-link> 
              <router-link class="pages_ell" to="/card">Создать новую визитку</router-link>
            </div>
            <div class="page-auth">
              <router-link class="pages_ell" to="/authorization">Войти</router-link>
            </div>
      </div>
      



    </header>
</template>

<script>


export default {
    name: "Header",
}
</script>

<style>
.head {
    width: 100%;
    height: 125px;
    display: flex;
    /* justify-content: center; */
    align-items: center; 

    /* background-color: #353535; */
    color: rgb(199, 199, 199);
    background-color: #003c41;;
    /*background-image: url(.jpg);*/
    background-size: cover;

    margin-bottom: 50px;
}

.head-title {
  margin-right: 70px;
  margin-left: 30px;
  
  font-size: 27px;/*шрифт*/ 

  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  padding-left: 50px;
}

.pages_ell {
    color: rgb(165, 165, 165);
}

.pages {
  display: flex;
  flex-direction: row;
  justify-content: space-between;

}

.page-auth {
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  width: 725px;
}

</style>
