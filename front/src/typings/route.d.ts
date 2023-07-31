declare namespace AuthRoute {
  /** 跟路由路径 */
  type RootRoutePath = '/';
  
  type RootRouteKey = PageRoute.RootRouteKey;
  
  type RouteKey = PageRoute.RouteKey;

  type LastDegreeRouteKey = PageRoute.LastDegreeRouteKey;

  type AllRouteKey = RouteKey | RootRouteKey;

  /** 路由路径 */
  type RoutePath<K extends AllRouteKey = AllRouteKey> = AuthRouteUtils.GetRoutePath<K>

  /**
   * 路由的组件
   * - basic - 基础布局，具有公共部分的布局
   * - blank - 空白布局
   * - multi - 多级路由布局(三级路由或三级以上时，除第一级路由和最后一级路由，其余的采用该布局)
   * - self - 作为子路由，使用自身的布局(作为最后一级路由，没有子路由)
  */
  type RouteComponentType = 'self';


  /** 路由描述 */
  interface RouteMeta {
    /** 路由标题(可用来作document.title或者菜单的名称) */
    title: string;
    /** 需要登录权限 */
    requiresAuth?: boolean;
    /** 菜单和面包屑对应的图标 */
    icon?: string;
  }

  type Route<K extends AllRouteKey = AllRouteKey> = K extends AllRouteKey
   ? {
    /** 路由名称 */
    name: K;
    /** 路由路径 */
    path: AuthRouteUtils.GetRoutePath<K>;
    /** 路由重定向 */
    redirect?: AuthRouteUtils.GetRoutePath;
    /**
     * 路由组件
     * - basic: 基础布局，具有公共部分的布局
     * - blank: 空白布局
     * - multi: 多级路由布局(三级路由或三级以上时，除第一级路由和最后一级路由，其余的采用该布局)
     * - self: 作为子路由，使用自身的布局(作为最后一级路由，没有子路由)
    */
    component?: RouteComponentType;
    /** 路由描述 */
    meta: RouteMeta;
   } & Omit<import('vue-router').RouteRecordRaw, 'name' | 'path' | 'redirect' | 'component' | 'meta'>
  : never;
}


declare namespace AuthRouteUtils {
  /** 路由key层级分割符 */
  type RouteKeySplitMark = '_';

  /** 路由path层级分割符 */
  type RoutePathSplitMark = '/';

  /** 空白字符串 */
  type BlankString = '';

  /** key转换成path */
  type KeyToPath<K extends string> = `${RoutePathSplitMark}${K}`



  /** 根据路由key获取路由路径 */
  type GetRoutePath<K extends AuthRoute.AllRouteKey = AuthRoute.AllRouteKey> = K extends AuthRoute.AllRouteKey
    ? K extends AuthRoute.RootRouteKey
      ? AuthRoute.RootRoutePath
      : KeyToPath<K> : never;
}