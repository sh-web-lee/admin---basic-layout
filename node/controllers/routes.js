const db = require('../connect')

const getRoutes = (req, res) => {
  const sql = 'SELECT * FROM routes'
  db.query(sql, (err, data) => {
    if (err) return res.status(500).json(err)
    let routes = []
    if (data.length) {
      const result = transformDataToRoutes(data)
      routes = transfromChildren(result)
    }
    res.status(200).json({
      code: 200,
      data: routes,
      msg: 'success'
    })
  })
}

// 数据库数据转换为前端需要的路由
function transformDataToRoutes(routes) {
  const result = []
  routes.forEach(route => {
    const routeItem = {}
    const { name, component, id, parentId } = route
    const path = transformNameToPath(name)

    Object.assign(routeItem, { name, component, path, id, parentId, children: [] })
    result.push(routeItem)
  })
  return result;
}

// 将路由名称转换为路由路径
function transformNameToPath(name) {
  const splitMark = '_';
  const pathSplitMark = '/';
  
  const path = name.split(splitMark).join(pathSplitMark);

  return pathSplitMark + path;
}

// 转换children路由
function transfromChildren(routes) {
  for (let i = 0; i < routes.length; i++) {
    for (let j = 1; j < routes.length; j++) {
      if (routes[i].parentId) delete routes[i].children
      if (routes[i].id === routes[j].parentId) {
        routes[i].children.push(routes[j])
      }
    }
  }
  const result = routes.filter(route => !route.parentId)
  return result;
}

function transformRoutes(routes) {
  const result = {}
  routes.forEach(route => {
    const { name, component, path } = route
    const children = []
    if (route.children) {
      children.push(transformRoutes(route.children))
    }

    Object.assign(result, { name, component, path, children })
  })
  return result;
}


module.exports = { getRoutes }