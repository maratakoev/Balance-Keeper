<template>
  <div>
    <!-- <ButtomNavBar></ButtomNavBar> -->
    
    <div class="testing">

    </div>
  </div>
</template>

<script setup>
import ButtomNavBar from '@/components/ButtomNavBar.vue';
import { ref } from 'vue';

const name = ref('');

// Define methods here if needed

</script>

<style scoped>
html, body {
  margin: 0;
  padding: 0;
}

.testing {
  width: 300px;
  height: 300px;
  background-color: red;
}
</style>