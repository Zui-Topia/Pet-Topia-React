import React, { useEffect, useState } from "react";
import instance from "../Index";

// 이메일 중복확인 API
const SignUpAPI = (email) => {
  // 서버에 GET 요청을 보내어 이메일 중복을 확인하는 함수
  return instance.get("/user/check", {
    params: {
      email, // 쿼리 파라미터로 이메일 값을 전달
    },
  });
};

export default SignUpAPI;
