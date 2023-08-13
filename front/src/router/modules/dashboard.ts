const dashboard: AuthRoute.Route = {
  name: 'dashboard',
  path: '/dashboard',
  component: 'baisc',
  children: [
    {
      name: 'dashboard_analysis',
      path: '/dashboard/analysis',
      component: 'self',
      meta: {
        title: 'Analysis',
        requiresAuth: true,
        icon: 'icon-park-outline:analysis'
      }
    },
    {
      name: 'dashboard_workbench',
      path: '/dashboard/workbench',
      component: 'self',
      meta: {
        title: 'Work bench',
        requiresAuth: true,
        icon: 'icon-park-outline:workbench'
      }
    }
  ],
  meta: {
    title: 'Dashboard',
    order: 1,
    icon: 'ci:main-component'
  }
}

export default dashboard;