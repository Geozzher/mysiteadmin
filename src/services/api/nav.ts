import { API_NAV_ADD, API_NAV_LIST, API_NAV_MODIFY } from '@/constants';
import { get, post } from '@/utils/request';
interface ITagQueryParams {
  current: number;
  pageSize: number;
}
export const getNavList = (params: ITagQueryParams) => {
  return get(API_NAV_LIST, params);
};

interface IAddNavMenuParams {
  name: string;
  label: string;
  path: string;
  is_show: boolean;
}
export const addNavMenu = (params: IAddNavMenuParams) => {
  return post(API_NAV_ADD, params);
};

interface ISetNavMenuParams {
  id: string;
  name: string;
  label: string;
  path: string;
  is_show: boolean;
}
export const setNavMenu = (params: ISetNavMenuParams) => {
  return post(API_NAV_MODIFY, params);
};
