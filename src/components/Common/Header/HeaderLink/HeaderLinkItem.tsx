import { useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import { History } from 'history';
import { css, SerializedStyles } from '@emotion/react';
import usePathName from 'hooks/util/usePathName';
import { fontSize } from 'styles/fontSize';
import { palette } from 'styles/palette';

type HeaderLinkItemProps = {
  name: string;
  route: string;
}

const HeaderLinkItem = ({
  name,
  route,
}: HeaderLinkItemProps): JSX.Element => {
  const history: History = useHistory();
  const pathName: string = usePathName();

  const handlePushToLink = useCallback((): void => {
    history.push(route);
  }, [history, route]);

  return (
    <div
      css={headerLinkItem(pathName, route)}
      onClick={handlePushToLink}
    >
      {name}
    </div>
  );
};

const headerLinkItem = (pathName: string, route: string): SerializedStyles => css`
  font-size: ${fontSize.small};
  margin-right: 3rem;
  border-bottom: ${(pathName === route) || (route !== '/' && pathName.includes(route)) ? `1px solid ${palette.white}` : 'none'};
  padding-bottom: 0.25rem;
  cursor: pointer;
`;

export default HeaderLinkItem;