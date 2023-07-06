<template>
  <div class="master">
    <router-view/>
  </div>
</template>

<script>

export default {
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