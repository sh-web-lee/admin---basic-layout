declare namespace PageRoute {
  /**
   * the root route key
   * @translate 根路由
  */
  type RootRouteKey = 'root';
  
  /**
   * the not found route, which catch the invalid route path
   * @translate 未找到路由(捕获无效路径的路由)
  */
  // type NotFoundRouteKey = 'not-found'


  /**
   * the route key
   * @translate 页面路由
  */
  type RouteKey = 
    | '403'
    | 'login'


  type LastDegreeRouteKey = Extract<RouteKey,
    | '403'
    | 'login'
  >
}