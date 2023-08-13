import { RouteComponent } from 'vue-router'


export const views: Record<
  PageRoute.LastDegreeRouteKey,
  RouteComponent
> = {
  403: () => import('./_builtin/403/index.vue'),
  404: () => import('./_builtin/404/index.vue'),
  login: () => import('./_builtin/login/index.vue'),
  dashboard_analysis: () => import('./dashboard/analysis/index.vue'),
  dashboard_workbench: () => import('./dashboard/workbench/index.vue'),
  "not-found": () => import('./_builtin/not-found/index.vue'),
  userinfo: () => import('./_builtin/user/index.vue'),
}