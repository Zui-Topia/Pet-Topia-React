import React, { useEffect, useState } from 'react';
import axios from 'axios';

// API 설정
const instance = axios.create({
    baseURL: 'http://localhost:8081', // 실제 API base URL로 변경하세요
    timeout: 1000,
    headers: { 'Content-Type': 'application/json' },
});

export default instance;
