<template>
    <div class="main" :style="getBackground">
      <div v-if="statusMessage === 'morreu'">
        <span class="title" style="background-color: red">{{ getTitle }}</span>
      </div>
      <div v-else>
        <span class="title" style="background-color: green">{{ getTitle }}</span>
      </div>

      <div class="loseMessage" v-if="this.statusMessage ==='morreu'">
        Infelizmente, sua ganância e desejo insaciável por  
        mais coisas acabaram por levá-lo à sua própria ruína.  
        Em sua ânsia por acumular itens materiais, você se esqueceu  
        do verdadeiro valor da vida e da importância de tomar decisões sensatas  
        em momentos de crise. <br/>
      </div>

      <div class="winMessage" v-else>
          Parabéns! Sua sabedoria e discernimento foram verdadeiramente notáveis durante o desafio. 
          Enquanto muitos sucumbiram ao pânico e à indecisão, você demonstrou uma habilidade admirável 
          de tomar decisões sensatas em meio à adversidade. <br/>
      </div>
      <Button @click="$router.push('/cenarios')" :buttonName="buttonVoltar"/>
    </div>
  </template>

  <script>
  import { knapsack } from '../utils/PDknapsack';
  import Button from "./../components/Button"

  export default {
    name: 'Result',
    data() {
      return {
        selectedItems: [],
        statusMessage: '',
        buttonVoltar: "TENTAR NOVAMENTE"
      };
    },
    components: {
      Button,
    },
    props: {
      propName: {
            type: String,
            required: true,
        },
    },
    computed:{
      getBackground(){
        if(this.statusMessage ==='morreu'){
          return { 'background-image': 'url(' + require('@/assets/morreu.png') + ')' };
        }else {
          return { 'background-image': 'url(' + require('@/assets/sobreviveu.png') + ')' };
        }
      },
      getTitle(){
        if(this.statusMessage ==='morreu'){
          return 'VOCÊ FRACASSOU!';
        } else {
            return 'VOCÊ CONSEGUIU!';
        }
      },
    },
    mounted() {
      const storedItems = localStorage.getItem('selectedItems');
      if (storedItems) {
        this.selectedItems = JSON.parse(storedItems);
        const size = 20;
        const result = knapsack(this.selectedItems, size);
        this.statusMessage = (result.objetosSelecionados.length === this.selectedItems.length) ? 'viveu' : 'morreu';
      }
    }
  };
  </script>

<style src= "../css/Result.css"></style>