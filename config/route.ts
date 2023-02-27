export const routes = [
  { path: '/', redirect: '/nav' },
  { path: '/login', component: 'Login', layout: false },
  { name: '菜单管理', path: '/nav', component: 'NavMenu' },
  { name: '标签管理', path: '/tag', component: 'Tags' },
  { name: '分类管理', path: '/type', component: 'Types' },

  {
    name: '文章管理',
    path: '/article',
    routes: [
      { path: '/article', redirect: '/article/list' },
      { name: '文章列表', path: '/article/list', component: './Articles' },
      { name: '新建文章', path: '/article/add', component: './Articles/Edit' },
      { name: '修改文章', path: '/article/edit/:articleId', component: './Articles/Edit', hideInMenu: true },
    ],
  },
  // 子路由设置layout不生效
  { name: '预览文章', path: '/article/preview/*', component: './Articles/Preview', layout: false },
  { name: '访问出错', path: '/*', component: '404', hideInMenu: true },
];
