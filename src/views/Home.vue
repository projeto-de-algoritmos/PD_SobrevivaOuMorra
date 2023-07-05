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

<style scoped>

.home {
  background-image: url(../assets/battle.png);
  background-size: cover;
  background-repeat: no-repeat;
  width: 100%;  
  height: 100%;
}


.button {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size:50px;
  display:flex;
}

h1 {
  color:red;  
}
</style>