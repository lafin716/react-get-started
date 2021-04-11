import axios from 'axios';
import { LOGIN_USER, REGISTER_USER } from './types';

export function loginUser(dataToSubmit){

    // 서버에 요청
    const request = axios.post('/api/users/login', dataToSubmit)
    .then(response => response.data)

    return {
        type: LOGIN_USER,
        payload: request
    }
}

export function registerUser(dataToSubmit){

    // 서버에 요청
    const request = axios.post('/api/users/register', dataToSubmit)
    .then(response => response.data)

    return {
        type: REGISTER_USER,
        payload: request
    }
}

export function authUser(){

    // 서버에 요청
    const request = axios.get('/api/users/auth')
    .then(response => response.data)

    return {
        type: REGISTER_USER,
        payload: request
    }
}