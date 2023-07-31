import { createRouter, createWebHashHistory, createWebHistory } from "vue-router";
import { constantRoutes } from './routes'
import { App } from "vue";
import { transformAuthRouteToVueRoutes } from "../utils/router/transform";

const { VITE_HASH_ROUTE, VITE_BASE_URL } = import.meta.env

export const router = createRouter({
  history: VITE_HASH_ROUTE === 'Y' ? createWebHashHistory(VITE_BASE_URL) : createWebHistory(VITE_BASE_URL),
  routes: transformAuthRouteToVueRoutes(constantRoutes)
})

export function setupRouter(app: App) {
  app.use(router)
}