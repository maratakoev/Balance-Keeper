<template>
  <div class="reports-page__container">
    <MainTitle title="Отчеты" ></MainTitle>
    <label class="reports-page__data" for="start-date">Начало периода:</label>
    <input class="reports-page__input" type="date" id="start-date" v-model="periodStart" />

    <label class="reports-page__data" for="end-date">Окончание периода:</label>
    <input class="reports-page__input"  type="date" id="end-date" v-model="periodEnd" />
    <PartnersDropDown
  v-model="selectedPartnerId"
  :items="partners"
  label="Партнёр"
  placeholder="Все партнёры"
    />
    <PartnersDropDown
  v-model="selectedPositionId" 
  :items="positions" 
  label="Позиция" 
  placeholder="Все позиции"
    />

    <div class="reports-page__points"><span>Продали упаковок: </span> <strong>35шт (14уп)</strong> </div>
    <div class="reports-page__points"><span>Заработали в рублях :</span> <strong>500 рублей</strong> </div>
    <div class="reports-page__points"><span>Прибыль в процентах:</span> <strong>15 %</strong> </div>
    <div class="reports-page__points"><span>Задолженности</span> <strong>5 чел 400 р</strong> </div>
    <div class="reports-page__points"><span>Стоимость склада на данный момент</span> <strong>200 р</strong> </div>

    



  </div>
</template>

<script setup>
import MainTitle from '@/components/MainTitle.vue';
import PartnersDropDown from '@/components/PartnersDropDown.vue';
import { ref } from 'vue';

const name = ref('');

const selectedPartnerId = ref(''); // Для партнеров
const selectedPositionId = ref(''); // Для позиций

const partners = ref([
  { id: '1', name: 'ООО Ромашка' },
  { id: '2', name: 'ИП Иванов' },
])

const positions = ref([
  { id: '1', name: 'Кетчуп 500г' },
  { id: '2', name: 'Мука 2кг' },
  { id: '3', name: 'Молоко 1л' },
])
// Define methods here if needed

</script>

<style scoped>
.reports-page__container{
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

.reports-page__search {

}
.reports-page__input {
  height: 30px;
  border-radius: 12px;
  padding: 0 15px;
  max-width: 50%;
  margin-bottom: 10px;
}

.reports-page__data {
  font-size: 16px;
  color: white;

}

.reports-page__points {
  color: white;
  margin-top: 15px;
}


</style>
<!-- 
Дропдаун партнёров (или "Все партнёры" по умолчанию)
Выбор периода (даты)
Общая прибыль
Кол-во проданных товаров
Процент прибыли (рентабельность)
Сумма долгов
Возвраты (кол-во и сумма) -->