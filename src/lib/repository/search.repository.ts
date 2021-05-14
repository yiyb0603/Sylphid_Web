import { customAxios } from 'lib/customAxios';
import { ESearch } from 'lib/enum/search';
import { IShortURLResponse } from 'types/shortURL.types';

class SearchRepository {
  public async searchByKeyword(keyword: string, page: number, type: ESearch): Promise<IShortURLResponse> {
    const url: string = `/search?query=${keyword}&start=${page}&type=${type}`;
    const { data } = await customAxios.get(url);
    return data;
  }
}

export default new SearchRepository();