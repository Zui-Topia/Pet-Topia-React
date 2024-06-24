import React, { useState } from "react";
import styled from "styled-components";
import { Layout, Modal, Input, Spin, Button as AntButton } from "antd";
import Header from "../../components/Main/Common/Header";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import loginAPI from "../../api/User/LogInAPI"; // loginAPI import
import { setCookie } from "../../utils/cookie";
import LogInHeader from "../../components/Main/Common/LogInHeader";
const { Content } = Layout;

const FullHeightLayout = styled(Layout)`
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: white;
`;

const ButtonContainer = styled.div`
  width: 100%;
  margin-top: -50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px; // 버튼 사이 간격 추가
`;

const StyledContent = styled(Content)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 52px;
  height: 100%;
  padding: 20px;
  box-sizing: border-box;
`;

const Inner = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 32px;
`;

const FormContainer = styled.form`
  width: 100%;
  max-width: 800px;
  background-color: white;
  padding: 20px;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-top: 120px;
`;

const EmailInputContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
`;

const StyledInput = styled(Input)`
  height: 54px;
  border-radius: 2px;
  border: none;
  border-bottom: 1px solid #d9d9d9;
  padding: 0 12px;
  box-sizing: border-box;
  &:focus {
    border-bottom-color: none;
    box-shadow: none;
    outline: none;
  }
  &:active {
    border-bottom-color: transparent;
    box-shadow: none;
    outline: none;
  }
  margin-bottom: 50px;
`;

const StyledPassword = styled(Input.Password)`
  height: 54px;
  border-radius: 2px;
  border: none;
  border-bottom: 1px solid #d9d9d9;
  padding: 0 12px;
  box-sizing: border-box;
  margin-bottom: 70px;
  &:focus {
    border-bottom-color: black !important;
    box-shadow: none;
  }
`;

const LargeIcon = styled.div`
  .anticon {
    font-size: 25px;
    margin-right: 30px;
  }
`;

const StyledButton = styled(AntButton)`
  width: 550px;
  height: 70px;
  background-color: black;
  color: white;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  font-weight: bold; // 글자 볼드체로 변경
  cursor: pointer;
  border-radius: 6px;

  &:hover {
    background-color: #313131 !important;
    color: white;
  }
`;

const StyledSignUpButton = styled(AntButton)`
  width: 550px;
  height: 70px;
  background-color: #ffffff;
  color: black;
  border: 1px solid black;

  &:hover {
    background-color: #f5f5f5 !important;
    color: black;
  }
`;

const SpinContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(255, 255, 255, 0.7);
  z-index: 9999;
`;

const Login = () => {
  const [email, setEmail] = useState("");
  const [spinning, setSpinning] = useState(false);
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const showWarningModal = (message) => {
    Modal.warning({
      title: "로그인 결과",
      content: message,
      okText: "확인",
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("폼 제출됨: ", email, password); // 로그 추가
    setSpinning(true); // 스피너 활성화

    try {
      const response = await loginAPI(email, password);
      console.log("서버 응답: ", response.headers); // 로그 추가
      const accessToken = response.headers.get("Authorization");
      console.log("headers:", response);
      console.log(accessToken);
      if (accessToken) {
        setCookie(accessToken);
      } else {
        console.error("No accessToken in response");
        return;
      }

      if (response.data.success) {
        navigate("/main");
      } else {
        showWarningModal("로그인 실패: 잘못된 이메일 또는 비밀번호");
      }
    } catch (error) {
      console.log("에러 발생: ", error); // 로그 추가
      showWarningModal("아이디와 비밀번호를 입력해주세요");
    } finally {
      setSpinning(false); // 스피너 비활성화
    }
  };

  return (
    <FullHeightLayout>
      {spinning && (
        <SpinContainer>
          <Spin size="large" />
        </SpinContainer>
      )}
      <LogInHeader />
      <StyledContent>
        <Inner>
          <FormContainer onSubmit={handleSubmit}>
            <EmailInputContainer>
              <StyledInput
                size="large"
                placeholder="이메일"
                type="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                prefix={
                  <LargeIcon>
                    <UserOutlined />
                  </LargeIcon>
                }
              />
            </EmailInputContainer>

            <StyledPassword
              size="large"
              placeholder="비밀번호"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              autoComplete="off"
              prefix={
                <LargeIcon>
                  <LockOutlined />
                </LargeIcon>
              }
            />

            <ButtonContainer>
              <StyledButton type="primary" htmlType="submit">
                로그인
              </StyledButton>
              <StyledSignUpButton
                type="default"
                onClick={() => navigate("/signup")}
              >
                회원가입
              </StyledSignUpButton>
            </ButtonContainer>
          </FormContainer>
        </Inner>
      </StyledContent>
    </FullHeightLayout>
  );
};

export default Login;
