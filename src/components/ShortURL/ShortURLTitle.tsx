import { css } from '@emotion/react';
import { SerializedStyles } from '@emotion/utils';
import { fontSize } from 'styles/fontSize';

const ShortURLTitle = (): JSX.Element => {
  return (
    <div css={shortURLTitle}>단축 URL 지정</div>
  );
};

const shortURLTitle: SerializedStyles = css`
  font-size: ${fontSize.big};
  font-weight: 500;
  margin-bottom: 1rem;
`;

export default ShortURLTitle;