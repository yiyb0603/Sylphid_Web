import { useLocation } from 'react-router-dom';

const usePathName = (): string => {
  const { pathname } = useLocation();
  return pathname as string;
}

export default usePathName;