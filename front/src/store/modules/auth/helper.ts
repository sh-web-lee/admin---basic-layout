import { localStg } from "~/src/utils"

/** 获取token */
export function getToken() {
  return localStg.get('token') || ""
}


/** 获取用户信息 */
export function getUserInfo() {
  const emptyInfo: Auth.UserInfo = {
    userId: '',
    userName: '',
    userRole: 'user'
  }
  const userInfo: Auth.UserInfo = localStg.get('userInfo') || emptyInfo;

  return userInfo;
}