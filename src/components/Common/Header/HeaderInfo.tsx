import { css } from '@emotion/react';
import { SerializedStyles } from '@emotion/utils';
import { FcInfo } from 'react-icons/fc';
import { fontSize } from 'styles/fontSize';

const HeaderInfo = (): JSX.Element => {
  return (
    <FcInfo css={headerInfo} />
  );
};

const headerInfo: SerializedStyles = css`
  font-size: ${fontSize.bigger};
  cursor: pointer;
`;

export default HeaderInfo;