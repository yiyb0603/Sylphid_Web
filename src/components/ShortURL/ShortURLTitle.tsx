import { css } from '@emotion/react';
import { SerializedStyles } from '@emotion/utils';
import { fontSize } from 'styles/fontSize';

const ShortURLTitle = (): JSX.Element => {
  return (
    <div css={shortURLTitle}>링크는 심플하게 Sylphid</div>
  );
};

const shortURLTitle: SerializedStyles = css`
  font-size: ${fontSize.big};
  margin-bottom: 1rem;
`;

export default ShortURLTitle;