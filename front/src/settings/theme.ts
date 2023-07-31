import jsonSetting from './theme.json'

const themeColorList = [
  '#1570FF',
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
  isCustomizeInfoColor: false
}


export const themeSetting = (jsonSetting as Theme.Setting) || defaultThemeSetting;