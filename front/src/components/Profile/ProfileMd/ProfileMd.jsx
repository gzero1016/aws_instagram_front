import React from 'react';
/** @jsxImportSource @emotion/react */
import * as S from './Style';
import Haru from '../../../assets/Haru.jpeg'
import Img from '../../../assets/Img.jpeg'

function ProfileMd(props) {
    return (
        <div css={S.SLayout}>
            <div css={S.SProfileBox}>
                <div css={S.SProfileImgOutBox}>
                    <div css={S.SProfileImgInBox}>
                        <img src={Haru} alt=''/>
                    </div>
                </div>
                <span>하루 🐈‍⬛</span>
            </div>
            <div css={S.SProfileBox}>
                <div css={S.SProfileImgOutBox}>
                    <div css={S.SProfileImgInBox}>
                        <img src={Img} alt=''/>
                    </div>
                </div>
                <span>앨리스</span>
            </div>
            <div css={S.SProfileBox}>
                <div css={S.SProfileImgOutBox}>
                    <div css={S.SProfileImgInBox}>
                        <svg aria-label="+ 아이콘" color="rgb(199, 199, 199)" fill="rgb(199, 199, 199)" height="44" role="img" viewBox="0 0 24 24" width="44"><title>+ 아이콘</title><path d="M21 11.3h-8.2V3c0-.4-.3-.8-.8-.8s-.8.4-.8.8v8.2H3c-.4 0-.8.3-.8.8s.3.8.8.8h8.2V21c0 .4.3.8.8.8s.8-.3.8-.8v-8.2H21c.4 0 .8-.3.8-.8s-.4-.7-.8-.7z"></path></svg>
                    </div>
                </div>
                <span>신규</span>
            </div>
        </div>
    );
}

export default ProfileMd;