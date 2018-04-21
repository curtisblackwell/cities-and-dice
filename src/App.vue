<template>
  <div id="app">
    <game-die :sides="[1, 2, 3, 4, 5, 6]"></game-die>
  </div>
</template>




<script>
import GameDie from './components/GameDie.vue';

export default {
  name:       'app',
  components: { GameDie },
};
</script>



<style lang="scss">
body {
  background-color: #3d4852;
  color: #dae1e7;
}
</style>
