import { useCallback, useState } from 'react';

const useModal = () => {
  const [isModal, setIsModal] = useState<boolean>(false);

  const handleIsModal = useCallback((isModal: boolean): void => {
    setIsModal(isModal);
  }, []);

  return [
    isModal,
    handleIsModal,
  ] as const;
};

export default useModal;