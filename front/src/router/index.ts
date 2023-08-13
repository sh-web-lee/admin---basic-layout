import { createRouter, createWebHashHistory, createWebHistory } from "vue-router";
import { constantRoutes } from './routes'
import { App } from "vue";
import { transformAuthRouteToVueRoutes, transformRouteNameToRoutePath } from "@/utils";
import { createRouterGuard } from "./guard";

const { VITE_HASH_ROUTE, VITE_BASE_URL } = import.meta.env

export const router = createRouter({
  history: VITE_HASH_ROUTE === 'Y' ? createWebHashHistory(VITE_BASE_URL) : createWebHistory(VITE_BASE_URL),
  routes: transformAuthRouteToVueRoutes(constantRoutes)
})

export async function setupRouter(app: App) {
  app.use(router);
  createRouterGuard(router);
  // await router.isReady();
}

/** 路由名称 */
export const routeName = (key: AuthRoute.AllRouteKey) => key
/** 路由路径 */
export const routePath = (key: Exclude<AuthRoute.AllRouteKey, 'not-found'>) => transformRouteNameToRoutePath(key)

export * from './modules'
export * from './routes'