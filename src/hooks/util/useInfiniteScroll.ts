import { useCallback, useState } from 'react';

const useInfiniteScroll = () => {
  const [page, setPage] = useState<number>(1);

  const isBottomPosition = useCallback((): boolean => {
    const { innerHeight } = window;
    const { scrollHeight } = document.body;
    const { scrollTop } = document.documentElement;

    if (Math.round(scrollTop + innerHeight) >= scrollHeight) {
      return true;
    }

    return false;
  }, []);

  return {
    page,
    setPage,
    isBottomPosition,
  };
}

export default useInfiniteScroll;