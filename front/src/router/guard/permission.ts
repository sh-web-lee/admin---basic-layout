import { NavigationGuardNext, RouteLocationNormalized } from "vue-router";
import { createDynamicRouteGuard } from "./dynamic";
import { exeStrategyActions, localStg } from "~/src/utils";
import { useAuthStore } from "~/src/store";
import { routeName } from "..";


/** 处理路由页面的权限 */
export async function createPermissionGuard(
  to: RouteLocationNormalized,
  from: RouteLocationNormalized,
  next: NavigationGuardNext
) {
  // 动态路由
  const permission = await createDynamicRouteGuard(to, from, next);
  if (!permission) return;


  const auth = useAuthStore();
  const permissions = to.meta.permission || [];
  const isLogin = Boolean(localStg.get('token'));
  const needLogin = Boolean(to.meta.requiresAuth) || Boolean(permissions.length);
  const hasPermission = !permissions.length || permissions.includes(auth.userInfo.userRole);

  const actions: Common.StrategyAction[] = [
    // 已登录状态跳转登录页，跳转至首页
    [
      isLogin && to.name === routeName('root'),
      () => {
        console.log(1)
        next()
      }
    ],
    // 不需要登录权限的页面直接通行
    [
      !needLogin,
      () => {
        console.log(2)
        next()
      }
    ],
    // 未登录状态进入需要登录权限的页面
    [
      !isLogin && needLogin,
      () => {
        console.log(to)
        next({ name: routeName('login') })
      }
    ],
    [
      // 登陆状态进入需要登录权限的页面，有权限直接通行
      isLogin && needLogin && hasPermission,
      () => {
        console.log(3)
        next()
      }
    ]
  ]

  exeStrategyActions(actions);
}