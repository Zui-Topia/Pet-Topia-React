import React, { useState } from "react";
import styled from "styled-components";
import { Layout, Modal } from "antd";
import SignUpHeader from "../../components/Main/Common/SignUpHeader";
import Header from "../../components/Main/Common/Header";
import { Input } from "antd";
import { Spin } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import loginAPI from "../../api/User/LogInAPI"; // loginAPI import
import { setCookie } from "../../utils/cookie";
// import { Spin } from "antd";

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

const LoginButton = styled.button`
  width: 550px;
  height: 70px;
  background-color: black;
  color: white;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  cursor: pointer;
  border-radius: 6px;

  &:hover {
    background-color: #313131 !important;
    color: white;
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
  const [modalVisible, setModalVisible] = useState(false);
  const [modalText, setModalText] = useState("");
  const [loginSuccess, setLoginSuccess] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("폼 제출됨: ", email, password); // 로그 추가
    setSpinning(true); // 스피너 활성화

    try {
      const response = await loginAPI(email, password);
      console.log("서버 응답: ", response.headers); // 로그 추가
      const authorizationHeader = response.headers.get("Authorization");
      const accessToken = authorizationHeader
        ? authorizationHeader.split(" ")[1]
        : null; // Bearer 토큰 추출
      // const accessToken = response.headers.get("Authorization");
      console.log("headers:", response);
      console.log(accessToken);
      if (accessToken) {
        setCookie(accessToken);
      } else {
        console.error("No accessToken in response");
        return;
      }

      if (response.data.success) {
        setLoginSuccess(true);
        setModalVisible(true);
        setModalText("로그인 성공");
      } else {
        setLoginSuccess(false);
        setModalText("로그인 실패: 잘못된 이메일 또는 비밀번호");
      }
    } catch (error) {
      console.log("에러 발생: ", error); // 로그 추가
      setLoginSuccess(false);
      setModalText("로그인 중 오류 발생");
    } finally {
      setSpinning(false); // 스피너 비활성화
      setModalVisible(true); // 모달 활성화
    }
  };

  const handleModalClose = () => {
    setModalVisible(false);
    setSpinning(true);

    if (loginSuccess) {
      setTimeout(() => {
        setSpinning(false);
        navigate("/main");
      }, 500);
    } else {
      setSpinning(false);
    }
  };
  return (
    <FullHeightLayout>
      {spinning && (
        <SpinContainer>
          <Spin size="large" />
        </SpinContainer>
      )}
      <Header />
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
              <LoginButton type="submit">로그인</LoginButton>
            </ButtonContainer>
          </FormContainer>
        </Inner>
      </StyledContent>

      <Modal
        title="로그인 결과"
        visible={modalVisible}
        onOk={handleModalClose}
        onCancel={handleModalClose}
      >
        <p>{modalText}</p>
      </Modal>
    </FullHeightLayout>
  );
};

export default Login;
