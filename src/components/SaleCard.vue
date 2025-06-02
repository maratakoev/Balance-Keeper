<template>
  <div class="sale-card__container">
    <div class="sale-card__header">
      <span> {{ partner }}</span>
      <span class="sale-card__number"> #{{ saleId }}</span>
      <span class="sale-card__date">{{ saleData}}</span>
      
    </div>
    <div class="sale-card__contact">
      
    </div>

    <div class="sale-card__body">
      <div class="sale-card__summary">
        <span class="sale-card__count">позиций: {{ salePositions }}</span> <br>
        <span class="sale-card__total">{{ salePrice }} </span>
      </div>

      <div class="sale-card__status">{{saleStatus}}</div>
    </div>



    <div class="sale-card__footer">
      <button>Подробнее</button>
      <button>Редактировать</button>
      <button>Удалить</button>
    </div>
  </div>
</template>

<script setup>

const props = defineProps ({
  partner: {
    type: String,
    default: 'Иванов И. И.'
  },
  saleId: {
    type: Number,
    required: true
  },
  saleData: {
    type: String,
    default: '01.01.2025'
  },
  salePositions: {
    type: Number,
  },
  salePrice: {
    type: Number,
  },
  saleStatus: {
    type: String
  }


})
</script>

<style scoped>
.sale-card__container {
  border-radius: 8px;
  padding: 1rem;
  margin-bottom: 1rem;
  background-color: #f0f0f0; /* цвет потом меняешь по статусу */
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  color: black;
  margin-top: 15px;
}

.sale-card__header,
.sale-card__body,
.sale-card__footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
}


</style>
