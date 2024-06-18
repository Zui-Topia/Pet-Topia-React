import React from "react";
import styled from "styled-components";
import { Layout } from "antd";
import SignUpHeader from "../../components/Main/Common/SignUpHeader";
import { Input } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons"; // 앤트디자인 아이콘 가져오기
import SubmitButton from "../../components/Main/Submit/Submit";

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
  border: none; /* 모든 테두리를 없앱니다 */
  border-bottom: 1px solid #d9d9d9; /* 아래쪽 테두리만 추가합니다 */
  padding: 0 12px;
  box-sizing: border-box;
  &:focus {
    border-bottom-color: none; /* 포커스 시 아래쪽 테두리 색상 변경 */
    box-shadow: none; /* 기본 포커스 스타일 제거 */
    outline: none; /* 기본 포커스 아웃라인 제거 */
  }
  &:active {
    border-bottom-color: transparent; /* 마우스 클릭 시 색상 없앱니다 */
    box-shadow: none;
    outline: none;
  }
  margin-bottom: 50px;
`;

const StyledPassword = styled(Input.Password)`
  height: 54px;
  border-radius: 2px;
  border: none; /* 모든 테두리를 없앱니다 */
  border-bottom: 1px solid #d9d9d9; /* 아래쪽 테두리만 추가합니다 */
  padding: 0 12px;
  box-sizing: border-box;
  margin-bottom: 70px;
  &:focus {
    border-bottom-color: black !important; /* 포커스 시 아래쪽 테두리 색상 변경 */
    box-shadow: none; /* 기본 포커스 스타일 제거 */
  }
`;

const LargeIcon = styled.div`
  .anticon {
    font-size: 25px; /* 아이콘 크기를 두 배로 설정 */
    margin-right: 30px;
  }
`;

const Login = () => {
  return (
    <FullHeightLayout>
      <SignUpHeader />
      <StyledContent>
        <Inner>
          <FormContainer>
            <EmailInputContainer>
              <StyledInput
                size="large"
                placeholder="이메일"
                type="email"
                name="email"
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
              autoComplete="off"
              prefix={
                <LargeIcon>
                  <LockOutlined />
                </LargeIcon>
              }
            />

            <ButtonContainer>
              <SubmitButton label="로그인" type="submit" />
            </ButtonContainer>
          </FormContainer>
        </Inner>
      </StyledContent>
    </FullHeightLayout>
  );
};

export default Login;
