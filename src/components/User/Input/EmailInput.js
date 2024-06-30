import { CheckCircleOutlined } from "@ant-design/icons";
import styled from "styled-components";
import React from "react";

// 입력란을 감싸는 스타일 컴포넌트 정의
const InputWrapper = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  margin-bottom: 40px;
`;

// 텍스트 입력란 스타일 컴포넌트 정의
const TextInput = styled.input`
  color: black;
  font-size: 20px;
  font-family: "Kanit";
  background-color: #f9f8f8;
  padding: 20px 30px; /* 패딩을 더 크게 설정 */
  border: 2px solid #ccc;
  outline: none;
  border-radius: 5px;
  width: 400px;
  height: 60px;
  box-sizing: border-box;

  &:focus {
    border: 1px solid transparent;
    box-shadow: 0 0 0 2px #000000;
  }
`;

// 체크 아이콘 스타일 컴포넌트 정의
const StyledIcon = styled(CheckCircleOutlined)`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: 10px;
  color: grey;
  font-size: 20px;
`;

// EmailInput 컴포넌트 정의
const EmailInput = ({ placeholder }) => {
  return (
    <div style={{ width: "250px" }}>
      <div style={{ width: "100%" }}>
        <InputWrapper>
          <TextInput type="text" placeholder={placeholder} />
          <StyledIcon />
        </InputWrapper>
      </div>
    </div>
  );
};

export default EmailInput;
