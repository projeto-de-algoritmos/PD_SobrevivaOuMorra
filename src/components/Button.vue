<template>
    <button class="custom-button"> {{ buttonName }} </button>
</template>

<script>
export default {
    name: "Button",
    props: {
      buttonName:{
        type: String,
        required: true,
      },
    },
}
</script>

<style scoped>
.custom-button {
  background: linear-gradient(to right, red, blue);
  color: white;
  padding: 12px 24px;
  border-width: 5px;
  border-radius: 4px;
  font-size: 18px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  text-transform: uppercase;
  font-weight: bold;
}

.custom-button:hover {
  background: linear-gradient(to right, #ff7f00, #00bfff);
  background-size: 200% auto;
  background-position: right center;
}

.custom-button:focus {
  outline: none;
}
</style>