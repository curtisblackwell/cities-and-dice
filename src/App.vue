<template>
  <div id="app" class="flex flex-col items-center h-full relative z-20">
    <div class="flex-grow p-4 w-1/3 flex justify-center flex-col">
      <game-die></game-die>
      <game-die class="game-die-red"></game-die>
      <game-die :sides="eventDie"></game-die>
    </div>

    <div class="flex w-screen">
      <button class="btn-roll p-8 w-1/2" @click="roll">🎲</button>
      <button class="btn-pass p-8 w-1/2" @click="pass" disabled>️➡</button>
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
      buttons: [],

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

  methods: {
    /**
     * Pass the dice so another player can roll.
     *
     * @return void
     */
    pass() {
      this.toggleButtons();
    },

    /**
     * Roll all the dice.
     *
     * @return void
     */
    roll() {
      this.toggleButtons();
      this.$children.forEach(die => die.roll());
    },

    /**
     * Toggle enabled/disabled state for buttons.
     *
     * @return void
     */
    toggleButtons() {
      /* eslint-disable no-param-reassign, no-return-assign */
      this.buttons.forEach(button => button.disabled = !button.disabled);
      /* eslint-enable no-param-reassign, no-return-assign */
    },
  },

  /**
   * When mounted, add buttons to data to simplify toggling.
   */
  mounted() {
    this.buttons = this.$el.querySelectorAll('button');
  },
};
</script>




<style lang="postcss" src="@/css/app.css"></style>
