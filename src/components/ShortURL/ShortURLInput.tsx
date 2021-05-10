import { css } from '@emotion/react';
import { SerializedStyles } from '@emotion/utils';
import { Tooltip } from '@mantine/core';
import useShortURL from 'hooks/shortURL/useShortURL';
import { RiInputMethodLine } from 'react-icons/ri';
import { MdClose } from 'react-icons/md';
import { fontSize } from 'styles/fontSize';
import { palette } from 'styles/palette';

const ShortURLInput = (): JSX.Element => {
  const {
    request,
    onChangeRequest,
    onCancel,
    onKeydownRequest,
  } = useShortURL();

  return (
    <Tooltip 
      label='엔터키를 눌러서 URL을 받을 수 있습니다.'
      withArrow={true}
      position='bottom'
      placement='center'
    >
      <div css={shortURLInputWrapper}>
        <div css={inputLeftWrapper}>
          <RiInputMethodLine
            css={clipIcon}
          />

          <input
            css={shortURLInput}
            type='text'
            name='url'
            value={request.url}
            onChange={onChangeRequest}
            onKeyDown={onKeydownRequest}
            placeholder='긴 링크를 입력해주세요.'
            autoComplete='off'
          />
        </div>

        <MdClose
          css={shortURLCancel}
          onClick={onCancel}
        />
      </div>
    </Tooltip>
  );
};

const shortURLInputWrapper: SerializedStyles = css`
  width: 425px;
  display: flex;
  align-items: center;
  border: 1px solid ${palette.main};
  border-radius: 25px;
  padding: 0.5rem 1rem;
  margin-bottom: 0.5rem;
`;

const inputLeftWrapper: SerializedStyles = css`
  display: flex;
  flex: 1;
  align-items: center;
`;

const clipIcon: SerializedStyles = css`
  font-size: ${fontSize.contents};
  margin-right: 0.5rem;
  color: ${palette.lighterBlack};
`;

const shortURLInput: SerializedStyles = css`
  width: 90%;
  outline: none;
  border: none;
  background: none;
  font-size: ${fontSize.smallest};
`;

const shortURLCancel: SerializedStyles = css`
  font-size: ${fontSize.contents};
  transition: 0.15s ease-in-out;
  cursor: pointer;

  &:hover {
    color: ${palette.red};
  }
`;

export default ShortURLInput;