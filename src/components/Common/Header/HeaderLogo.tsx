import { css, SerializedStyles } from '@emotion/react';
import Logo from 'assets/icons/Logo.svg';

const HeaderLogo = (): JSX.Element => {
  return (
    <img
      src={Logo}
      css={headerLogo}
      alt='logo'
    />
  );
};

const headerLogo: SerializedStyles = css`
  width: 120px;
  cursor: pointer;
`;

export default HeaderLogo;