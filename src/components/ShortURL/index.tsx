import { css } from '@emotion/react';
import { SerializedStyles } from '@emotion/utils';
import ReceiveURL from './ReceiveURL';
import ShortURLInput from './ShortURLInput';
import ShortURLTitle from './ShortURLTitle';

const ShortURL = (): JSX.Element => {
  return (
    <div css={shortURL}>
      <ShortURLTitle />
      <ShortURLInput />
      <ReceiveURL />
    </div>
  );
};

const shortURL: SerializedStyles = css`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default ShortURL;