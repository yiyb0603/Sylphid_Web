import { css, SerializedStyles } from '@emotion/react';
import HomeTitle from './HomeTitle';

const Home = (): JSX.Element => {
  return (
    <div css={home}>
      <HomeTitle />
    </div>
  );
}

const home: SerializedStyles = css`
  width: 100%;
  max-width: 1024px;
  margin: 2em auto;
`;

export default Home;