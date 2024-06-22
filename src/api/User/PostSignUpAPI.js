import instance from "../Index";

const PostSignUpAPI = (userData) => {
  console.log("회원가입서버응답");
  return instance.post("/user/signup", userData);
};

export default PostSignUpAPI;
