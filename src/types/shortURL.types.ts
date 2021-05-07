import { IResponse } from './Response';

export interface IShortURLResponse extends IResponse {
  data: {
    shortURL: string;
  },
}