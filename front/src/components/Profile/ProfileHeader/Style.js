import { css } from '@emotion/react';

export const SHeaderContainer = css`
    display: flex;
    margin-bottom: 44px;
    width: 100%;
`;

export const SProfileImgOutBox = css`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 16px;
    margin-right: 46px;
    border: 2px solid #dbdbdb;
    border-radius: 50%;
    width: 166px;
    height: 166px;
`;

export const SProfileImgInBox = css`
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    width: 150px;
    height: 150px;
    overflow: hidden;

    & > img {
        width: 100%;
    }
`;

export const SUserInfoTop = css`
    display: flex;
    align-items: center;

    & > * {
        margin-right: 18px;
        cursor: pointer;
    }

    & > span {
        font-size: 20px;
        font-weight: 700;
    }

    & > button {
        padding: 0px 16px;
        height: 32px;
        background-color: rgb(239, 239, 239);
        border-radius: 8px;
        font-size: 14px;
        font-weight: 600;
        border: none;

        &:hover {
            background-color: #dbdbdb;
        }
    }
`;

export const SUserInfoMid = css`
    display: flex;
    margin: 20px 0px;

    & > div > span {
        margin-right: 40px;
        margin-left: 5px;
        font-size: 16px;
        font-weight: 700;
    }

`;

export const SUserInfoBottom = css`
    display: flex;
    flex-direction: column;
    font-size: 14px;
    font-weight: 600;

    & > button {
        padding: 0px 7px;
        margin: 10px 0px;
        height: 26px;
        width: 60px;
        border: none;
        border-radius: 100px;
        background-color: rgb(239, 239, 239);
        font-size: 13px;
        font-weight: 600;
    }

    & > button > svg {
        padding-top: 2px;
    }
    
`;