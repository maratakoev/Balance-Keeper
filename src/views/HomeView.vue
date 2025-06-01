<template>
  <div class="home-page__container">
    <MainTitle title="Склад" ></MainTitle>
    <Search></Search>  
    <ProductCard productCardTitle="Кола 1,5 л"></ProductCard>
    <ProductCard productCardTitle="Кола 2 л"></ProductCard>
    <ProductCard productCardTitle="Кола ж/б"></ProductCard>
    <ProductCard productCardTitle="Адреналин"></ProductCard>

    </div>
  
</template>

<script setup>
import MainTitle from '@/components/MainTitle.vue';
import ProductCard from '@/components/ProductCard.vue';
import Search from '@/components/Search.vue';
import { ref } from 'vue';

const name = ref('');

// Define methods here if needed

</script>

<style scoped>
.home-page__container{
  min-width: 400px;
  min-height: 400px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  padding-top: 50px;
  padding-left: 20px;
  padding-right: 20px;
  background-color: rgb(199, 197, 197);
}

.home-page__search {

}


</style>