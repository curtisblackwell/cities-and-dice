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
export default {
  name: 'GameDie',


  props: {
    sides: {
      type:    Array,
      default: () => [1, 2, 3, 4, 5, 6],
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
