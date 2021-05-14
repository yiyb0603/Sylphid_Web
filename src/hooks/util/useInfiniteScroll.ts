import { useCallback, useState } from 'react';

const useInfiniteScroll = () => {
  const [page, setPage] = useState<number>(1);

  const { innerHeight } = window;
  const { scrollHeight } = document.body;
  const { scrollTop } = document.documentElement;

  const isBottomPosition = useCallback((): boolean => {
    if (Math.round(scrollTop + innerHeight) >= scrollHeight) {
      return true;
    }

    return false;
  }, [innerHeight, scrollHeight, scrollTop]);

  return {
    page,
    setPage,
    isBottomPosition,
  };
}

export default useInfiniteScroll;