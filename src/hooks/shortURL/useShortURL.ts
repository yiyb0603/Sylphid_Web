import { useCallback, ChangeEvent, KeyboardEvent } from 'react';
import { useRecoilState } from 'recoil';
import { initialURLState, shortURLState, urlRequestState } from 'atom/shortURL';
import { IShortURLDto } from 'lib/dto/shortURL.dto';
import shortURLRepository from 'lib/repository/shortURL.repository';
import { EResponse } from 'lib/enum/Response';
import { validateShortURL } from 'validation/shortURL.validation';

const useShortURL = () => {
  const [request, setRequest] = useRecoilState<IShortURLDto>(urlRequestState);
  const [shortURL, setShortURL] = useRecoilState<string>(shortURLState);

  const onChangeRequest = useCallback((e: ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = e.target;

    setRequest((prevRequest: IShortURLDto) => ({
      ...prevRequest,
      [name]: value,
    }));
  }, [setRequest]);

  const onCancel = useCallback((): void => {
    setRequest(initialURLState);
    setShortURL('');
  }, [setRequest, setShortURL]);

  const requestShortURL = useCallback(async (): Promise<void> => {
    try {
      if (!validateShortURL(request)) {
        return;
      }

      const { status, data: { shortURL } } = await shortURLRepository.createShortURL(request);
      if (status === EResponse.OK) {
        setShortURL(shortURL);
      }
    } catch (error) {
      console.log(error);
    }
  }, [request, setShortURL]);

  const onKeydownRequest = useCallback(({ key }: KeyboardEvent<HTMLInputElement>): void => {
    if (key === 'Enter') {
      requestShortURL();
    }
  }, [requestShortURL]);

  return {
    request,
    onChangeRequest,
    onCancel,
    onKeydownRequest,
    shortURL,
  };
}

export default useShortURL;