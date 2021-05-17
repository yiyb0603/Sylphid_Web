import { css } from '@emotion/react';
import { SerializedStyles } from '@emotion/utils';
import NaverImage from 'assets/images/naver.png';
import { pushToWindowLink } from 'lib/pushToWindowLink';
import { ellipsisLine } from 'styles/libStyle';
import { palette } from 'styles/palette';

type CardViewProps = {
  title: string;
  link: string;
  description: string;
}

const CardView = ({
  title,
  link,
  description,
}: CardViewProps): JSX.Element => {
  return (
    <div
      css={cardView}
      onClick={() => pushToWindowLink(link)}
    >
      <img
        src={NaverImage}
        css={cardImage}
        alt='naver'
      />

      <div
        css={cardTitle}
        dangerouslySetInnerHTML={{ __html: title }}
      ></div>
      <div
        css={cardDescription}
        dangerouslySetInnerHTML={{ __html: description }}
      ></div>
    </div>
  );
};

const cardView: SerializedStyles = css`
  width: 280px;
  max-height: 350px;
  margin: 0 1rem 1rem 0;
  border: 1px solid ${palette.black};
  cursor: pointer;
`;

const cardImage: SerializedStyles = css`
  width: 100%;
  height: 150px;
  max-height: 150px;
  object-fit: cover;
`;

const setCardContentsPadding = (): SerializedStyles => {
  return css`
    padding-bottom: 0.25rem;
    padding-left: 0.25rem;
  `;
}

const cardTitle: SerializedStyles = css`
  ${ellipsisLine(1)};
  ${setCardContentsPadding()};
  border-bottom: 1px solid ${palette.black};
`;

const cardDescription: SerializedStyles = css`
  ${ellipsisLine(4)};
  ${setCardContentsPadding()};
`;

export default CardView;