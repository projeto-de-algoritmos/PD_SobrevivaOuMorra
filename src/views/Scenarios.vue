<template>
  <div class="scenario">
    <h1>Escolha o seu desafio!</h1>
    <div class="casa" @click="$router.push('/houseFire')" ></div>
>

  </div>
</template>

<script>

import Button from "./../components/Button"

export default {
  name: "Scenario",
}
</script>

<style scoped>

h1{
  top: 10%;
  left: 50%;
  font-size:50px;
}

.scenario{
  background-color: gold;
  background-image: url(../assets/escolhas.png);
  background-size: cover;
  background-repeat: no-repeat;
  width: 100%;  
  height: 100%;
  
}

.casa{
  margin: 5%;
  background-image: url(../assets/casaFogo.png);
  background-size: cover;
  background-repeat: no-repeat;  width: 20%;  
  height: 20%;
  border-radius: 40px;
}

</style>



