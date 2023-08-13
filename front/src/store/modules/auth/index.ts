import { defineStore } from "pinia";
import { fetchLogin, fetchUserInfo } from "@/service";
import { getToken, getUserInfo } from "./helper";
import { localStg } from "~/src/utils";
import { useRouteStore } from "../route";
import { useRouterPush } from "~/src/composables";


interface AuthState {
  /** 登录的加载状态 */
  loginLoading: boolean;
  /** 用户信息 */
  userInfo: Auth.UserInfo;
  /** 用户token */
  token: string;
}

export const useAuthStore = defineStore('auth-store', {
  state: (): AuthState => ({
    userInfo: getUserInfo(),
    loginLoading: false,
    token: getToken()
  }),
  actions: {
    /**
     * 处理登录后成功或失败的逻辑
     * @param backendToken - 返回的token
    */
    async handleActionAfterLogin(backendToken: ApiAuth.Token) {
      const route = useRouteStore();
      const { toLoginRedirect } = useRouterPush(false);

      const loginSuccess = await this.loginByToken(backendToken)

      if (loginSuccess) {
        await route.initAuthRoute();

        // 跳转登录后的地址
        toLoginRedirect();

        window.$notification?.success({
          title: 'Login success!',
          content: `Welcome back ${this.userInfo.userName}!`,
          duration: 3000
        })
      }
    },
    /**
     * 根据token进行登录
     * @param backendToken - 返回的token
    */
    async loginByToken(backendToken: ApiAuth.Token) {
      let successFlag = false;

      // 先把token存储到缓存中(后面接口的请求头需要token)
      const { token } = backendToken;
      localStg.set('token', token);

      // 获取用户信息
      const { data } = await fetchUserInfo();

      if (data) {
        // 用户信息获取成功存储到缓存中
        localStg.set('userInfo', data)

        // 更新状态
        this.userInfo = data;
        this.token = token;
        
        successFlag = true;
      }

      return successFlag;
    },
    /**
     * 登录
     * @param username - 用户名
     * @param password - 密码
    */
    async login(username: string, password: string) {
      this.loginLoading = true;
      const { data } = await fetchLogin(username, password)
      if (data) {
        await this.handleActionAfterLogin(data)
      }
      this.loginLoading = false;
    }
  }
})