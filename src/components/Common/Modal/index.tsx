import { Fragment, ReactNode } from 'react';
import { css, SerializedStyles } from '@emotion/react';
import { palette } from 'styles/palette';
import ModalTop from './ModalTop';

type ModalProps = {
  width?: string;
  height?: string;
  title: string;
  children: ReactNode;
  handleIsModal: (isModal: boolean) => void;
}

const Modal = ({
  width = '30%',
  height = '50%',
  title,
  children,
  handleIsModal,
}: ModalProps): JSX.Element => {
  return (
    <Fragment>
      <div
        css={modalOverlay}
        onClick={() => handleIsModal(false)}
      ></div>
      <div css={modal(width, height)}>
        <ModalTop
          title={title}
          handleIsModal={handleIsModal}
        />
      </div>
    </Fragment>
  );
};

const modal = (width: string, height: string): SerializedStyles => css`
  width: ${width};
  height: ${height};
  background-color: ${palette.white};
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 5px;
  padding: 1rem;
`;

const modalOverlay: SerializedStyles = css`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.4);
`;

export default Modal;