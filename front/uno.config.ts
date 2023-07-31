// uno.config.ts
import { defineConfig } from 'unocss/vite'
import presetUno from 'unocss/preset-uno'

export default defineConfig({
  presets: [presetUno({ dark: 'class' })],
  // ...UnoCSS选项
  shortcuts: {
    'wh-full': 'w-full h-full',
  },
  theme: {
    colors: {
      primary: 'var(--primary-color)',
    }
  }
})