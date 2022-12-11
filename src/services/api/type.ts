import { API_TYPE_QUERY, API_TYPE_ADD, API_TYPE_MODIFY } from '@/constants';
import { get, post } from '@/utils/request';

export const getType = () => {
  return get(API_TYPE_QUERY);
};

interface IAddTypeParams {
  name: string;
  label: string;
  color: string;
  is_show: boolean;
}
export const addType = (params: IAddTypeParams) => {
  return post(API_TYPE_ADD, params);
};

interface ISetTypeParams {
  id: string;
  name: string;
  label: string;
  color: string;
  is_show: boolean;
}
export const setType = (params: ISetTypeParams) => {
  return post(API_TYPE_MODIFY, params);
};
