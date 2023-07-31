import vue from '@vitejs/plugin-vue'
import UnoCSS from 'unocss/vite'
import html from './html'
import unplugin from './unplugin';




export function setupVitePlugin(viteEnv: ImportMetaEnv) {
  const plugins = [vue(), html(viteEnv), UnoCSS(), ...unplugin()];

  return plugins;
}