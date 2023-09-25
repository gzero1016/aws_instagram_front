import React, { useState } from 'react';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';

function AuthRoute({ element }) {
    const location = useLocation();
    const pathname = location.pathname;
    const permitAllPath = ["/accounts"];
    const [ authenticated, setAuthenticated ] = useState(false);

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