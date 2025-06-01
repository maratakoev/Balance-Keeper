<template>
  <div>
    <ButtomNavBar></ButtomNavBar>
    <router-view />
  </div>
</template>

<script setup>
import { ref } from 'vue';
import HomeView from './views/HomeView.vue';
import ButtomNavBar from './components/ButtomNavBar.vue';

const name = ref('');

// Define methods here if needed

</script>

<style scoped>
html, body {
  margin: 0;
  padding: 0;
}
</style>