<script setup lang="ts">
import { fabric } from 'fabric';
import type { Ref } from 'vue';
import { onMounted, onUnmounted, ref } from 'vue';
import { Debounce } from '../../utils';

const canvas: Ref<fabric.Canvas | null> = ref(null)
const canvasWrapper = ref()

const initCanvas = () => {
  const wrapperSize = canvasWrapper.value.getBoundingClientRect()
  canvas.value?.dispose()
  canvas.value = new fabric.Canvas('canvas')
  canvas.value.setWidth(wrapperSize.width)
  canvas.value.setHeight(wrapperSize.height)
}

onMounted(() => {
  // first init canvas after component mounted
  initCanvas()
  // reset canvas while resize canvas
  window.addEventListener('resize', Debounce.use(initCanvas, 200))
})

onUnmounted(() => {
  window.removeEventListener('resize', Debounce.use(initCanvas, 200))
})
</script>

<template>
  <div flex-1 h-full w-0 ref="canvasWrapper">
    <canvas id="canvas" b-1 rd-1></canvas>
  </div>
</template>

<style scoped>

</style>