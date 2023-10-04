import { useQuery } from 'react-query';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';
import { authenticate } from '../apis/api/account';
import Loding from '../components/Loading/Loding';
import { useEffect, useState } from 'react';

function AuthRoute({ element }) {
    const location = useLocation();
    const pathname = location.pathname;
    const permitAllPath = ["/accounts"];

    // 속성으로 Error 처리
    const authenticateState = useQuery(["authenticate"], authenticate, {
        retry: 1,    // 재요청 횟수
        refetchOnWindowFocus: false // 페이지로드시 한번만 실행
        // onError: (error) => {
        //     console.log("에러");
        //     console.log(error);
        // }
    }); // useQuery(배열로 키값, 비동기) / useQuery 는 get 요청만 보낼 수 있음

    // console.log(authenticateState);

    if(authenticateState.isLoading) {   // . 찍을수 있는건 객체
        return <Loding />
    }

    if(authenticateState.isError) {
        for(let path of permitAllPath) {
            if(pathname.startsWith(path)) {
                return element;
            }
        }
        return <Navigate to={"/accounts/login"} />
        // console.log(authenticateState.error.response.data); // 서버 응답 가져오기
    }

    for(let path of permitAllPath) {
        if(pathname.startsWith(path)) {
            return <Navigate to={"/"} />
        }
    }
    return element;
}

export default AuthRoute;