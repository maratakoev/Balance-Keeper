<template>
  <div class="bottom-nav-bar__container">
      <router-link
        to="/"
        class="bottom-nav-bar__unit"
        active-class="bottom-nav-bar__unit_active"
        >
        <HomeIcon
        class="bottom-nav-bar__icon"
        />
        <span class="bottom-nav-bar__text">Склад</span>
      </router-link
      > 
      <router-link
        to="/sales"
        class="bottom-nav-bar__unit"
        active-class="bottom-nav-bar__unit_active"

        >
        <SalesIcon
          class="bottom-nav-bar__icon"

        />
        <span class="bottom-nav-bar__text">Продажа</span>
      </router-link
      > 

      <router-link
        to="/reports"
        class="bottom-nav-bar__unit"
        active-class="bottom-nav-bar__unit_active"
        >
        <Reports-icon
          class="bottom-nav-bar__icon"
        />
        <span class="bottom-nav-bar__text">Отчеты</span>
      </router-link
      > 

      <router-link
        to="/clients"
        class="bottom-nav-bar__unit"
        active-class="bottom-nav-bar__unit_active"
        >
        <Clients-icon
          class="bottom-nav-bar__icon"

        />
        <span class="bottom-nav-bar__text">Партнеры</span>
      </router-link
      >     


  </div>
</template>

<script setup>
import { ref } from 'vue';
import HomeIcon from './icons/HomeIcon.vue';
import SalesIcon from './icons/SalesIcon.vue';
import ReportsIcon from './icons/ReportsIcon.vue';
import ClientsIcon from './icons/ClientsIcon.vue';

const name = ref('');

// Define methods here if needed

</script>

<style scoped>
  .bottom-nav-bar__container {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    height: 90px;
    background-color: white;
    display: flex;
    align-items: center;
    justify-content: space-around;
    border-top-right-radius: 15px;
    border-top-left-radius: 15px;
    padding-bottom: 20px;
    padding-top: 10px;
    z-index: 1000;
    
  }
/* 
  .content{
    max-width: 700px;
    margin-right: auto;
    margin-left: auto;
    display: flex;
  } */

  .bottom-nav-bar__unit {
    /* background-color: blueviolet; */
    /* padding: 10px; */
    /* min-width: 100px; */
    min-height: 30px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    background-color: transparent;
    border: none;
    cursor: pointer;
    color: rgb(108, 106, 106);
    -webkit-tap-highlight-color: transparent;
    tap-highlight-color: transparent;

  }
    
 .bottom-nav-bar__unit_active,
.bottom-nav-bar__unit_active .bottom-nav-bar__icon,
.bottom-nav-bar__unit_active .bottom-nav-bar__text {
  color: rgb(116, 99, 241) !important;
}

  .bottom-nav-bar__icon {
    width: 35px;
    color: rgb(150, 148, 148);
  }

  .bottom-nav-bar__text {
    font-size: 15px;
    font-weight: 800;
    color: rgb(150, 148, 148);
    letter-spacing: 0.7px;
  }

</style>
<!-- 
Элементы:

🔍 Поиск товара по названию
📋 Список товаров:
Название
Количество на складе
Себестоимость
Категория (опционально)
➕ Кнопка "Добавить товар" — открывает форму:
Название
Категория (выбрать/добавить)
Себестоимость
Количество
✏️/🗑️ Иконки редактирования/удаления рядом с каждым товаром


➕ Продажа
Цель: оформление продажи и учёт прибыли.
Элементы:

📦 Выбор товара из выпадающего списка
🔢 Ввод количества к продаже
💵 Ввод цены продажи
✅ Кнопка "Продать" — сохраняет запись:
Дата, товар, количество, цена продажи, прибыль
❗ Проверка: достаточно ли остатка
📁 Создаётся файл с записью (Capacitor Filesystem API)

📊 Отчёты
Цель: отслеживание продаж и прибыли.
Элементы:

📅 Фильтр по дате (день/неделя/месяц)
📋 Список продаж:
Товар, дата, количество, цена продажи, прибыль
💰 Суммарная прибыль
📤 Экспорт отчёта (по кнопке)
🔍 Фильтрация по товару или категории -->