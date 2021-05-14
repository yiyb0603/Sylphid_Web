import { IResponse } from './Response';

interface ISearch {
  title: string;
  link: string;
  description: string;
}

export interface INews extends ISearch {
  originallink: string;
  pubDate: string;
}

export interface INewsResponse extends IResponse {
  data: {
    results: INews[];
  }
}

export interface IBlog extends ISearch {
  bloggername: string;
  bloggerlink: string;
  postdate: string;
}

export interface IBlogResponse extends IResponse {
  data: {
    results: IBlog[];
  }
}