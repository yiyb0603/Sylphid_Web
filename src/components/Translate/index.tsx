import { css } from '@emotion/react';
import { SerializedStyles } from '@emotion/utils';
import Button from 'components/Common/Button';
import { fontSize } from 'styles/fontSize';
import TranslateBox from './TranslateBox';

const Translate = (): JSX.Element => {
  return (
    <div css={translateWrapper}>
      <TranslateBox />
      <Button
        width={'80px'}
        margin={'0.5rem 0 0 0'}
        padding={'0.5rem 0'}
        fontSize={fontSize.smallest}
        onClick={() => {}}
      >
        번역하기
      </Button>
    </div>
  );
};

const translateWrapper: SerializedStyles = css`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

export default Translate;