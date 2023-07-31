


/** 主题相关类型 */
declare namespace Theme {
  interface Setting {
    /** 主题颜色 */
    themeColor: string;
    /** 其他颜色 */
    otherColor: OtherColor;
    /** 是否自定义info的颜色(默认取比主题色深一级的颜色) */
    isCustomizeInfoColor: boolean;
  }


  /** 其他主题颜色 */
  interface OtherColor {
    /** 信息 */
    info: string;
    /** 警告 */
    warning: string;
    /** 成功 */
    success: string;
    /** 错误 */
    error: string
  }
}