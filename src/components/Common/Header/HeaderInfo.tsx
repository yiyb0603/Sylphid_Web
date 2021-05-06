import React from 'react';
import { css } from '@emotion/react';
import { SerializedStyles } from '@emotion/utils';
import { FcInfo } from 'react-icons/fc';
import { fontSize } from 'styles/fontSize';
import Modal from '../Modal';
import useModal from 'hooks/util/useModal';

const HeaderInfo = (): JSX.Element => {
  const [infoModal, handleIsInfoModal] = useModal();

  return (
    <>
      <FcInfo
        css={headerInfo}
        onClick={() => handleIsInfoModal(true)}
      />
      
      {
        infoModal &&
        <Modal
          title={'웹 사이트 정보'}
          handleIsModal={handleIsInfoModal}
        >
          sd
        </Modal>
      }
    </>
  );
};

const headerInfo: SerializedStyles = css`
  font-size: ${fontSize.bigger};
  cursor: pointer;
`;

export default HeaderInfo;