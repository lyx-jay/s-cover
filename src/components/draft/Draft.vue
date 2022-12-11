<script setup lang="ts">
import { fabric } from 'fabric';
import { computed, Ref, watch } from 'vue';
import { onMounted, onUnmounted, ref } from 'vue';
import { useStore } from 'vuex';
import { Debounce } from '../../utils';

const store = useStore()
const logoName = computed(() => store.state.logo.logoName)

const location: Ref<{ x: number, y: number }> = ref({ x: 10, y: 10 })
const addGraphicToCanvas = (logoName: string) => {
  const { x, y } = location.value
  fabric.Image.fromURL(logoName, function (oImg) {
    canvas.value!.add(oImg);
  }, { left: x, top: y });
}
const handleDbClick = (e: any) => {
  location.value = { x: e.offsetX, y: e.offsetY }
}
watch(location, (newValue) => {
  // console.log(logoName.value.name, 'logoname')
  addGraphicToCanvas(logoName.value.name)
})

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
  <div flex-1 h-full w-0 ref="canvasWrapper" @dblclick="handleDbClick">
    <canvas id="canvas" b-1 rd-1></canvas>
  </div>
</template>

<style scoped>

</style>