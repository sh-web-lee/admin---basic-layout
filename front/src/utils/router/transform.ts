import { RouteRecordRaw } from 'vue-router'
import { getLayoutComponent, getViewComponent } from './component';

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

  // 路由组件
  if (hasComponent(item)) {
    const action: ComponentAction = {
      baisc() {
        itemRoute.component = getLayoutComponent('basic')
      },
      self() {
        itemRoute.component = getViewComponent(item.name as AuthRoute.LastDegreeRouteKey)
      },
      blank() {
        itemRoute.component = getLayoutComponent('blank')
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

  // 子路由
  if (hasChildren(item)) {
    const children = (item.children as AuthRoute.Route[]).map(child => transformAuthRouteToVueRoute(child)).flat();

    // 找出第一个不为多级路由中间级的子路由路径作为重定向路径
    const redirectPath = (children.find(v => !v.meta?.multi)?.path || '/') as AuthRoute.RoutePath;

    if (redirectPath === '/') {
      window.console.error('该多级路由没有有效的子路径', item);
    }

    if (false) {
      // TODO item.component = multi
    } else {
      itemRoute.children = children;
    }
    itemRoute.redirect = redirectPath;
  }

  // 注意：单独路由没有children
  // if (isSingleRoute(item)) {
  //   if (hasChildren(item)) {
  //     window.console.error('单独路由不应该有子路由: ', item);
  //   }

  //   // 捕获无效路由的需特殊处理
  //   if (item.name === 'not-found') {
  //     itemRoute.children = [
  //       {
  //         path: '',
  //         name: item.name,
  //         component: getViewComponent('not-found')
  //       }
  //     ];
  //   } else {
  //     const parentPath = `${itemRoute.path}-parent` as AuthRouteUtils.SingleRouteKey;

  //     const layout = item.meta.singleLayout === 'basic' ? getLayoutComponent('basic') : getLayoutComponent('blank');

  //     const parentRoute: RouteRecordRaw = {
  //       path: parentPath,
  //       component: layout,
  //       redirect: item.path,
  //       children: [itemRoute]
  //     };
  //     console.log(parentRoute)

  //     return [parentRoute];
  //   }
  // }
  resultRoute.push(itemRoute);

  return resultRoute;
}



/** 将路由名字转换成路由路径 */
export function transformRouteNameToRoutePath(name: Exclude<AuthRoute.AllRouteKey, 'not-found'>) {
  const rootPath: AuthRoute.RoutePath = '/';
  if (name === 'root') return rootPath;

  const splitMark = '_';
  const pathSplitMark = '/';
  const path = name.split(splitMark).join(pathSplitMark);

  return (pathSplitMark + path) as AuthRoute.RoutePath;
}




/**
 * 是否有子路由
 * @param item - 权限路由
 */
function hasChildren(item: AuthRoute.Route) {
  return Boolean(item.children && item.children.length)
}


/**
 * 是否有路由组件
 * @param item - 权限路由
*/
function hasComponent(item: AuthRoute.Route) {
  return Boolean(item.component)
}

/**
 * 是否是单层级路由
 * @param item - 权限路由
 */
function isSingleRoute(item: AuthRoute.Route) {
  return Boolean(item.meta.singleLayout);
}
