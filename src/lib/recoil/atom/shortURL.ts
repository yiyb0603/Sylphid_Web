import { atom } from 'recoil';
import { IShortURLDto } from 'lib/dto/shortURL.dto';

export const initialURLState: IShortURLDto = {
  url: '',
};

export const urlRequestState = atom<IShortURLDto>({
  key: 'urlSourceState',
  default: initialURLState,
});

export const shortURLState = atom<string>({
  key: 'shortURLState',
  default: '',
});