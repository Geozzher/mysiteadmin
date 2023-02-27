// 运行时配置

import { history } from '@umijs/max';
import { RequestConfig } from '@umijs/max';
import { USER_LOGIN } from './constants';
import { getLocalStorage, setLocalStorage } from './utils/storage';

// 全局初始化数据配置，用于 Layout 用户信息和权限初始化
// 更多信息见文档：https://next.umijs.org/docs/api/runtime-config#getinitialstate
export async function getInitialState(): Promise<{ name: string }> {
  return { name: '@umijs/max' };
}

export const layout = () => {
  return {
    // logo: 'https://img.alicdn.com/tfs/TB1YHEpwUT1gK0jSZFhXXaAtVXa-28-27.svg',
    menu: {
      locale: false,
    },
  };
};

export const request: RequestConfig = {
  // 请求拦截器
  requestInterceptors: [
    (config) => {
      const token = getLocalStorage('token');
      if (token) {
        config.headers = { ...config.headers, token: token };
      }
      return { ...config };
    },
  ],

  // 响应拦截器
  responseInterceptors: [
    (response) => {
      const { stat } = response.data as IResponse;
      if (stat && stat === 'deny') {
        history.replace(USER_LOGIN);
      }
      const { token } = response.headers;
      if (token) {
        setLocalStorage('token', token);
      }
      return response;
    },
  ],
};
