import blogImage from 'assets/images/blog.svg';
import newsImage from 'assets/images/news.svg';

export const selectTypes = [
  {
    image: blogImage,
    title: '뉴스 검색',
    route: '/search/news',
  },

  {
    image: newsImage,
    title: '블로그 검색',
    route: '/search/blog',
  },
];