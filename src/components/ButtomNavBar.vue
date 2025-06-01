<template>
  <div class="bottom-nav-bar__container">
      <router-link
        to="/"
        class="bottom-nav-bar__unit"
        active-class="bottom-nav-bar__unit_active"
        >
        <svg
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          class="bottom-nav-bar__icon"
        >
        <path
          d="M7 21V11.6C7 11.0399 7 10.7599 7.10899 10.546C7.20487 10.3578 7.35785 10.2048 7.54601 10.109C7.75992 9.99996 8.03995 9.99996 8.6 9.99996H15.4C15.9601 9.99996 16.2401 9.99996 16.454 10.109C16.6422 10.2048 16.7951 10.3578 16.891 10.546C17 10.7599 17 11.0399 17 11.6V21M10 14H14M10 18H14M3 10.4881V19.4C3 19.96 3 20.24 3.10899 20.454C3.20487 20.6421 3.35785 20.7951 3.54601 20.891C3.75992 21 4.03995 21 4.6 21H19.4C19.9601 21 20.2401 21 20.454 20.891C20.6422 20.7951 20.7951 20.6421 20.891 20.454C21 20.24 21 19.96 21 19.4V10.4881C21 9.41436 21 8.87747 20.8368 8.40316C20.6925 7.98371 20.457 7.60148 20.1472 7.28399C19.797 6.92498 19.3174 6.68357 18.3583 6.20075L14.1583 4.08645C13.3671 3.68819 12.9716 3.48905 12.5564 3.41069C12.1887 3.34129 11.8113 3.34129 11.4436 3.41069C11.0284 3.48905 10.6329 3.68818 9.84171 4.08645L5.64171 6.20075C4.6826 6.68357 4.20304 6.92498 3.85275 7.28399C3.54298 7.60148 3.30746 7.98371 3.16317 8.40316C3 8.87747 3 9.41437 3 10.4881Z"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        </svg>
        <span class="bottom-nav-bar__text">Склад</span>
      </router-link
      > 
      <router-link
        to="/sales"
        class="bottom-nav-bar__unit"
        active-class="bottom-nav-bar__unit_active"

        >
        <svg
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          class="bottom-nav-bar__icon"
        >
        <path
          d="M4.46785 10.2658C4.47574 10.3372 4.48376 10.4094 4.49187 10.4823L4.61751 11.6131C4.7057 12.4072 4.78218 13.0959 4.91562 13.6455C5.05917 14.2367 5.29582 14.7937 5.78931 15.2354C6.28281 15.6771 6.86251 15.8508 7.46598 15.9281C8.02694 16.0001 8.71985 16 9.51887 16H14.8723C15.4201 16 15.9036 16 16.3073 15.959C16.7448 15.9146 17.1698 15.8162 17.5785 15.5701C17.9872 15.324 18.2731 14.9944 18.5171 14.6286C18.7422 14.291 18.9684 13.8637 19.2246 13.3797L21.7141 8.67734C22.5974 7.00887 21.3879 4.99998 19.5 4.99998L9.39884 4.99998C8.41604 4.99993 7.57525 4.99988 6.90973 5.09287C6.5729 5.13994 6.24284 5.21529 5.93326 5.34375L5.78941 4.04912C5.65979 2.88255 4.67375 2 3.5 2H3C2.44772 2 2 2.44771 2 3C2 3.55228 2.44772 4 3 4H3.5C3.65465 4 3.78456 4.11628 3.80164 4.26998L4.46785 10.2658Z"
          fill="currentColor"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M14 19.5C14 18.1193 15.1193 17 16.5 17C17.8807 17 19 18.1193 19 19.5C19 20.8807 17.8807 22 16.5 22C15.1193 22 14 20.8807 14 19.5Z"
          fill="currentColor"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M5 19.5C5 18.1193 6.11929 17 7.5 17C8.88071 17 10 18.1193 10 19.5C10 20.8807 8.88071 22 7.5 22C6.11929 22 5 20.8807 5 19.5Z"
          fill="currentColor"
        />
        </svg>
        <span class="bottom-nav-bar__text">Продажа</span>
      </router-link
      > 

      <router-link
        class="bottom-nav-bar__unit">
        <svg
          fill="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          class="bottom-nav-bar__icon"
        >
        <path d="M20,4H4A2,2,0,0,0,2,6V18a2,2,0,0,0,2,2H20a2,2,0,0,0,2-2V6A2,2,0,0,0,20,4ZM9,16a1,1,0,0,1-2,0V12a1,1,0,0,1,2,0Zm4,0a1,1,0,0,1-2,0V10a1,1,0,0,1,2,0Zm4,0a1,1,0,0,1-2,0V8a1,1,0,0,1,2,0Z"></path>
        </svg>
        <span class="bottom-nav-bar__text">Отчеты</span>
      </router-link
      > 

      <router-link
        class="bottom-nav-bar__unit">
        <svg
          viewBox="0 0 121.663 121.662"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
          class="bottom-nav-bar__icon"
        >
        <g>
          <g>
            <circle cx="39.195" cy="13.094" r="13.094"></circle>
            <circle cx="82.469" cy="13.098" r="13.094"></circle>
            <path d="M108.158,61.635l-6.056-28.261c-1.127-5.265-6.466-7.792-11-7.924l-0.039,0.002c0,0-1.599,0.009-2.976,0.272
              c-1.441,0.275-2.705,0.968-2.705,0.968c-3.342,1.621-6.538,4.97-6.93,9.036c-0.052,0.196-0.115,0.386-0.146,0.592
              c-0.882,6.212-1.767,10.146-3.669,11.881c-1.963,1.786-6.371,2.583-14.294,2.583c-1.834,0-3.428,0.98-4.322,2.437
              c-4.782-0.975-7.603-2.214-9.093-3.938c-1.935-2.235-2.64-6.39-3.575-12.967c-0.029-0.206-0.094-0.396-0.146-0.592
              c-0.392-4.066-3.589-7.416-6.931-9.036c0,0-1.262-0.693-2.703-0.968c-1.378-0.263-2.976-0.272-2.976-0.272l-0.039-0.002
              c-4.533,0.132-9.872,2.659-11,7.924l-6.054,28.261c-0.808,3.773,0.88,7.152,3.61,9.48l-0.026,43.613
              c-0.002,3.828,3.1,6.934,6.928,6.936c0.001,0,0.003,0,0.004,0c3.827,0,6.93-3.1,6.932-6.928l0.024-41.268
              c2.865-1.14,5.287-3.352,6.026-6.801l2.292-10.699c3.646,4.258,9.67,6.701,20.409,8.169c0.234,0.032,0.466,0.048,0.696,0.048
              c2.145,0,4.042-1.363,4.764-3.354c8.407-0.444,13.623-2.176,17.014-5.743l2.48,11.582c0.739,3.45,3.161,5.662,6.026,6.802
              l0.024,41.267c0.002,3.828,3.104,6.928,6.932,6.928c0.001,0,0.002,0,0.004,0c3.828-0.002,6.93-3.107,6.928-6.936l-0.025-43.614
              C107.277,68.787,108.964,65.408,108.158,61.635z"></path>
          </g>
        </g>
        </svg>
        <span class="bottom-nav-bar__text">Клиенты</span>
      </router-link
      >     


  </div>
</template>

<script setup>
import { ref } from 'vue';


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
    background-color: green;
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
    color: white;

  }
    
 .bottom-nav-bar__unit_active,
.bottom-nav-bar__unit_active .bottom-nav-bar__icon,
.bottom-nav-bar__unit_active .bottom-nav-bar__text {
  color: rgb(54, 25, 242) !important;
}

  .bottom-nav-bar__icon {
    width: 35px;
    color: white;
  }

  .bottom-nav-bar__text {
    font-size: 15px;
    font-weight: 800;
    color: white;
    letter-spacing: 0.7px;
  }

</style>