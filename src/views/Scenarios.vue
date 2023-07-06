<template>
  <div class="scenario">
    <h1>Escolha o seu desafio!</h1>
    <div class="scenario-list">
      <div class="scenario-item" @click="$router.push('/houseFire')">
        <div class="icon casa"></div>
        <span>Casa em chamas</span>
      </div>
      <div class="scenario-item">
        <div class="icon fimMundo"></div>
        <span>Fim do mundo</span>
      </div>
      <div class="scenario-item">
        <div class="icon apocalipseZumbi"></div>
        <span>Apocalipse zumbi</span>
      </div>
      <div class="scenario-item">
        <div class="icon desastreNatural"></div>
        <span>Desastre natural</span>
      </div>
    </div>
    <Button @click="$router.push('/')" :buttonName="nomeBotao"/>
  </div>
</template>

<script>
import Button from "./../components/Button"


export default {
  name: "Scenario",
  components: {
    Button,
  },
  data(){
    return {
      nomeBotao:"Voltar",
    }
  } 
}
</script>

<style src="../css/Scenarios.css" scoped></style>