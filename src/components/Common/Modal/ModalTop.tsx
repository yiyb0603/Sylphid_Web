import { css, SerializedStyles } from '@emotion/react';
import { MdClose } from 'react-icons/md';
import { fontSize } from 'styles/fontSize';

type ModalTopProps = {
  title: string;
  handleIsModal: (isModal: boolean) => void;
}

const ModalTop = ({
  title,
  handleIsModal,
}: ModalTopProps): JSX.Element => {
  return (
    <div css={modalTop}>
      <div css={modalTitle}>{title}</div>
      <MdClose
        css={modalClose}
        onClick={() => handleIsModal(false)}
      />
    </div>
  );
};

const modalTop: SerializedStyles = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const modalTitle: SerializedStyles = css`
  font-size: ${fontSize.small};
`;

const modalClose: SerializedStyles = css`
  cursor: pointer;
  font-size: ${fontSize.medium};
`;

export default ModalTop;