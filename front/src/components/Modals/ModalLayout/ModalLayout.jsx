import React from 'react';
/** @jsxImportSource @emotion/react */
import * as S from './Style';
import { useRecoilState } from 'recoil';
import { showModalState } from '../../../store/atoms/ModalState';

function ModalLayout({ children }) {
    const [ showModal, setShowModal ] = useRecoilState(showModalState);

    // 클릭시
    const handleBackgroundClick = (e) => {
        setShowModal(<></>);
    }

    // 클릭제외
    const handleContainerClick = (e) => {
        e.stopPropagation();  // 이벤트 전파 되는것을 방지할때 사용함
    }

    return (
        <div css={S.SLayout} onClick={handleBackgroundClick}>
            <div css={S.SContainer} onClick={handleContainerClick}>
                {children}
            </div>
        </div>
    );
}

export default ModalLayout;