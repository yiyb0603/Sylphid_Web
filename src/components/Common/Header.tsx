import React from 'react';
import { css } from '@emotion/react';
import { palette } from 'styles/palette';

const Header = (): JSX.Element => {
  return (
    <div css={header}>
      <div css={headerContents}>
        sd
      </div>
    </div>
  );
};

const header = css`
  height: 70px;
  max-height: 70px;
  background-color: ${palette.main};
`;

const headerContents = css`
  width: 100%;
  max-width: 1400px;
  margin: 0 auto;
`;

export default Header;