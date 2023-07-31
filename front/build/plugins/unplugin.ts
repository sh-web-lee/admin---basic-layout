import Components from 'unplugin-vue-components/vite'
import { NaiveUiResolver } from 'unplugin-vue-components/resolvers'


export default function unplugin() {

  return [
    Components({
      dts: 'src/typings/component.d.ts',
      resolvers: [
        NaiveUiResolver()
      ]
    })
  ]
}