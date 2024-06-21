import React, { useEffect, useState } from "react";
import instance from "../Index";

//이메일 중복확인 API
const SignUpAPI = (email) => {
  console.log("이메일중복확인api들어옴");
  return instance.get("/user/check", {
    params: {
      email,
    },
  });
};

export default SignUpAPI;
