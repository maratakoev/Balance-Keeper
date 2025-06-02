<template>
  <div class="search__container">
<svg
  class="search__icon"
  viewBox="0 0 24 24"
  width="16"
  height="16"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <path d="M14.9536 14.9458L21 21M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z" />
</svg>

    <input
    class="search__input"
    placeholder="Поиск"
    >

  </div>
</template>

<script setup>
import { ref } from 'vue';

const name = ref('');

// Define methods here if needed

</script>

<style scoped>
.search__container {
  width: 100%;
  margin-top: 15px;
  height: auto;
  border-radius: 12px;
  border: 1px solid grey;
  overflow: hidden ;
    position: relative;
    background-color: white;

}

.search__input {
  width: 100%;
  height: 30px;
  border-radius: 0;
  border: none;
  padding-left: 36px;
  background: transparent;
}

.search__icon {
  position: absolute;
  left: 12px;
  top: 50%;
  transform: translateY(-50%);
  color: grey;
  pointer-events: none; /* чтобы иконка не мешала клику */
  z-index: 3;
}

</style>