<script setup lang="ts">
import Header from './components/header/Header.vue';
</script>

<template>
  <Header />
  <div text-center font-sans p4>
    <div logo />
    <div text-blue5 text-lg>
      Hello UnoCSS + Vue
    </div>
    <div i-custom-icon />
    <div i-custom-multi-line-attr />
    <div hidden class="bg-[url(../src/uno.svg)] bg-[url(/uno.svg)]" />
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
