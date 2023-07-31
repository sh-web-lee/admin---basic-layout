

/** 根路由 */
export const ROOT_ROUTE: AuthRoute.Route = {
  name: 'root',
  path: '/',
  redirect: '/login',
  meta: {
    title: 'Root'
  }
}


/** 固定的路由 */
export const constantRoutes: AuthRoute.Route[] = [
  ROOT_ROUTE,
  {
    name: 'login',
    path: '/login',
    component: 'self',
    meta: {
      title: 'login',
    }
  },
  {
    name: '403',
    path: '/403',
    component: 'self',
    meta: {
      title: '403',
    }
  }
]