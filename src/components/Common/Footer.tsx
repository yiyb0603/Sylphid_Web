import { css } from '@emotion/react';
import { SerializedStyles } from '@emotion/utils';
import { fontSize } from 'styles/fontSize';
import { palette } from 'styles/palette';

const Footer = (): JSX.Element => {
  return (
    <div css={footer}>
      <div css={footerContents}>@Copyright yiyb0603. All rights reserved. Since 2021</div>
    </div>
  );
};

const footer: SerializedStyles = css`
  height: 70px;
  max-height: 70px;
  background-color: ${palette.main};
  display: flex;
  justify-content: center;
  align-items: center;
`;

const footerContents: SerializedStyles = css`
  font-size: ${fontSize.small};
  color: ${palette.white};
`;

export default Footer;