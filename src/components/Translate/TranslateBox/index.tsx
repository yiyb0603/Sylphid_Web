import { css } from '@emotion/react';
import { SerializedStyles } from '@emotion/utils';
import { palette } from 'styles/palette';
import LanguageSelect from './LanguageSelect';
import TranslatePreview from './TranslatePreview';

const TranslateBox = (): JSX.Element => {
  return (
    <div css={translateBox}>
      <LanguageSelect />
      <TranslatePreview />
    </div>
  );
};

const translateBox: SerializedStyles = css`
  width: 100%;
  border: 1px solid ${palette.lighterGray};
`;

export default TranslateBox;