import { EnumThemeAnimateMode } from '../enum';
import jsonSetting from './theme.json'

const themeColorList = [
  '#9333EA',
  '#9DDEF4',
  '#C2A5F9',
  '#FFB3DA',
  '#FECE00',
  '#F97600',
  '#389810'
]

const defaultThemeSetting: Theme.Setting = {
  themeColor: themeColorList[0],
  otherColor: {
    info: '#2080f0',
    success: '#52c41a',
    warning: '#faad14',
    error: '#f5222d'
  },
  isCustomizeInfoColor: false,
  darkMode: false,
  header: {
    inverted: false,
    height: 56
  },
  layout: {
    minWidth: 900
  },
  page: {
    animate: true,
    animteMode: 'fade-slide',
    animateModeList: [
      { value: 'fade-slide', label: EnumThemeAnimateMode['fade-slide'] },
      { value: 'fade', label: EnumThemeAnimateMode['fade'] },
      { value: 'fade-bottom', label: EnumThemeAnimateMode['fade-bottom'] },
      { value: 'fade-scale', label: EnumThemeAnimateMode['fade-scale'] },
      { value: 'zoom-fade', label: EnumThemeAnimateMode['zoom-fade'] },
      { value: 'zoom-out', label: EnumThemeAnimateMode['zoom-out'] }
    ]
  }
}


export const themeSetting = (jsonSetting as Theme.Setting) || defaultThemeSetting;