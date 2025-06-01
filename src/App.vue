<template>
  <div>
    <ButtomNavBar></ButtomNavBar>
    <router-view />
  </div>
</template>

<script setup>
import { ref } from 'vue';
import ButtomNavBar from './components/ButtomNavBar.vue';

const name = ref('');

// Define methods here if needed

</script>

<style >
html, body {
  margin: 0;
  padding: 0;
}

#app {
  padding: 0;
  margin: 0;
  height: 100%;
}
</style>