import { css } from '@emotion/react';
import { SerializedStyles } from '@emotion/utils';
import CardView from 'components/Common/CardView';
import useSearch from 'hooks/search/useSearch';
import { memo } from 'react';
import { IBlog, INews } from 'types/search.types';
import SearchBar from './SearchBar';

const Search = (): JSX.Element => {
  const { searchResults } = useSearch();
  
  return (
    <div>
      <SearchBar />

      <div css={searchResultsWrapper}>
        {
          searchResults.map((result: IBlog | INews, idx: number) => {
            const { title, description, link } = result;

            return (
              <CardView
                key={idx}
                title={title}
                description={description}
                link={link}
              />
            );
          })
        }
      </div>
    </div>
  );
};

const searchResultsWrapper: SerializedStyles = css`
  display: flex;
  flex-wrap: wrap;
  margin-top: 1rem;
`;

export default memo(Search);