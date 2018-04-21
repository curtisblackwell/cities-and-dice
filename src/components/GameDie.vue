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
    sides: Array,
  },
};
</script>
