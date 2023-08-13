import { ref, nextTick, effectScope, watch } from 'vue'
import * as echarts from 'echarts/core'
import { useThemeStore } from '../store'
import { useElementSize } from '@vueuse/core';
import { CanvasRenderer } from 'echarts/renderers'
import {
  TooltipComponent,
  TooltipComponentOption,
  GridComponent,
  GridComponentOption,
  MarkLineComponent,
  MarkLineComponentOption,
  LegendComponent,
  LegendComponentOption
} from 'echarts/components'

import {
  BarChart,
  BarSeriesOption
} from 'echarts/charts'

echarts.use([
  TooltipComponent,
  GridComponent,
  MarkLineComponent,
  LegendComponent,
  BarChart,
  CanvasRenderer
])


export type ECOption = echarts.ComposeOption<
  | TooltipComponentOption
  | GridComponentOption
  | LegendComponentOption
  | MarkLineComponentOption
  | BarSeriesOption>


/**
 * Echarts hooks函数
 * @param options - 图表配置
 * @param renderFun - 图表渲染函数(例如：图表监听函数)
 * @description 按需引入图表组件，没注册的组件需要先引入
 */
export function useEcharts(
  options,
  renderFun
) {
  const theme = useThemeStore();

  const domRef = ref<HTMLElement>();

  const initialSize = { width: 0, height: 0 }
  const { width, height } = useElementSize(domRef, initialSize)

  let chart: echarts.ECharts | null = null;


  function canRender() {
    return initialSize.width > 0 && initialSize.height > 0;
  }

  function isRendered() {
    return Boolean(domRef.value && chart)
  }

  async function render() {
    if (domRef.value) {
      const chartTheme = theme.darkMode ? 'dark' : 'light';
      // await nextTick();
      chart = echarts.init(domRef.value, chartTheme)
      if (renderFun) {
        renderFun(chart)
      }
    }
  }


  const scope = effectScope();

  scope.run(() => {
    watch([width, height], ([newWidth, newHeight]) => {
      initialSize.width = newWidth;
      initialSize.height = newHeight;
      if (newWidth === 0 && newHeight === 0) {
        // 节点被删除，将chart置为空
        chart = null
      }
      if (canRender()) {
        if (!isRendered()) {
          render()
        }
      }
    })
  })

  return {
    domRef
  }
}