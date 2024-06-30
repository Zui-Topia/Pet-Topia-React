import React, { useEffect, useState } from "react";
import axios from "axios";
import { getCookie } from "../utils/cookie";

// API 설정
const instance = axios.create({
  baseURL: "http://localhost:8081", // 실제 API base URL로 변경하세요
  timeout: 1000, // 요청 타임아웃 설정
  headers: { "Content-Type": "application/json" }, // 기본 헤더 설정
});

// 요청 인터셉터 설정
instance.interceptors.request.use(
  (config) => {
    // 쿠키에서 accessToken을 가져옴
    const accessToken = getCookie("accessToken");
    // accessToken이 있는 경우 Authorization 헤더에 추가
    if (accessToken) {
      config.headers["Authorization"] = `${accessToken}`;
    }
    return config;
  },
  (error) => {
    // 요청 오류가 발생한 경우 오류를 반환
    return Promise.reject(error);
  }
);

export default instance;
