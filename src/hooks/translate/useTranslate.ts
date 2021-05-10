import { ChangeEvent, useCallback } from 'react';
import { useRecoilState } from 'recoil';
import { requestTranslateState, translatedTextState } from 'atom/translate';
import { ITranslateDto } from 'lib/dto/translate.dto';
import { EResponse } from 'lib/enum/Response';
import translateRepository from 'lib/repository/translate.repository';
import { validateTranslate } from 'validation/translate.validation';

const useTranslate = () => {
  const [translatedText, setTranslatedText] = useRecoilState<string>(translatedTextState);
  const [request, setRequest] = useRecoilState<ITranslateDto>(requestTranslateState);

  const onChangeRequest = useCallback((
    e: ChangeEvent<HTMLTextAreaElement | HTMLSelectElement>
  ): void => {
    const { name, value } = e.target;

    setRequest((prevRequest: ITranslateDto) => ({
      ...prevRequest,
      [name]: value,
    }));
  }, [setRequest]);

  const handleExchangeLanguage = useCallback((): void => {
    setRequest((prevRequest: ITranslateDto) => ({
      ...prevRequest,
      source: prevRequest.target,
      target: prevRequest.source,
    }));
  }, [setRequest]);

  const requestTranslate = useCallback(async (): Promise<void> => {
    try {
      if (!validateTranslate(request)) {
        return;
      }

      const { status, data: { translatedText } } = await translateRepository.getTranslateString(request);
      if (status === EResponse.OK) {
        setTranslatedText(translatedText);
      }
    } catch (error) {
      console.log(error);
    }
  }, [request, setTranslatedText]);

  return {
    request,
    onChangeRequest,
    handleExchangeLanguage,
    translatedText,
    requestTranslate,
  };
}

export default useTranslate;