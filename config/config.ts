import { defineConfig } from '@umijs/max';
import { routes } from './route';

export default defineConfig({
  antd: {},
  access: {},
  model: {},
  initialState: {},
  request: {},
  layout: {
    title: '后台管理系统',
  },
  fastRefresh: true,
  routes: [...routes],
  npmClient: 'yarn',
  proxy: {
    '/api': {
      target: 'http://wfhcc.cn:3004',
      changeOrigin: true,
      pathRewrite: {
        '^/api': '',
      },
    },
  },
});
