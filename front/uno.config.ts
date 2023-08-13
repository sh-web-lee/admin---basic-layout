// uno.config.ts
import { defineConfig } from 'unocss/vite'
import presetUno from 'unocss/preset-uno'

export default defineConfig({
  presets: [presetUno({ dark: 'class' })],
  // ...UnoCSS选项
  shortcuts: {
    'wh-full': 'w-full h-full',
    'absolute-lt': 'absolute left-0 top-0',
    'flex-center': 'flex justify-center items-center',
    'flex-x-center': 'flex justify-center',
    'flex-y-center': 'flex items-center',
    'flex-col-stretch': 'flex-col items-stretch',
    'flex-col': 'flex flex-col',
    'flex-1-hidden': 'flex-1 overflow-hidden',
    'flex-col-center': 'flex-col flex-center',
    'plr-20px': 'pl-20px pr-20px'
  },
  theme: {
    colors: {
      primary: 'var(--primary-color)',
    }
  }
})