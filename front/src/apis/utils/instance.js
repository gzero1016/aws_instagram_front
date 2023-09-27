import axios from "axios";

const instance = axios.create({
    // baseURL 을 모듈화 시킴
    baseURL: "http://localhost:8080",
    headers: {
        Authorization: !!localStorage.getItem("accessToken") && localStorage.getItem("accessToken") // accessToken 안에 토큰이 들어있으면 해당 토큰을 사용하겠다
    }
});

export default instance;