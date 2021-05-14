import { useCallback } from 'react';
import { css } from '@emotion/react';
import { historySingleton } from 'lib/singleton/history';
import Button from 'components/Common/Button';
import { SerializedStyles } from '@emotion/utils';
import { palette } from 'styles/palette';
import { fontSize } from 'styles/fontSize';

type SelectCardProps = {
  image: string;
  title: string;
  route: string;
}

const SelectCard = ({
  image,
  title,
  route,
}: SelectCardProps): JSX.Element => {
  const handlePushToRoute = useCallback((): void => {
    historySingleton.push(route);
  }, [route]);
  
  return (
    <div css={searchCardWrapper}>
      <img
        css={searchCardImage}
        src={image}
        alt={image}
      />

      <div css={searchCardTitle}>{title}</div>

      <Button
        width={'30%'}
        height={'40px'}
        onClick={handlePushToRoute}
      >
        바로가기
      </Button>
    </div>
  );
};

const searchCardWrapper: SerializedStyles = css`
  width: 47.5%;
  height: 70vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 1px solid ${palette.black};
  border-radius: 25px;
  padding: 2rem 0;
`;

const searchCardImage: SerializedStyles = css`
  width: 30%;
  margin-bottom: 0.5rem;
`;

const searchCardTitle: SerializedStyles = css`
  font-size: ${fontSize.normallest};
  margin-bottom: 0.5rem;
`;

export default SelectCard;