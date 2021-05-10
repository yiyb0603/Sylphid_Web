import { customAxios } from 'lib/customAxios';
import { ITranslateDto } from 'lib/dto/translate.dto';
import { ITranslateResponse } from 'types/translate.types';

class TranslateRepository {
  public async getTranslateString(request: ITranslateDto): Promise<ITranslateResponse> {
    const url: string = `/translate`;
    const { data } = await customAxios.post(url, request);
    return data;
  }
}

export default new TranslateRepository();