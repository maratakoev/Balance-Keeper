<template>
  <div class="sales-page__container">
    <MainTitle title="Продажи" ></MainTitle>
    <Search/>   
    <SaleCard 
    partner="Бекоев З. Т."
    sale-id="00123" 
    sale-data="01,06,2025"
    sale-positions="4"
    sale-price="150,000"
    sale-status="Оплачено"
    />
        <SaleCard 
    partner="Бекоев З. Т."
    sale-id="00123" 
    sale-data="01,06,2025"
    sale-positions="4"
    sale-price="150,000"
    sale-status="Частично оплачено"
    />
        <SaleCard 
    partner="Бекоев З. Т."
    sale-id="00123" 
    sale-data="01,06,2025"
    sale-positions="4"
    sale-price="150,000"
    sale-status="Не оплачено"
    />
    <SaleCard 
    partner="Бекоев З. Т."
    sale-id="00123" 
    sale-data="01,06,2025"
    sale-positions="4"
    sale-price="150,000"
    sale-status="Возврат"
    />
  </div>
</template>

<script setup>
import MainTitle from '@/components/MainTitle.vue';
import SaleCard from '@/components/SaleCard.vue';
import Search from '@/components/Search.vue';
import { ref } from 'vue';

const name = ref('');

// Define methods here if needed

</script>

<style scoped>
.sales-page__container{
  min-width: 400px;
  min-height: 400px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  padding-top: 50px;
  padding-left: 20px;
  padding-right: 20px;
  background-color: blueviolet;
}

.sales-page__search {

}


</style>