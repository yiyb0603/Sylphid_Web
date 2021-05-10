import { customAxios } from 'lib/customAxios';
import { IShortURLDto } from 'lib/dto/shortURL.dto';
import { IShortURLResponse } from 'types/shortURL.types';

class ShortURLRepository {
  public async createShortURL(shortURLDto: IShortURLDto): Promise<IShortURLResponse> {
    const url: string = `/short-url`;
    const { data } = await customAxios.post(url, shortURLDto);
    return data;
  }
}

export default new ShortURLRepository();