import { useCallback, memo } from 'react';
import { css, SerializedStyles } from '@emotion/react';
import NotFoundImage from 'assets/images/not-found.svg';
import Button from 'components/Common/Button';
import { historySingleton } from 'lib/singleton/history';
import { palette } from 'styles/palette';
import { fontSize } from 'styles/fontSize';

const NotFound = (): JSX.Element => {
  const handlePushToHome = useCallback((): void => {
    historySingleton.push('/');
  }, []);

  return (
    <div css={notFoundWrapper}>
      <div css={notFoundContentsWrapper}>
        <img  
          src={NotFoundImage}
          css={notFoundImage}
          alt='NotFound'
        />

        <div css={notFoundContents}>
          <div css={notFoundTitle}>
            Page Not Found
          </div>

          <div css={notFoundSubTitle}>
            요청한 URL 페이지를 찾을 수 없어요.
          </div>

          <Button
            width={'120px'}
            height={'40px'}
            backgroundColor={palette.main}
            onClick={handlePushToHome}
          >
            홈으로
          </Button>
        </div>
      </div>
    </div>
  );
};

const notFoundWrapper: SerializedStyles = css`
  min-height: 100vh;
	display: flex;
	justify-content: center;
`;

const notFoundContentsWrapper: SerializedStyles = css`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  margin: auto;
`;

const notFoundImage: SerializedStyles = css`
  width: 50%;
`;

const notFoundContents: SerializedStyles = css`
  text-align: center;

  @media screen and (max-width: 520px) {
    width: 70%;
    margin-top: 0.5rem;
  };
`;

const notFoundTitle: SerializedStyles = css`
  font-size: ${fontSize.bigger};
	font-weight: bold;
`;

const notFoundSubTitle: SerializedStyles = css`
  margin: 0.6rem 0 1rem 0;
`;

export default memo(NotFound);
