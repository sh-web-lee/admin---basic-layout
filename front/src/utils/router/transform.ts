import { RouteRecordRaw } from 'vue-router'
import { getViewComponent } from './component';

/**
 * 将权限路由转换成vue路由
 * @param routes - 权限路由
 * @description 所有多级路由都会被转换成二级路由
*/
export function transformAuthRouteToVueRoutes(routes: AuthRoute.Route[]) {
  return routes.map(route => transformAuthRouteToVueRoute(route)).flat(1)
}

type ComponentAction = Record<AuthRoute.RouteComponentType, () => void>;

/**
 * 将单个权限路由转换成vue路由
 * @param item - 单个权限路由
*/
export function transformAuthRouteToVueRoute(item: AuthRoute.Route) {
  const resultRoute: RouteRecordRaw[] = [];

  const itemRoute = { ...item } as RouteRecordRaw;

  if (hasComponent(item)) {
    const action: ComponentAction = {
      self() {
        itemRoute.component = getViewComponent(item.name as AuthRoute.LastDegreeRouteKey)
      }
    }

    try {
      if (item.component) {
        action[item.component]()
      } else {
        window.console.error('路由组件解析失败: ', item);
      }
    } catch {
      window.console.error('路由组件解析失败: ', item);
    }
  }

  resultRoute.push(itemRoute);

  return resultRoute;
}








/**
 * 是否有路由组件
 * @param item - 权限路由
*/
function hasComponent(item: AuthRoute.Route) {
  return Boolean(item.component)
}