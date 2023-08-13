import { GlobalThemeOverrides } from 'naive-ui'
import { effectScope, watch } from "vue";
import { kebabCase } from 'lodash-es'
import { useThemeStore } from "../modules";
import { localStg } from '~/src/utils';
import { useElementSize } from '@vueuse/core';




/** 订阅theme store */
export default function subscribeThemeStore() {
  const theme = useThemeStore();
  const { width } = useElementSize(document.documentElement)
  const scope = effectScope();

  scope.run(() => {
    // 监听主题颜色
    watch(
      () => theme.themeColor,
      newValue => {
        localStg.set('themeColor', newValue)
      },
      { immediate: true }
    )


    // 监听naiveUI themeOverrides
    watch(
      () => theme.naiveThemeOverrides,
      newValue => {
        if (newValue.common) {
          addThemeCssVarsToHtml(newValue.common)
        }
      },
      { immediate: true }
    )

    // 禁用横向滚动(页面切换时,过渡动画会产生水平方向的滚动条, 小于最小宽度时，不禁止)
    watch(width, newValue => {
      if (newValue < theme.layout.minWidth) {
        document.documentElement.style.overflowX = 'auto';
      } else {
        document.documentElement.style.overflowX = 'hidden';
      }
    });
  })
}

type ThemeVars = Exclude<GlobalThemeOverrides['common'], undefined>;
type ThemeVarsKeys = keyof ThemeVars;

/** 添加css vars至html */
function addThemeCssVarsToHtml(themeVars: ThemeVars) {
  const keys = Object.keys(themeVars) as ThemeVarsKeys[];
  const style: string[] = [];
  keys.forEach(key => {
    style.push(`--${kebabCase(key)}: ${themeVars[key]}`);
  });
  const styleStr = style.join(';');
  document.documentElement.style.cssText += styleStr;
}