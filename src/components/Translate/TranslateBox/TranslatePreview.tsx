import { css } from '@emotion/react';
import { SerializedStyles } from '@emotion/utils';
import { fontSize } from 'styles/fontSize';
import { palette } from 'styles/palette';

const TranslatePreview = (): JSX.Element => {
  return (
    <div css={translatePreviewWrapper}>
      <textarea
        css={translateTextarea}
      ></textarea>

      <textarea
        css={translatePreview}
        readOnly={true}
      ></textarea>
    </div>
  );
};

const translatePreviewWrapper: SerializedStyles = css`
  height: 600px;
  display: flex;

  & textarea {
    flex: 1;
    border: 1px solid ${palette.lighterGray};
    padding: 0.75rem;
    font-size: ${fontSize.smallest};
  }
`;

const translateTextarea: SerializedStyles = css`
  background-color: ${palette.white};
`;

const translatePreview: SerializedStyles = css`
  background-color: ${palette.snow};
`;

export default TranslatePreview;