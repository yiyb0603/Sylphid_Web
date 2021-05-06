export type INavLink = {
  name: string;
  route: string;
}

export const navLinks: INavLink[] = [
  {
    name: '홈',
    route: '/',
  },

  {
    name: '번역',
    route: '/translate',
  },

  {
    name: '단축 URL',
    route: '/short-url',
  },

  {
    name: '검색',
    route: '/search',
  },
];