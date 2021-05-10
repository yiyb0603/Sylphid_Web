import { css } from '@emotion/react';
import { SerializedStyles } from '@emotion/utils';
import { fontSize } from 'styles/fontSize';

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
  display: flex;
  justify-content: center;
  align-items: center;
`;

const footerContents: SerializedStyles = css`
  font-size: ${fontSize.small};
`;

export default Footer;