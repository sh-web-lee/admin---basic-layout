import { useIconRender } from "~/src/composables";

/**
 * 将权限路由转换成菜单
 * @param routes - 路由
 */
export function transformAuthRouteToMenu(routes: AuthRoute.Route[]): App.GlobalMenuOption[] {
  const globalMenu: App.GlobalMenuOption[] = [];
  routes.forEach(route => {
    const { name, path, meta } = route;
    const routeName = name as string;
    let menuChildren: App.GlobalMenuOption[] | undefined;
    if (route.children && route.children.length > 0) {
      menuChildren = transformAuthRouteToMenu(route.children)
    }
    const menuItem = addPartialProps({
      menu: {
        key: routeName,
        label: meta.title,
        routePath: path
      },
      icon: meta.icon,
      // localIcon: meta.
      children: menuChildren
    })

    if (!hideInMenu(route)) {
      globalMenu.push(menuItem)
    }
  })

  return globalMenu;
}

/** 路由不转换菜单 */
function hideInMenu(route: AuthRoute.Route) {
  return Boolean(route.meta.hide);
}


/** 给菜单添加可选属性 */
function addPartialProps(config: {
  menu: App.GlobalMenuOption;
  icon?: string;
  localIcon?: string;
  children?: App.GlobalMenuOption[];
}) {
  const { iconRender } = useIconRender()

  const item = { ...config.menu };

  const { icon, localIcon, children } = config;

  if (localIcon) {
    Object.assign(item, { icon: iconRender({ localIcon }) })
  }
  if (icon) {
    Object.assign(item, { icon: iconRender({ icon }) });
  }

  if (children) {
    Object.assign(item, { children });
  }
  return item;
}