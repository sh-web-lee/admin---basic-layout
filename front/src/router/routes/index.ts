

/** 根路由 */
export const ROOT_ROUTE: AuthRoute.Route = {
  name: 'root',
  path: '/',
  redirect: import.meta.env.VITE_ROUTE_HOME_PATH,
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
    props: route => {
      const moduleType = (route.params.module as EnumType.LoginModuleKey) || 'pwd-login'
      return {
        module: moduleType
      }
    },
    meta: {
      title: 'login',
    }
  },
  {
    name: '403',
    path: '/403',
    component: 'self',
    meta: {
      title: 'No permission',
    }
  },
  {
    path: '/404',
    name: '404',
    component: 'self',
    meta: {
      title: 'Not found'
    }
  },
  // 匹配无效路径的路由
  {
    name: 'not-found',
    path: '/:pathMatch(.*)*',
    component: 'blank',
    meta: {
      title: 'Not found',
      singleLayout: 'blank'
    }
  }
]