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

<style src="../css/Scenarios.css"></style>



