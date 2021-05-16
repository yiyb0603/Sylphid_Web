import { KeyboardEvent, useCallback, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import useInfiniteScroll from 'hooks/util/useInfiniteScroll';
import useInput from 'hooks/util/useInput';
import { ESearch } from 'lib/enum/search';
import useQueryString from 'hooks/util/useQueryString';
import { useRecoilState } from 'recoil';
import { searchResultState } from 'lib/recoil/atom/search';
import searchRepository from 'lib/repository/search.repository';
import { EResponse } from 'lib/enum/Response';
import { historySingleton } from 'lib/singleton/history';
import isNullOrUndefined from 'util/isNullOrUndefined';

const useSearch = () => {
  const { type }: { type: ESearch } = useParams();
  const queryKeyword: string | null = useQueryString('keyword');

  const [keyword, onChangeKeyword] = useInput(queryKeyword ?? '');
  const { page, setPage, isBottomPosition } = useInfiniteScroll();

  const [searchResults, setSearchResults] = useRecoilState<any[]>(searchResultState);

  const handleSearch = useCallback(async (): Promise<void> => {
    try {
      const { status, data: { results } } = await searchRepository.searchByKeyword(keyword, page, type);

      if (status === EResponse.OK) {
        setSearchResults((prevSearchResults) => (
          [...prevSearchResults, ...results]
        ));
      }
    } catch (error) {
      console.log(error);
    }
  }, [keyword, page, setSearchResults, type]);

  const handleScroll = useCallback((): void => {
    console.log(isBottomPosition());
    if (isBottomPosition()) {
      setPage((prevPage: number) => prevPage + 1);
      handleSearch();
    }
  }, [handleSearch, isBottomPosition, setPage]);

  const onKeydownSearch = useCallback(({ key }: KeyboardEvent<HTMLInputElement>): void => {
    if (key === 'Enter') {
      historySingleton.push(`?keyword=${keyword}`);
      handleSearch();
    }
  }, [handleSearch, keyword]);

  useEffect(() => {
    if (!isNullOrUndefined(queryKeyword)) {
      handleSearch();
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (queryKeyword && queryKeyword.length > 0) {
      window.addEventListener('scroll', handleScroll, true);

      return () => window.removeEventListener('scroll', handleScroll, true);
    }
  }, [handleScroll, queryKeyword]);

  return {
    keyword,
    onChangeKeyword,
    onKeydownSearch,
    searchResults,
    handleSearch,
  };
};

export default useSearch;