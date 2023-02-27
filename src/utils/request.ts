import { request } from '@umijs/max';

export const get = (url: string, params?: Record<string, any>, options?: Record<string, any>) => {
  return request(url, {
    method: 'GET',
    params: { ...params },
    ...(options || {}),
  });
};

export const post = (url: string, body?: Record<string, any>, options?: Record<string, any>) => {
  return request(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    data: { ...body },
    ...(options || {}),
  });
};

interface IResponse {
  code: number;
  stat: string;
  msg: string;
  data: any;
}
export const isRequestSuccess = (response: IResponse): boolean => {
  if (response && response.stat === 'ok') {
    return true;
  }
  return false;
};
