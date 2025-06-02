<template>
  <div class="reports__filter">
    <label class="reports__label">{{ label }}</label>
    <div class="custom-select" @click.stop="toggle">
      <div class="selected-option">
        {{ selectedName ||placeholder}}
        <span class="arrow">▼</span>
      </div>
      <div v-if="isOpen" class="options-list">
        <div 
          v-for="item in items" 
          :key="item.id" 
          @click.stop="selectItem(item)"
          class="option"
        >
          {{ item.name }}
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, watch } from 'vue'

const props = defineProps({
  items: Array,
  modelValue: String,
  label: String,
  placeholder: {
    type: String,
    default: 'Выбрать',
  },
})

const emit = defineEmits(['update:modelValue'])


const isOpen = ref(false)
const toggle = () => isOpen.value = !isOpen.value

const selectedName = computed(() => {
const item = props.items.find(i => String(i.id) === String(props.modelValue))
  return item?.name || ''
})

const selectItem = (item) => {
  emit('update:modelValue', item.id)
  isOpen.value = false
}
</script>

<style scoped>
.custom-select {
  position: relative;
  width: 100%;
  cursor: pointer;
      -webkit-tap-highlight-color: transparent;
    tap-highlight-color: transparent;
}

.selected-option {
  padding: 7px 10px;
  border: 1px solid #ffffff;
  border-radius: 12px;
  
  display: flex;
  color: white;
  justify-content: space-between;
  align-items: center;

}

.arrow {
  font-size: 12px;
}

.options-list {
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  border: 1px solid #ccc;
  border-radius: 4px;
  background: white;
  z-index: 1000;
  max-height: 200px;
  overflow-y: auto;
}

.option {
  padding: 8px;
  color: black;
}

.option:hover {
  background-color: #f0f0f0;
}
</style>