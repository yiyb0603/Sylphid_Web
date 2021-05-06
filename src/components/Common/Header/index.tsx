import { css, SerializedStyles } from '@emotion/react';
import { palette } from 'styles/palette';
import HeaderInfo from './HeaderInfo';
import HeaderLink from './HeaderLink';
import HeaderLogo from './HeaderLogo';

const Header = (): JSX.Element => {
  return (
    <div css={header}>
      <div css={headerContents}>
        <HeaderLogo />
        <HeaderLink />
        <HeaderInfo />
      </div>
    </div>
  );
};

const header: SerializedStyles = css`
  height: 70px;
  max-height: 70px;
  background-color: ${palette.main};
`;

const headerContents: SerializedStyles = css`
  height: 100%;
  padding: 0 1.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export default Header;