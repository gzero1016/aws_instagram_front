import { css } from '@emotion/react';

export const SLayout = css`
    display: flex;
    align-items: center;
`;

export const SProfileBox = css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-left: 35px;

    & > span {
        margin-top: 10px;
        margin-bottom: 40px;
        font-size: 12px;
        font-weight: 600;
    }
`;

export const SProfileImgOutBox = css`
    display: flex;
    justify-content: center;
    align-items: center;
    /* margin-left: 30px;
    margin-right: 10px; */
    border: 2px solid #dbdbdb;
    border-radius: 50%;
    width: 80px;
    height: 80px;
`;

export const SProfileImgInBox = css`
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    width: 73px;
    height: 73px;
    overflow: hidden;

    & > img {
        width: 100%;
    }
`;
