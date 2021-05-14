import { useMemo } from 'react';

const useQueryString = (queryKey: string) => {

  const searchParams: URLSearchParams = useMemo(() => {
    return new URLSearchParams(window.location.search);
  }, []);

  const query: string | null = searchParams.get(queryKey);
  return query;
}

export default useQueryString;