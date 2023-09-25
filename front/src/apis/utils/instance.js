import axios from "axios";

const instance = axios.create({
    // baseURL 을 모듈화 시킴
    baseURL: "http://localhost:8080",
    headers: {

    }
});

export default instance;