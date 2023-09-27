import React, { useEffect, useState } from 'react';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';
import { authenticate } from '../apis/api/account';

function AuthRoute({ element }) {
    const location = useLocation();
    const pathname = location.pathname;
    const permitAllPath = ["/accounts"];
    const [ authenticated, setAuthenticated ] = useState(false);

    // async 가 안먹으면 프로미스를 사용해야함
    useEffect(() => {
        authenticate().then((response => {
            setAuthenticated(response.data);
        }));
    }, []); // 페이지 로드시 딱 한번만

    for(let path of permitAllPath) {  // for문으로 들어오는 path들의
        if(pathname.startsWith(path)) { // 경로가 /accounts 로 시작하는지?
            if(authenticated) { // 인증된 사람인지?
                return <Navigate to={"/"}/>;
            }
            return element;
        }
    }

    if(!authenticated) {
        return <Navigate to={"/accounts/login"}/>;
    }
    return element;
}

export default AuthRoute;