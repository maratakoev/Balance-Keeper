<template>
  <div class="product-card__container">
    <div class="product-card__title">
    {{ productCardTitle }}
    </div>
      <div>
        
      </div>
      <div class="product-card__amount">
        Количество товара на складе:
        <span class="product-card__amount-int"> {{ productCardAmount }} {{ productCardMeasure }} <EditIcon class="productCardIcon"></EditIcon></span>
        
      </div>
      <div class="product-card__price">
        Цена на закупе:
        <span class="product-card__price-int"> {{ productCardPrice }} руб. <DeleteIcons class="productCardIcon"></DeleteIcons> </span>
      </div>
    

  </div>
</template>

<script setup>
import { ref } from 'vue';
import EditIcon from './icons/EditIcon.vue';
import DeleteIcons from './icons/DeleteIcons.vue';

const props = defineProps ({
  productCardTitle: {
    type: String,
    default: 'Товар'

  },
  productCardAmount: {
    type: Number,
    default: 0,
  },
  productCardPrice: {
    type: Number,
    default: 0,
  },
  productCardMeasure: {
    type: String,
    default: 'шт'
  }

})

// Define methods here if needed

</script>

<style scoped>
  .product-card__container {
    width: 100%;
    min-height: 50px;
    overflow: hidden;
    background-color: white;
    border-radius: 12px;
    border: 1px solid rgba(175, 174, 174, 0.712);
    padding: 10px 15px 8px 15px;
    margin-top: 15px;

  }

  .product-card__title {
    font-size: 20px;
    font-weight: 700;
    color: black;
  }
  .product-card__amount {
    display: flex;
    justify-content: space-between;
    font-size: 16px;
    color: black;
    margin-top: 8px;
  }
  .product-card__amount-int {
    font-weight: 700;
    font-size: 18px;
  }

  .product-card__price {
    display: flex;
    justify-content: space-between;
    font-size: 16px;
    margin-top: 8px;
    color: black;
  }

  .product-card__price-int {
    font-weight: 700;
        font-size: 18px;


  }

  .productCardIcon {
    margin-left: 10px;
  }
</style>