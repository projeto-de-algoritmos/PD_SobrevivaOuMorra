<template>
  <div class="scenario">
    <h1>Escolha o seu desafio!</h1>
    <div class="scenario-list">
        <div class="scenario-item" @click="goToHouseFire">
        <div class="icon casa"></div>
        <span>Casa em chamas</span>
      </div>
      <div class="scenario-item" @click="goToWorldEnd">
        <div class="icon fimMundo"></div>
        <span>Fim do mundo</span>
      </div>
      <div class="scenario-item" @click="goToZombiApocalipse">
        <div class="icon apocalipseZumbi"></div>
        <span>Apocalipse zumbi</span>
      </div>
      <div class="scenario-item" @click="goToNaturalDisaster">
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
  },
  methods: {
    goToHouseFire(){
      this.$router.push({ name: 'HouseFire', params: { propName: "FireInTheHouse" } })
    },
    goToWorldEnd(){
      this.$router.push({ name: 'HouseFire', params: { propName: "EndOfTheWorld" } })
    },
    goToNaturalDisaster(){
      this.$router.push({ name: 'HouseFire', params: { propName: "NaturalDisaster" } })
    },
    goToZombiApocalipse(){
      this.$router.push({ name: 'HouseFire', params: { propName: "ZombiApocalipse" } })
    },
  }
}
</script>

<style src="../css/Scenarios.css" scoped></style>