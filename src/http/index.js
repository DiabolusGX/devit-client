import axios from 'axios';
const api = axios.create({
    baseURL: process.env.REACT_APP_API_BASE_URL,
    withCredentials: true,
    headers: {
        'Content-type': 'application/json',
        Accept: 'application/json',
    },
});

//list of all the endpoints
export const getAuthorizedUser = () => {
    return api.get('/auth/check');
};
export const checkUsername = (data) => {
    return api.post('/api/v1/user/check-username', data);
};
export const activate = (data) => {
    return api.post('/api/v1/user/activate', data);
};
export const getUserProfile = () => {
    return api.get('/api/v1/user/profile');
};
export const getAllPosts = () => {
    return api.get('/api/v1/posts/all');
};
export const getAllPostsOfUser = (userId) => {
    return api.get(`/api/v1/posts/all?${userId}`);
};
export const logout = () => {
    return api.post('/auth/logout');
};

//edit endpoints
export const editHeader = (data) => {
    return api.patch('/api/v1/user/profile/header', data);
};
export const editAbout = (data) => {
    return api.patch('/api/v1/user/profile/about', data);
};
export const addExperience = (data) => {
    return api.post('/api/v1/user/experience/add', data);
};
export const removeExperience = (experienceId) => {
    return api.delete(`/api/v1/user/experience/${experienceId}`);
};

//room endpoints
export const addRoomRequest = (data) => {
    return api.post('/api/v1/rooms/create', data);
};
export const getAllRoomsRequest = () => {
    return api.get('/api/v1/rooms');
};
export const joinRoomRequest = (roomID, data) => {
    return api.post(`/api/v1/rooms/join/${roomID}`, data);
};
export default api;
