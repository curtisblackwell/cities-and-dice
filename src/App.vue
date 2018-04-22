<template>
  <div id="app">
    <game-die></game-die>
    <game-die class="red"></game-die>
  </div>
</template>




<script>
import GameDie from './components/GameDie.vue';

export default {
  name:       'app',
  components: { GameDie },
};
</script>




<style lang="scss" src="./scss/app.scss"></style>
