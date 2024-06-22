// loginAPI.js

import instance from "../Index"; // Axios 인스턴스 가져오기

const loginAPI = (userEmail, password) => {
  console.log("loginAPI 호출됨: ", userEmail, password); // 로그 추가
  return instance.post("/user/login", { userEmail, password });
};

export default loginAPI;
