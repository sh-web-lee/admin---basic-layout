import { views } from '@/views'
import { RouteComponent } from 'vue-router'
import { isFunction } from '../common';

type Lazy<T> = () => Promise<T>;

interface ModuleComponent {
  default: RouteComponent;
}


/**
 * 获取页面导入的vue文件
 * @param routeKey - 路由key
*/
export function getViewComponent(routeKey: AuthRoute.LastDegreeRouteKey) {
  if (!views[routeKey]) {
    throw new Error(`路由“${routeKey}”没有对应的组件文件！`)
  }

  return setViewComponentName(views[routeKey], routeKey)
}

/** 给页面组件设置名称 */
function setViewComponentName(component: RouteComponent | Lazy<ModuleComponent>, name: string) {
  if (isAsyncComponent(component)) {
    return async () => {
      const result = await component();
      Object.assign(result.default, { name });
      return result;
    };
  }

  Object.assign(component, { name });

  return component;
}

function isAsyncComponent(component: RouteComponent | Lazy<ModuleComponent>): component is Lazy<ModuleComponent> {
  return isFunction(component)
}