import { css } from '@emotion/react';

export const SelectFeedImgContainer = css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 24px;
    width: 396px;
    height: 396px;
`;

export const FileInput = css`
    display: none;
`;

export const ImageBox = css`
    margin-bottom: 16px;
`;

export const SelectButton = css`
    margin-top: 24px;
    padding: 7px 16px;
    border: none;
    border-radius: 8px;
    background-color: rgb(0, 149, 246);
    color: white;
    font-size: 14px;
    font-weight: 600;
    height: 32px;
    cursor: pointer;
    
    &:hover {
        background-color: rgb(0, 115, 246);
    }
`;

export const BackButton = css`
    align-items: center;
    padding: 16px;
    cursor: pointer;
`;

export const NextButton = css`
    align-items: center;
    padding: 16px;
    color: rgb(0, 149, 246);
    font-size: 14px;
    font-weight: 700;
    cursor: pointer;
`;

export const ReviewContainer = css`
    width: 396px;
    height: 396px;
`;

export const ImgBox = css`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 396px;
    height: 380px;
    & > img {
        width: 100%;
    }
`;
