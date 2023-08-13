declare namespace StorageInterface {

  /** localStorage的存储数据的类型 */
  interface Local {
    /** 主题色 */
    themeColor: string;
    /** token */
    token: string;
    /** 用户信息 */
    userInfo: Auth.UserInfo;
  }
}