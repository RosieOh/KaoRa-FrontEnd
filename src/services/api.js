import axios from '../plugins/axios';

// API 서비스 객체
const api = {
    // 사용자 관련 API
    auth: {
        // 로그인
        login: (credentials) => {
            return axios.post('/api/auth/login', credentials);
        },
        // 회원가입
        register: (userData) => {
            return axios.post('/api/auth/register', userData);
        },
        // 로그아웃
        logout: () => {
            return axios.post('/api/auth/logout');
        }
    },
    
    // 사용자 프로필 관련 API
    user: {
        // 프로필 조회
        getProfile: () => {
            return axios.get('/api/user/profile');
        },
        // 프로필 수정
        updateProfile: (profileData) => {
            return axios.put('/api/user/profile', profileData);
        }
    },

    // 게시글 관련 API
    posts: {
        // 게시글 목록 조회
        getPosts: () => {
            return axios.get('/api/posts');
        },
        // 게시글 상세 조회
        getPost: (id) => {
            return axios.get(`/api/posts/${id}`);
        },
        // 게시글 작성
        createPost: (postData) => {
            return axios.post('/api/posts', postData);
        },
        // 게시글 수정
        updatePost: (id, postData) => {
            return axios.put(`/api/posts/${id}`, postData);
        },
        // 게시글 삭제
        deletePost: (id) => {
            return axios.delete(`/api/posts/${id}`);
        }
    }
};

export default api; 