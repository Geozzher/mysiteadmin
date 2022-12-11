export const routes = [
  {
    path: '/',
    redirect: '/navmanage',
  },
  {
    name: '菜单管理',
    path: '/navmanage',
    component: './Home',
  },
  {
    name: '标签管理',
    path: '/tagmanage',
    component: './Tags',
  },
  {
    name: '分类管理',
    path: '/typemanage',
    component: './Types',
  },
  {
    name: '文章管理',
    path: '/articlemanage',
    component: './Types',
  },
];
