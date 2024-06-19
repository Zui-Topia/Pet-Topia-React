import React from "react";
import styled from "styled-components";
import { Button, Modal } from "antd";
import axios from "axios";
import SignUpAPI from "../../../api/User/SignUpAPI";

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

const EmailValidationCheckButton = ({ label, email, setIsEmailAvailable }) => {
  const isValidEmail = (email) => {
    // 간단한 이메일 유효성 검사 정규식
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const checkEmail = async () => {
    if (!isValidEmail(email)) {
      console.error("유효한 이메일 형식이 아닙니다.");
      return;
    }
    try {
      const response = await SignUpAPI(email);
      if (response.data.success) {
        setIsEmailAvailable(true);
        showModal("사용가능한 이메일입니다");
      } else {
        setIsEmailAvailable(false);
        showModal("이미 사용 중인 이메일입니다");
      }
    } catch (error) {
      console.error("There was an error checking the email!", error);
      showModal("Error checking email");
    }
  };

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
      disabled={!isValidEmail(email)}
    >
      {label}
    </StyledButton>
  );
};

export default EmailValidationCheckButton;
