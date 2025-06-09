import axios from 'axios';

// axios 인스턴스 생성
const instance = axios.create({
    baseURL: 'http://localhost:8080',  // Spring Boot 서버 주소
    timeout: 5000,  // 요청 타임아웃
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    }
});

// 요청 인터셉터
instance.interceptors.request.use(
    config => {
        // 요청 전에 수행할 작업
        const token = localStorage.getItem('token');
        if (token) {
            config.headers['Authorization'] = `Bearer ${token}`;
        }
        return config;
    },
    error => {
        return Promise.reject(error);
    }
);

// 응답 인터셉터
instance.interceptors.response.use(
    response => {
        // 응답 데이터를 가공
        return response;
    },
    error => {
        // 오류 응답을 처리
        if (error.response) {
            switch (error.response.status) {
                case 401:
                    // 인증 오류 처리
                    console.error('인증이 필요합니다.');
                    break;
                case 403:
                    // 권한 오류 처리
                    console.error('접근 권한이 없습니다.');
                    break;
                case 404:
                    // 리소스 없음
                    console.error('요청한 리소스를 찾을 수 없습니다.');
                    break;
                default:
                    console.error('서버 오류가 발생했습니다.');
            }
        }
        return Promise.reject(error);
    }
);

export default instance; 