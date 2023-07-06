<template class="templat">
  <div class="home">
    <Button class="button" :buttonName="nomeBotao" @click="$router.push('/cenarios')" />
  </div>
</template>

<script>

import Button from "./../components/Button"

export default{
  name:"home",
  components:{
    Button,
  },
  data(){
    return{
      nomeBotao: "SOBREVIVA!"
    }
  }
}

</script>

<style src= "../css/Home.css"></style>