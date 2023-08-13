/** 用户角色 */
export enum EnumUserRole {
  super = 'Super',
  admin = 'Admin',
  user = 'User'
}

/** 登录模块 */
export enum EnumLoginModule {
  'pwd-login' = 'Account',
  'code-login' = 'Phone',
  'register' = 'Register',
  'reset-pwd' = 'Reset',
  'bind-wechat' = 'Wechat'
}
