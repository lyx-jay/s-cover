import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Unocss from '@unocss/vite'
import presetUno from '@unocss/preset-uno'
import presetAttributify from '@unocss/preset-attributify'
import presetIcons from '@unocss/preset-icons'
import path from 'path'

const setPath = (foldName: string) => {
  return path.resolve(__dirname, foldName)
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    Unocss({
      presets: [
        presetUno(),
        presetAttributify(),
        presetIcons()
      ]
    })
  ],
  resolve: {
    alias: {
      '@': setPath('src'),
      'components': setPath('src/components'),
      'config': setPath('src/config'),
      'utils': setPath('src/utils'),
      'store': setPath('src/store'),
    }
  }
})
