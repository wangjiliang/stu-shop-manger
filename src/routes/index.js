import Login from '../pages/Login'
import Index from '../pages/admin/dashbord/index'
import List from '../pages/admin/products/List'
import Edit from '../pages/admin/products/Edit'
import PageNotFind from '../pages/PageNotFind';


export const mainRoutes = [
  {
    path: '/login',
    component: Login
  },
  {
    path: '/404',
    component: PageNotFind
  }
];

export const adminRoutes = [
  {
    path: '/admin/dashbord',
    component: Index,
    isShow: true,
    title: '看板',
    icon: 'area-chart'
  },
  {
    path: '/admin/products',
    component: List,
    exact: true,
    isShow: true,
    title: '商品列表',
    icon: 'shop'
  },
  {
    path: '/admin/products/edit/:id?',
    component: Edit,
    isShow: false,
    title: '编辑'
  }
];

