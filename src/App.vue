<script setup lang="ts">
import Header from './components/header/Header.vue';
import Board from './components/board/Board.vue';
import Draft from './components/draft/Draft.vue';
</script>

<template>
  <div h-screen flex flex-col p-l-5 p-r-5 p-b-5>
    <Header />
    <div flex-1 flex items-center gap-3>
      <Board />
      <Draft />
    </div>
  </div>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
}

.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}

.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
