<template>
  <div class="main-title__container">
    {{ title }}
  </div>
</template>

<script setup>
import { ref } from 'vue';

const props = defineProps ({
  title: {
    type: String,
    default: 'Заголовок'
  }
})

const name = ref('');


</script>

<style scoped>
  .main-title__container {
    display: flex;
    color: white;
    font-size: 25px;
    font-weight: 600px;
    
  }

</style>