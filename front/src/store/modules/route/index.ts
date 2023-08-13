import { defineStore } from "pinia";
import { router, constantRoutes, routes as staticRoutes } from '@/router'
import { filterAuthRoutesByUserPermission, getConstantRouteNames, transformAuthRouteToMenu, transformAuthRouteToVueRoutes } from "@/utils";
import { useAuthStore } from "../auth";


interface RouteState {
  /**
   * 权限路由模式:
   * - static - 前端声明的静态
   * - dynamic - 后端返回的动态
   */
  authRouteMode: ImportMetaEnv['VITE_AUTH_ROUTE_MODE'];
  /** 是否初始化了权限路由 */
  isInitAuthRoute: boolean;
  /** 菜单配置项 */
  menus: App.GlobalMenuOption[]
}

export const useRouteStore = defineStore('route-store', {
  state: (): RouteState => ({
    authRouteMode: import.meta.env.VITE_AUTH_ROUTE_MODE,
    isInitAuthRoute: false,
    menus: []
  }),
  actions: {
    /**
     * 是否是有效的固定路由
     * @param name 路由名称
     */
    isValidConstantRoute(name: AuthRoute.AllRouteKey) {
      const NOT_FOUND_PAGE_NAME: AuthRoute.NotFoundRouteKey = 'not-found';
      const constantRouteNames = getConstantRouteNames(constantRoutes)
      return constantRouteNames.includes(name) && name !== NOT_FOUND_PAGE_NAME;
    },
    /**
     * 处理权限路由
     * @param routes - 权限路由
     */
    handleAuthRoute(routes: AuthRoute.Route[]) {
      (this.menus as App.GlobalMenuOption[]) = transformAuthRouteToMenu(routes)
      const vueRoutes = transformAuthRouteToVueRoutes(routes);

      vueRoutes.forEach(route => {
        router.addRoute(route);
      });
    },
    /** 初始化动态路由 */
    async initDynamicRoute() {},
    /** 初始化静态路由 */
    async initStaticRoute() {
      const auth = useAuthStore();
      const routes = filterAuthRoutesByUserPermission(staticRoutes, auth.userInfo.userRole);
      this.handleAuthRoute(routes);

      this.isInitAuthRoute = true;

    },
    /** 初始化权限路由 */
    async initAuthRoute() {
      if (this.authRouteMode === 'dynamic') {
        await this.initDynamicRoute()
      } else {
        await this.initStaticRoute()
      }
    }
  }
})