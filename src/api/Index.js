import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { getCookie } from '../utils/cookie';

// API 설정
const instance = axios.create({
    baseURL: 'http://localhost:8081', // 실제 API base URL로 변경하세요
    timeout: 1000,
    headers: { 'Content-Type': 'application/json' },
});

instance.interceptors.request.use(
    (config) => {
        const accessToken = getCookie('accessToken');
        if (accessToken) {
            config.headers['Authorization'] = `${accessToken}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    },
);

export default instance;
