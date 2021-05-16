import { ITranslateDto } from 'lib/dto/translate.dto';
import { atom } from 'recoil';

export const initialRequestTranslate: ITranslateDto = {
  text: '',
  source: 'ko',
  target: 'en',
};

export const requestTranslateState = atom<ITranslateDto>({
  key: 'requestTranslateState',
  default: initialRequestTranslate,
});

export const translatedTextState = atom<string>({
  key: 'translatedTextState',
  default: '',
});