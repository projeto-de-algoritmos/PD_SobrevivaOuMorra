<template class="templat">
  <div class="home">
    <Button class="button" @click="$router.push('/cenarios')">SOBREVIVA!</Button>
  </div>
</template>

<script>

import Button from "./../components/Button"

export default{
  name:"home",
  components:{
    Button,
  }
}

</script>

<style src="../css/Home.css"></style>