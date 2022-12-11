<script setup lang="ts">
import { computed, ref } from 'vue';
import { useStore } from 'vuex';
import logoData from '@/config/logo-data';
import { getImageUrl } from '@/utils';

const inputText = ref('')
const imgSrcList = computed(() => {
  const logos = inputText.value !== '' ? logoData.filter(logo => logo.includes(inputText.value)) : []
  return logos.map(logo => getImageUrl(logo))
})


const store = useStore()
const handleClickLogo = (imgSrc: string) => {
  store.dispatch('setLogoName', {
    name: imgSrc
  })
}


</script>

<template>
  <div b-1 w-80 h-full rd-1 p-3 flex flex-col>
    <div m-t-2 m-b-2 w-full b-1 rd-1 flex items-center>
      <input type="text" flex-1 b-0 outline-0 w40 v-model="inputText">
      <div i-ps-magnifying-glass w-8 h-5></div>
    </div>
    <div flex-1 overflow-auto>
      <div flex gap-6 flex-wrap>
        <div v-for="imgSrc in imgSrcList" w-12 h-12 cursor-pointer @click="handleClickLogo(imgSrc)">
          <img :src="imgSrc" alt="logo" w-full h-full>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>