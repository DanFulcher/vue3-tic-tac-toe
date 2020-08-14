<template>
  <div class="container">
    <Board />
  </div>
</template>

<script>
import { defineComponent } from 'vue';
import Board from './components/Board.vue';

export default defineComponent({
  name: 'App',
  components: {
    Board,
  },
});

</script>

<style scoped>
.container {
  display: grid;
  place-items: center;
  gap: 4rem;
  position: relative;
}
</style>
