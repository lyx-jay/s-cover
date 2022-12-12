<script setup lang="ts">
import { fabric } from 'fabric';
import { computed, inject, onMounted, onUnmounted, Ref, ref, watch } from 'vue';
import { useStore } from 'vuex';
import { Debounce } from '@/utils';

let lastLogoName: string = ''
const store = useStore()
const logoName = computed(() => store.state.logo.logoName)

// init canvas
let canvas: fabric.Canvas | null | undefined = inject('$canvas')
const canvasWrapper = ref()
const initCanvas = () => {
  const wrapperSize = canvasWrapper.value.getBoundingClientRect()
  canvas?.dispose()
  canvas = new fabric.Canvas('canvas')
  canvas.setWidth(wrapperSize.width)
  canvas.setHeight(wrapperSize.height)
}


const location: Ref<{ x: number, y: number }> = ref({ x: 10, y: 10 })

const addGraphicToCanvas = (logoName: string) => {
  // 防止对同一个图形重复添加
  if (logoName === lastLogoName) return
  lastLogoName = logoName
  const { x, y } = location.value
  fabric.Image.fromURL(logoName, function (oImg) {
    canvas!.add(oImg);
  }, { left: x, top: y });
}

// 监听位置的变化，每当位置发生改变时，重新调用addGraphicToCanvas函数
watch(location, (newValue) => {
  addGraphicToCanvas(logoName.value.name)
})


const handleDbClick = (e: any) => {
  location.value = { x: e.offsetX, y: e.offsetY }
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
  <div flex-1 h-full w-0 ref="canvasWrapper" @dblclick="handleDbClick">
    <canvas id="canvas" b-1 rd-1></canvas>
  </div>
</template>

<style scoped>

</style>