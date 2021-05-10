import { css } from '@emotion/react';
import { SerializedStyles } from '@emotion/utils';
import { FaExchangeAlt } from 'react-icons/fa';
import useTranslate from 'hooks/translate/useTranslate';
import { ILanguage, languages } from 'lib/language';
import { fontSize } from 'styles/fontSize';

const LanguageSelect = (): JSX.Element => {
  const { request, onChangeRequest, handleExchangeLanguage } = useTranslate();

  return (
    <div css={languageSelect}>
      <select
        name='source'
        value={request.source}
        onChange={onChangeRequest}
      >
        {
          languages.map(({ name, code }: ILanguage) => (
            <option
              key={code}
              value={code}
            >
              {name}
            </option>
          ))
        }
      </select>
      
      <FaExchangeAlt
        onClick={handleExchangeLanguage}
      />
      
      <select
        name='target'
        value={request.target}
        onChange={onChangeRequest}
      >
        {
          languages.map(({ name, code }: ILanguage) => (
            <option
              key={code}
              value={code}
            >
              {name}
            </option>
          ))
        }
      </select>
    </div>
  );
};

const languageSelect: SerializedStyles = css`
  height: 60px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;

  & > * {
    font-size: ${fontSize.small};
    cursor: pointer;
  }
`;

export default LanguageSelect;