import { useCallback, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import useInfiniteScroll from 'hooks/util/useInfiniteScroll';
import useInput from 'hooks/util/useInput';

const useSearch = () => {
  const { type }: { type: string } = useParams();

  const [keyword, onChangeKeyword] = useInput('');
  const { page, setPage, isBottomPosition } = useInfiniteScroll();

  const handleScroll = useCallback((): void => {
    if (isBottomPosition()) {
      setPage((prevPage: number) => prevPage++);
    }
  }, [isBottomPosition, setPage]);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, true);

    return () => window.removeEventListener('scroll', handleScroll, true);
  }, [handleScroll]);

  return {
    keyword,
    onChangeKeyword,
  };
};

export default useSearch;