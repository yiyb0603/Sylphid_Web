import { Fragment } from 'react';
import { css } from '@emotion/react';
import { SerializedStyles } from '@emotion/utils';
import { selectTypes } from 'lib/models/selectTypes';
import SelectCard from './SelectCard';
import { fontSize } from 'styles/fontSize';

const SelectType = (): JSX.Element => {
  return (
    <Fragment>
      <div css={selectTypeTitle}>검색 카테고리를 선택하세요.</div>
      <div css={selectTypeWrapper}>
        {
          selectTypes.map(({ image, title, route }, idx: number) => (
            <SelectCard
              key={idx}
              image={image}
              title={title}
              route={route}
            />
          ))
        }
      </div>
    </Fragment>
  );
};

const selectTypeTitle: SerializedStyles = css`
  text-align: center;
  font-size: ${fontSize.normallest};
  margin-bottom: 1rem;
`;

const selectTypeWrapper: SerializedStyles = css`
  display: flex;
  flex-wrap: wrap;
  flex: 1;
  justify-content: space-between;
  align-items: center;
`;

export default SelectType;