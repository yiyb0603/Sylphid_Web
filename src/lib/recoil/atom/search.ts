import { atom } from 'recoil';

export const searchResultState = atom<any[]>({
  key: 'searchResultState',
  default: [],
});