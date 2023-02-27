import { API_USER_LOGIN, API_USER_ROUTE_VERIFY } from '@/constants';
import { post } from '@/utils/request';

interface IUserLoginParams {
  username: string;
  password: string;
}
export const userLogin = (params: IUserLoginParams) => {
  return post(API_USER_LOGIN, params);
};

interface IRouteVerifyParams {
  routeCode: string;
}
export const routeVerify = (params: IRouteVerifyParams) => {
  return post(API_USER_ROUTE_VERIFY, params);
};
