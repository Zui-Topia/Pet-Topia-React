import React, { useEffect, useState } from "react";
import instance from "../Index";

// 이메일 중복확인 API
const SignUpAPI = (email) => {
  console.log("이메일중복확인api들어옴"); // 함수 호출 시 로그를 찍어줌

  // 서버에 GET 요청을 보내어 이메일 중복을 확인하는 함수
  return instance.get("/user/check", {
    params: {
      email, // 쿼리 파라미터로 이메일 값을 전달
    },
  });
};

export default SignUpAPI;
