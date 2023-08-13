import { Router } from "vue-router";
import { createPermissionGuard } from "./permission";

/**
 * 路由守卫
 * @param router - 路由实例
 */
export function createRouterGuard(router: Router) {
  router.beforeEach(async (to, from, next) => {
    // 开始loadingBar
    window.$loadingBar?.start();
    // 页面跳转权限处理
    await createPermissionGuard(to, from, next);
  })
  router.afterEach(to => {
    document.title = to.meta.title;
    window.$loadingBar?.finish();
  })
}