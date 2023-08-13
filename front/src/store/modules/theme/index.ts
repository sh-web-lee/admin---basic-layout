import { defineStore } from "pinia";
import { darkTheme } from 'naive-ui'
import { getNaiveThemeOverrides, initThemeSetting } from "./helper";



type ThemeState = Theme.Setting;

export const useThemeStore = defineStore('theme-store', {
  state: (): ThemeState => initThemeSetting(),
  getters: {
    /** naiveUI的主题配置 */
    naiveThemeOverrides(state) {
      const overrides = getNaiveThemeOverrides({ primary: state.themeColor, ...state.otherColor });
      return overrides;
    },
    /** naive-ui暗黑主题 */
    naiveTheme(state) {
      return state.darkMode ? darkTheme : undefined
    },
    /** 页面动画模式 */
    pageAnimateMode(state) {
      return state.page.animate ? state.page.animteMode : undefined;
    }
  },
  actions: {
    /** 设置暗黑主题 */
    setDarkMode(darkMode: boolean) {
      this.darkMode = darkMode;
    }
  }
})