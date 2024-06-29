// instance 모듈을 import
import instance from "../Index";

// 회원가입 API 호출 함수
const PostSignUpAPI = (userData) => {
  // 콘솔에 로그 출력: "회원가입서버응답"
  // instance를 사용하여 POST 요청을 보냄
  // 요청 URL: "/user/signup"
  // 요청 데이터: userData
  return instance.post("/user/signup", userData);
};

// PostSignUpAPI 함수를 default로 export
export default PostSignUpAPI;
