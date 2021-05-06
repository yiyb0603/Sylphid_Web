import { css, SerializedStyles } from '@emotion/react';
import { AiOutlineGithub } from 'react-icons/ai';
import { pushToWindowLink } from 'lib/pushToWindowLink';
import { GITHUB_ADDRESS } from 'constants/util';
import { fontSize } from 'styles/fontSize';
import ShortURLImage from 'assets/images/ShortURL.svg';
import Button from 'components/Common/Button';

const HomeTitle = (): JSX.Element => {
  return (
    <div css={wrapper}>
      <div>
        <div css={homeTitle}>링크 관리서비스 Sylphid</div>

        <div css={contentsWrapper}>
          <p>단순히 링크만 단축하는 서비스가 아닙니다.</p>
          <p>성공적인 마케팅에 도움이 되는 다양한 기능을 제공하고 있습니다.</p>
        </div>

        <Button
          padding={'0.5rem 1rem'}
          onClick={() => pushToWindowLink(GITHUB_ADDRESS)}
        >
          <AiOutlineGithub css={githubIcon} />
          <span css={githubText}>Github 링크</span>
        </Button>
      </div>

      <img
        css={shortURLImage}
        src={ShortURLImage}
        alt='short url'
      />
    </div>
  );
};

const wrapper: SerializedStyles = css`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
`;

const contentsWrapper: SerializedStyles = css`
  font-size: ${fontSize.small};
  margin-bottom: 0.7rem;
`;

const homeTitle: SerializedStyles = css`
  font-size: ${fontSize.biggest};
  font-weight: 500;
  margin-bottom: 0.5rem;
`;

const shortURLImage: SerializedStyles = css`
  height: 300px;
  object-fit: cover;
  user-select: none;
`;

const githubIcon: SerializedStyles = css`
  font-size: ${fontSize.normal};
  margin-right: 0.2rem;
`;

const githubText: SerializedStyles = css`
  font-size: ${fontSize.small};
`;

export default HomeTitle;