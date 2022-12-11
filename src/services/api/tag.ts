import { API_TAG_QUERY, API_TAG_ADD, API_TAG_MODIFY } from '@/constants';
import { post } from '@/utils/request';

interface ITagQueryParams {
  current: number;
  pageSize: number;
}
export const getTag = (params: ITagQueryParams) => {
  return post(API_TAG_QUERY, params);
};

interface IAddTagParams {
  name: string;
  label: string;
  color: string;
  is_show: boolean;
}
export const addTag = (params: IAddTagParams) => {
  return post(API_TAG_ADD, params);
};

interface ITagParams {
  id: string;
  name: string;
  label: string;
  color: string;
  is_show: boolean;
}
export const setTag = (params: ITagParams) => {
  return post(API_TAG_MODIFY, params);
};
