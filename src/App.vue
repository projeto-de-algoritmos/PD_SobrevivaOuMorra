<template>
  <div class="master">
    <Navbar />
    <router-view/>
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue';

export default {
  components:{
    Navbar,
  }
}
</script>

<style scoped>

.master {
  position: absolute;
  background-color: gray;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;  
  height: 100%;
}

</style>