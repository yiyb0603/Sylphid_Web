import { ITranslateDto } from 'lib/dto/translate.dto';
import isEmpty from 'util/isEmpty';

export const validateTranslate = (request: ITranslateDto): boolean => {
  const { text } = request;

  if (isEmpty(text)) {
    return false;
  }
  
  return true;
}