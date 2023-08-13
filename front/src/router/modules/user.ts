const User: AuthRoute.Route = {
  name: 'userinfo',
  path: '/userinfo',
  component: 'blank',
  meta: {
    title: 'User',
    requiresAuth: true,
    singleLayout: 'blank',
    hide: true
  }
}

export default User;