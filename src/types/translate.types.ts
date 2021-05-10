import { IResponse } from './Response';

export interface ITranslateResponse extends IResponse {
  data: {
    translatedText: string;
  }
}