import { css, SerializedStyles } from '@emotion/react';
import { INavLink, navLinks } from 'lib/models/navLinks';
import HeaderLinkItem from './HeaderLinkItem';

const HeaderLink = (): JSX.Element => {
  return (
    <div css={headerLink}>
      {
        navLinks.map(({ name, route }: INavLink, idx: number) => (
          <HeaderLinkItem
            key={idx}
            name={name}
            route={route}
          />
        ))
      }
    </div>
  );
};

const headerLink: SerializedStyles = css`
  display: flex;
  align-items: center;
`;

export default HeaderLink;