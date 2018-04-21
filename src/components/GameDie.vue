<template>
  <div class="game-die">
    <div
      v-for  = "(side, i) in sides"
      :key   = "i"
      v-show = "side === 1"
      v-text = "side"
      class  = "game-die-side"
    ></div>
  </div>
</template>




<script>
export default {
  name:  'GameDie',
  props: {
    sides: {
      type:    Array,
      default: () => [1, 2, 3, 4, 5, 6],
    },
  },
};
</script>
