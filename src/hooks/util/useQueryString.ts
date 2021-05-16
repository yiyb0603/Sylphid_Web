import { useMemo } from 'react';

const useQueryString = (queryKey: string) => {
  const searchParams: URLSearchParams = useMemo(() => {
    return new URLSearchParams(window.location.search);
  }, []);

  const query: string | null = useMemo(() => searchParams.get(queryKey), [queryKey, searchParams]);
  return query;
}

export default useQueryString;