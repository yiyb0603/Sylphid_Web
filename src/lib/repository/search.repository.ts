import { customAxios } from 'lib/customAxios';
import { ESearch } from 'lib/enum/search';
import { IBlogResponse, INewsResponse } from 'types/search.types';

class SearchRepository {
  public async searchByKeyword(keyword: string, page: number, type: ESearch): Promise<
    INewsResponse | IBlogResponse
  > {
    const url: string = `/search?query=${keyword}&start=${page}&type=${type}`;
    const { data } = await customAxios.get(url);
    return data;
  }
}

export default new SearchRepository();