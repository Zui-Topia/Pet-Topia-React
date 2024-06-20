import instance from "../Index";

const PostSignUpAPI = (userData) => {
  return instance.post("/user/signup", userData);
};

export default PostSignUpAPI;
