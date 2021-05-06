import { css } from '@emotion/react';
import { SerializedStyles } from '@emotion/utils';
import { FaExchangeAlt } from 'react-icons/fa';
import { fontSize } from 'styles/fontSize';

const LanguageSelect = (): JSX.Element => {
  return (
    <div css={languageSelect}>
      <div>언어감지</div>
      <FaExchangeAlt />
      <div>언어감지</div>
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