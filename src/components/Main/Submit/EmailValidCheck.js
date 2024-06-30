import React from "react";
import styled from "styled-components";
import { Button, Modal } from "antd";
import SignUpAPI from "../../../api/User/SignUpAPI";

// 스타일이 적용된 버튼 컴포넌트 정의
const StyledButton = styled(Button)`
  width: 120px;
  height: 60px;
  background-color: #545454;
  color: white;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  margin-left: 10px; /* 이메일 입력 칸과의 간격을 주기 위해 설정 */

  &:hover {
    background-color: #313131 !important;
    color: white;
  }
`;

// EmailValidationCheckButton 컴포넌트 정의
const EmailValidationCheckButton = ({
  label,
  email,
  setIsEmailAvailable,
  resetEmail,
}) => {
  // 이메일 유효성 검사 함수
  const isValidEmail = (email) => {
    // 간단한 이메일 유효성 검사 정규식
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  // 이메일 유효성 확인 함수
  const checkEmail = async () => {
    // 이메일 형식이 유효하지 않으면 에러 로그 출력
    if (!isValidEmail(email)) {
      return;
    }
    try {
      // 이메일 유효성 확인 API 호출
      const response = await SignUpAPI(email);

      if (response.data.success) {
        // 이메일이 사용 가능하면 상태 업데이트 및 모달 표시
        setIsEmailAvailable(true);
        showModal("사용가능한 이메일입니다");
      } else {
        // 이메일이 이미 사용 중이면 상태 업데이트 및 이메일 초기화, 모달 표시
        setIsEmailAvailable(false);
        resetEmail(); // 이메일 초기화
        showModal("이미 사용 중인 이메일입니다");
      }
    } catch (error) {
      // 에러 발생 시 콘솔에 로그 출력 및 모달 표시

      showModal("에러발생");
    }
  };

  // 모달 표시 함수
  const showModal = (message) => {
    Modal.info({
      title: "이메일 확인 결과",
      content: message,
      okText: "확인",
    });
  };

  return (
    <StyledButton
      type="primary"
      onClick={checkEmail}
      disabled={!isValidEmail(email)} // 이메일이 유효하지 않으면 버튼 비활성화
    >
      {label}
    </StyledButton>
  );
};

export default EmailValidationCheckButton;
