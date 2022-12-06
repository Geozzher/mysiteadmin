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
    component: './Access',
  },
  {
    name: '分类管理',
    path: '/typemanage',
    component: './Table',
  },
  {
    name: '文章管理',
    path: '/articlemanage',
    component: './Table',
  },
];
