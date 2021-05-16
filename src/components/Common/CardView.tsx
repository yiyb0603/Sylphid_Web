import { css } from '@emotion/react';
import { SerializedStyles } from '@emotion/utils';
import NaverImage from 'assets/images/naver.png';
import { ellipsisLine } from 'styles/libStyle';

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
    <div css={cardView}>
      <img
        src={NaverImage}
        css={cardImage}
        alt='naver'
      />

      <div
        css={ellipsisLine(1)}
        dangerouslySetInnerHTML={{ __html: title }}
      ></div>
      <div
        css={ellipsisLine(4)}
        dangerouslySetInnerHTML={{ __html: description }}
      ></div>
    </div>
  );
};

const cardView: SerializedStyles = css`
  width: 300px;
  height: 350px;
  max-height: 350px;
`;

const cardImage: SerializedStyles = css`
  height: 150px;
  max-height: 150px;
  object-fit: cover;
`;

export default CardView;