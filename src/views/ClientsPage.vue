<template>
  <div class="сlients-page__container">
    <MainTitle title="Партнеры" ></MainTitle>
    <div class="сlients-page__search">
      searchc
    </div>    
    <div class="testing">

    </div>
  </div>
</template>

<script setup>
import MainTitle from '@/components/MainTitle.vue';
import { ref } from 'vue';

const name = ref('');

// Define methods here if needed

</script>

<style scoped>
.сlients-page__container{
  min-width: 400px;
  min-height: 400px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  padding-top: 50px;
  padding-left: 20px;
  padding-right: 20px;  background-color: blueviolet;
}

.сlients-page__search {

}


</style>