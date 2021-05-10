import { Fragment } from 'react';
import { css } from '@emotion/react';
import { SerializedStyles } from '@emotion/utils';
import { AiOutlineLink } from 'react-icons/ai';
import useShortURL from 'hooks/shortURL/useShortURL';
import { palette } from 'styles/palette';
import { fontSize } from 'styles/fontSize';

const ReceiveURL = (): JSX.Element => {
  const { shortURL } = useShortURL();

  return (
    <Fragment>
    {
      shortURL.length > 0 &&
      <div css={receiveURLWrapper}>
        <AiOutlineLink
          css={receiveURLIcon}
        />
        <a
          href={shortURL}
          target='_blank'
          rel='noopener noreferrer'
          css={receiveURL}
        >
          {shortURL}
        </a>
      </div>
    }
    </Fragment>
  );
};

const receiveURLWrapper: SerializedStyles = css`
  width: 425px;
  display: flex;
  align-items: center;
  border: 1px solid ${palette.lighterGreen};
  border-radius: 25px;
  padding: 0.5rem 1rem;
`;

const receiveURLIcon: SerializedStyles = css`
  margin-right: 0.5rem;
  font-size: ${fontSize.contents};
`;

const receiveURL: SerializedStyles = css`
  color: ${palette.blue};
`;

export default ReceiveURL;