/** 枚举的key类型 */
declare namespace EnumType {
  /** 布局组件名称 */
  type LayoutComponentName = keyof typeof import('@/enum').EnumLayoutComponentName;

  /** 过渡动画 */
  type ThemeAniateMode = keyof typeof import('@/enum').EnumThemeAnimateMode;

  /** 登录模块 */
  type LoginModuleKey = keyof typeof import('@/enum').EnumLoginModule;
}


/** 主题相关类型 */
declare namespace Theme {
  interface Setting {
    /** 主题颜色 */
    themeColor: string;
    /** 其他颜色 */
    otherColor: OtherColor;
    /** 是否自定义info的颜色(默认取比主题色深一级的颜色) */
    isCustomizeInfoColor: boolean;
    /** 暗黑主题 */
    darkMode: boolean;
    /** 页面样式 */
    page: Page;
    /** 头部样式 */
    header: Header;
    /** 布局样式 */
    layout: Layout;
  }

  /** 布局样式 */
  interface Layout {
    /** 最小宽度 */
    minWidth: number;
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

  /** 头部样式 */
  interface Header {
    /** 头部反转色 */
    inverted: boolean;
    /** 头部高度 */
    height: number;
  }

  /** 页面样式 */
  interface Page {
    /** 是否开启页面动画 */
    animate: boolean;
    /** 动画类型 */
    animteMode: EnumType.ThemeAniateMode;
    /** 动画类型列表 */
    animateModeList: AnimateModeList[];
  }
  /** 动画类型列表 */
  interface AnimateModeList {
    value: EnumType.ThemeAniateMode;
    label: import('@/enum').EnumThemeAnimateMode;
  }
}


declare namespace App {

  /** 菜单配置项 */
  type GlobalMenuOption = import('naive-ui').MenuOption & {
    key: string;
    label: string;
    routePath: string;
  }
}

/** 请求的相关类型 */
declare namespace Service {
  /**
   * 请求的错误类型：
   * - axios: axios错误：网络错误, 请求超时, 默认的兜底错误
   * - http: 请求成功，响应的http状态码非200的错误
   * - backend: 请求成功，响应的http状态码为200，由后端定义的业务错误
  */
  type RequestErrorType = 'axios' | 'http' | 'backend';

  /** 请求错误 */
  interface RequestError {
    /** 请求服务的错误类型 */
    type: RequestErrorType;
    /** 错误码 */
    code: string | number;
    /** 错误信息 */
    msg: string;
  }

  /** 后端接口返回数据结构配置 */
  interface BackendResultConfig {
    /** 请求状态码的属性字段 */
    codeKey: string;
    /** 请求数据的属性字段 */
    dataKey: string;
    /** 表示后端消息的属性字段 */
    msgKey: string;
    /** 后端业务上定义的成功请求的状态 */
    successCode: number | string;
  }

  /** 自定义的请求成功结果 */
  interface SuccessResult<T = any> {
    /** 请求错误 */
    error: null;
    /** 请求数据 */
    data: T;
  }

  /** 自定义的请求结果 */
  type RequestResult<T = any> = SuccessResult<T> | FailedResult

  /** 自定义的请求失败结果 */
  interface FailedResult {
    /** 请求错误 */
    error: RequestError;
    /** 请求数据 */
    data: null;
  }
}