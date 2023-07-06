<template>
    <div>
      <h1>RESULT!</h1>
      <div>
        {{ statusMessage }}
      </div>
    </div>
  </template>

  <script>
  import { knapsack } from '../utils/PDknapsack';

  export default {
    name: 'Result',
    data() {
      return {
        selectedItems: []
      };
    },
    mounted() {
      const storedItems = localStorage.getItem('selectedItems');
      if (storedItems) {
        this.selectedItems = JSON.parse(storedItems);
        const size = 20;
        const result = knapsack(this.selectedItems, size);
        const msg = (result.objetosSelecionados.length === this.selectedItems.length)
            ? this.statusMessage = 'Viveu!!!'
            : this.statusMessage = 'Morreu!!!';
      }
    }
  };
  </script>
