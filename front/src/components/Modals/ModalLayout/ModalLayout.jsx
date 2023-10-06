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
            <svg css={S.SClose} aria-label="닫기" className="x1lliihq x1n2onr6" color="rgb(255, 255, 255)" fill="rgb(255, 255, 255)" height="18" role="img" viewBox="0 0 24 24" width="18"><title>닫기</title><polyline fill="none" points="20.643 3.357 12 12 3.353 20.647" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3"></polyline><line fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" x1="20.649" x2="3.354" y1="20.649" y2="3.354"></line></svg>
            <div css={S.SContainer} onClick={handleContainerClick}>
                {children}
            </div>
        </div>
    );
}

export default ModalLayout;