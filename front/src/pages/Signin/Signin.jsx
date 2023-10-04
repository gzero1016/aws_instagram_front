import React, { useEffect, useState } from 'react';
import SignInAndUpLayout from '../../components/Layouts/SignInAndUpLayout/SignInAndUpLayout';
import Top from '../../components/Layouts/SignInAndUpLayout/Top/Top';
import Input from '../../components/Layouts/SignInAndUpLayout/Input/Input';
import OrBar from '../../components/Layouts/SignInAndUpLayout/OrBar/OrBar';
import { signin } from '../../apis/api/account';
/** @jsxImportSource @emotion/react */
import * as S from './Style';
import { useQueryClient } from 'react-query';

function Signin() {
    const queryClient = useQueryClient();   // 클라이언트에 접근하기위해 생성해준다.

    const emptyAccount = {
        phoneOrEmailOrUsername: "",
        loginPassword: ""
    }

    const [ account, setAccount ] = useState(emptyAccount);
    const [ isAccountValuesEmpty, setIsAccountValuesEmpty ] = useState(true);
    const [ errorMsg, setErrorMsg ] = useState("");

    const changeAccount = (name, value) => {
        setAccount({
            ...account,
            [name]: value
        });
    }

    useEffect(() => {
        setIsAccountValuesEmpty(Object.values(account).includes(""))
    }, [account])

    const handleSigninSubmit = async () => {
        try {
            const response = await signin(account); // response 에 정보를 담아둔 JWT 토큰이 저장됨
            localStorage.setItem("accessToken", "Bearer " + response.data); // JWT 를 사용하기위한 규칙 Bearer 를 토큰 앞에 붙여줘야함
            window.location.reload();
        } catch(error) {
            setErrorMsg(error.response.data.errorMessage);
        }
    }


    return (
        <SignInAndUpLayout>
            <Top>
                <div css={S.SLayout}>
                    <div>
                        <Input placeholder={"전화번호, 사용자 이름 또는 이메일"} name={"phoneOrEmailOrUsername"} changeAccount={changeAccount} />
                        <Input placeholder={"비밀번호"} type={"password"} name={"loginPassword"} changeAccount={changeAccount} />
                        <button onClick={handleSigninSubmit} disabled={isAccountValuesEmpty} css={S.SLoginBt}>로그인</button>
                        <OrBar />
                        <div>
                            kakao로 로그인
                        </div>
                        <div>
                            {errorMsg}
                        </div>
                    </div>
                </div>
            </Top>
        </SignInAndUpLayout>
    );
}

export default Signin;