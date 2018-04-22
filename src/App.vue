<template>
  <div id="app" class="flex flex-col items-center h-full relative z-20">
    <div class="flex-grow p-4 w-1/3 flex justify-center flex-col">
      <game-die></game-die>
      <game-die class="game-die-red"></game-die>
      <game-die :sides="eventDie"></game-die>
    </div>

    <div class="flex w-screen">
      <button class="btn-green p-8 w-1/2">🎲</button>
      <button class="btn-red p-8 w-1/2">️➡</button>
    </div>
  </div>
</template>




<script>
import GameDie from './components/GameDie.vue';

/* eslint-disable import/no-webpack-loader-syntax */
const developmentArea = require('!!html-loader!@/assets/svg/development-area.svg');
const barbarianShip   = require('!!html-loader!@/assets/svg/barbarian-ship.svg');
/* eslint-enable import/no-webpack-loader-syntax */

export default {
  name: 'app',

  components: { GameDie },

  data() {
    return {
      eventDie: [
        barbarianShip,
        barbarianShip,
        barbarianShip,
        `<span class="text-blue-dark">${developmentArea}</span>`,
        `<span class="text-green-dark">${developmentArea}</span>`,
        `<span class="text-red-dark">${developmentArea}</span>`,
      ],
    };
  },
};
</script>




<style lang="postcss" src="@/css/app.css"></style>
