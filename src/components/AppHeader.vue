<template>
    <header class="head">
      <div class="head-title">
        <h1>Brevitas</h1>
      </div>

      <div class="pages">
        <p>
            <router-link class="pages_ell" to="/">Home</router-link> 
            <router-link class="pages_ell" to="/card">New Card</router-link>
            <router-link class="pages_ell" to="/registration">Registration</router-link> 
            <router-link class="pages_ell" to="/authorization">Authorization</router-link>
        </p>
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
    width: 101%;
    height: 175px;
    display: flex;
    justify-content: center;
    align-items: center; 

    background-color: #353535;
    color: rgb(199, 199, 199);
    /* background-color: #9FEDD7; */
    /*background-image: url(.jpg);*/
    background-size: cover;
}

.head-title {
  margin-right: 330px;
  margin-left: 30px;
  
  font-size: 27px;/*шрифт*/ 

  display: flex;
    flex-direction: row;
    justify-content: flex-start;
}

.pages_ell {
    color: rgb(165, 165, 165);
}
</style>
