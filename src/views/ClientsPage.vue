<template>
  <div class="сlients-page__container">
    <div class="сlients-page__title-block">
      <MainTitle title="Партнеры" ></MainTitle>
      <AddIcon class="сlients-page__add"></AddIcon>
    </div>


    <Search></Search>
    <ClientCard
    client-title="Кабисов И. А."
    />
        <ClientCard
    client-title="Кусов К. О."
    />
        <ClientCard
    client-title="Газзаев А. О."
    />
        <ClientCard
    client-title="Харченко С. С."
    />
  </div>
</template>

<script setup>
import ClientCard from '@/components/ClientCard.vue';
import AddIcon from '@/components/icons/AddIcon.vue';
import MainTitle from '@/components/MainTitle.vue';
import Search from '@/components/Search.vue';
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

.сlients-page__title-block {
  display: flex;
  justify-content: space-between;
}


.сlients-page__search {

}



</style>