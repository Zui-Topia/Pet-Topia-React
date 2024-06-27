// loginAPI.js

// Axios 인스턴스를 가져옴
import instance from "../Index";

// 로그인 API 호출 함수
const loginAPI = (userEmail, password) => {
  // 콘솔에 로그 출력: "loginAPI 호출됨"과 함께 userEmail 및 password를 출력
  console.log("loginAPI 호출됨: ", userEmail, password);
  // instance를 사용하여 POST 요청을 보냄
  // 요청 URL: "/user/login"
  // 요청 데이터: { userEmail, password }
  return instance.post("/user/login", { userEmail, password });
};

// loginAPI 함수를 default로 export
export default loginAPI;
