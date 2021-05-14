import { GoSearch } from 'react-icons/go';
import { css } from '@emotion/react';
import { SerializedStyles } from '@emotion/utils';
import useSearch from 'hooks/search/useSearch';
import { fontSize } from 'styles/fontSize';
import { resetInput } from 'styles/libStyle';
import { palette } from 'styles/palette';

const SearchBar = (): JSX.Element => {
  const { keyword, onChangeKeyword } = useSearch();

  return (
    <div css={searchBar}>
      <GoSearch css={searchBarIcon} />

      <input
        css={searchBarInput}
        type='text'
        value={keyword}
        onChange={onChangeKeyword}
        placeholder='검색어를 입력하세요'
      />
    </div>
  );
};

const searchBar: SerializedStyles = css`
  width: 50%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  border: 1px solid ${palette.black};
  padding: 0.6rem 1rem;

  &:focus-within {
    border: 1px solid ${palette.main};
  }
`;

const searchBarIcon: SerializedStyles = css`
  font-size: ${fontSize.contents};
  margin-right: 0.5rem;
`;

const searchBarInput: SerializedStyles = css`
  ${resetInput()};
  font-size: ${fontSize.small};
`;

export default SearchBar;