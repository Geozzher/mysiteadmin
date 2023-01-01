import { API_ARTICLE_LIST_QUERY, API_ARTICLE_QUERY_ONE, API_ARTICLE_ADD, API_ARTICLE_MODIFY } from '@/constants';
import { get, post } from '@/utils/request';

interface IArticleListQueryParams {
  current: number;
  pageSize: number;
}
export const getArticleList = (params: IArticleListQueryParams) => {
  return get(API_ARTICLE_LIST_QUERY, params);
};

interface IQueryOneParams {
  id: string;
}
export const queryArticle = (params: IQueryOneParams) => {
  return get(API_ARTICLE_QUERY_ONE, params);
};

interface IAddArticleParams {
  title: string;
  introduce: string;
  types: string;
  tags: string;
  cover: string;
  content: string;
  content_html: string;
  is_show: boolean;
}

export const addArticle = (params: IAddArticleParams) => {
  return post(API_ARTICLE_ADD, params);
};

export interface IModifyArticleParams {
  id: string;
  title: string;
  introduce: string;
  types: string;
  tags: string;
  cover: string;
  content: string;
  content_html: string;
  is_show: boolean;
}

export const modifyArticle = (params: IAddArticleParams) => {
  return post(API_ARTICLE_MODIFY, params);
};
