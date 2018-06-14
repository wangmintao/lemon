import Vue from 'vue'
import Router from 'vue-router'

// in development-env not use lazy-loading, because lazy-loading too many pages will cause webpack hot update too slow. so only in production use lazy-loading;
// detail: https://panjiachen.github.io/vue-element-admin-site/#/lazy-loading

Vue.use(Router)

/* Layout */
import Layout from '../views/layout/Layout'

/**
* hidden: true                   if `hidden:true` will not show in the sidebar(default is false)
* alwaysShow: true               if set true, will always show the root menu, whatever its child routes length
*                                if not set alwaysShow, only more than one route under the children
*                                it will becomes nested mode, otherwise not show the root menu
* redirect: noredirect           if `redirect:noredirect` will no redirct in the breadcrumb
* name:'router-name'             the name is used by <keep-alive> (must set!!!)
* meta : {
    title: 'title'               the name show in submenu and breadcrumb (recommend set)
    icon: 'svg-name'             the icon show in the sidebar,
  }
**/
export const constantRouterMap = [
  {
    path: '/login',
    component: () => import('@/views/login/index'),
    hidden: true
  },
  { path: '/404', component: () => import('@/views/404'), hidden: true },

  {
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    hidden: true,
    children: [
      {
        path: 'dashboard',
        component: () => import('@/views/dashboard/index')
      }
    ]
  },
  {
    path: '/map',
    component: Layout,
    children: [
      {
        path: 'index',
        component: () => import('@/views/map/index'),
        meta: { title: '地图', icon: 'map' }
      }
    ]
  },
  {
    path: '/org',
    component: Layout,
    children: [
      {
        path: 'index',
        name: 'org',
        component: () => import('@/views/tree/index'),
        meta: { title: '组织结构', icon: 'tree' },
        children: [
          {
            path: '/org/dept/:id',
            meta: { title: '部门' },
            component: () => import('@/views/tree/dept'),
            hidden: true
          },
          {
            path: '/org/user/:id',
            meta: { title: '用户' },
            component: () => import('@/views/tree/user'),
            hidden: true
          }
        ]
      }
    ]
  },
  {
    path: '/permission',
    component: Layout,
    children: [
      {
        path: 'index',
        name: 'Form',
        component: () => import('@/views/form/index'),
        meta: { title: '权限管理', icon: 'permission' }
      }
    ]
  },

  { path: '*', redirect: '/404', hidden: true }
]

export default new Router({
  // mode: 'history', //后端支持可开
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRouterMap
})
