import { RouteComponent } from 'vue-router'


export const views: Record<
  PageRoute.LastDegreeRouteKey,
  RouteComponent | (() => Promise<{ default: RouteComponent }>)
> = {
  403: () => import('./_builtin/403/index.vue'),
  login: () => import('./_builtin/login/index.vue')
}