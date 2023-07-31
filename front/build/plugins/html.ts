import { createHtmlPlugin } from 'vite-plugin-html'
import type { PluginOption } from 'vite'

export default (viteEnv: ImportMetaEnv): PluginOption[] => {
  return createHtmlPlugin({
    minify: true,
    entry: 'src/main.ts',
    inject: {
      data: {
        appName: viteEnv.VITE_APP_NAME,
        appTitle: viteEnv.VITE_APP_TITLE
      }
    }
  })
} 