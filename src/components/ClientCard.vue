<template>
  <div class="client-card__container">
    {{ clientTitle }}
    
  </div>
</template>

<script setup>
import { ref } from 'vue';

const name = ref('');

const props = defineProps ({
  clientTitle: {
    type: String,
    default: 'Иванов И. И.'
  }
})

</script>

<style scoped>
  .client-card__container{
    width: 100%;
    min-height: 50px;
    border-radius: 12px;
    color: black;
    background-color: white;
    margin-top: 15px;
    padding: 10px 15px 8px 15px;

  }

</style>