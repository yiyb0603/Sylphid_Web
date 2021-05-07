import { IShortURLDto } from 'lib/dto/shortURL.dto';
import isEmpty from 'util/isEmpty';

export const validateShortURL = ({ url }: IShortURLDto): boolean => {
  if (isEmpty(url)) {
    return false;
  }

  return true;
}