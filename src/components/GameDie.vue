<template>
  <div class="game-die">
    <div
      v-for  = "(side, i) in sides"
      :key   = "i"
      v-show = "sideWasRolled(side)"
      v-html = "side"
      class  = "game-die-side"
    ></div>
  </div>
</template>




<script>
/* eslint-disable import/no-webpack-loader-syntax */
const D6_1 = require('!!html-loader!@/assets/svg/D6-1.svg');
const D6_2 = require('!!html-loader!@/assets/svg/D6-2.svg');
const D6_3 = require('!!html-loader!@/assets/svg/D6-3.svg');
const D6_4 = require('!!html-loader!@/assets/svg/D6-4.svg');
const D6_5 = require('!!html-loader!@/assets/svg/D6-5.svg');
const D6_6 = require('!!html-loader!@/assets/svg/D6-6.svg');
/* eslint-enable import/no-webpack-loader-syntax */

export default {
  name: 'GameDie',


  props: {
    sides: {
      type:    Array,
      default: () => [D6_1, D6_2, D6_3, D6_4, D6_5, D6_6],
    },
  },


  data() {
    return {
      rolledIndex: null,
    };
  },


  methods: {
    /**
     * Roll the die.
     *
     * @return void
     */
    roll() {
      const min = 0;
      const max = this.sides.length - 1;
      this.rolledIndex = Math.floor(Math.random() * (max - min + 1)) + min;
    },

    /**
     * Check if the passed side was most recently rolled.
     *
     * @param mixed side
     * @return Boolean
     */
    sideWasRolled(side) {
      return side === this.sides[this.rolledIndex];
    },
  },


  created() {
    this.roll();
  },
};
</script>
