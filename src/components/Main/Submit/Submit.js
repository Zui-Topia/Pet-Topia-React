import React from "react";
import styled from "styled-components";
import { Button } from "antd";

// SubmitButton 컴포넌트 정의
const SubmitButton = ({ label, onClick, ...props }) => (
  <StyledButton type="primary" onClick={onClick} {...props}>
    {label}
  </StyledButton>
);

// 스타일이 적용된 버튼 컴포넌트 정의
const StyledButton = styled(Button)`
  width: 550px;
  height: 70px;
  background-color: black;
  color: white;
  border: none;
  display: flex;
  align-items: center; // 아이템들을 수직으로 가운데 정렬
  justify-content: center; // 아이템들을 수평으로 가운데 정렬
  font-size: 16px;

  &:hover {
    background-color: #313131 !important;
    color: white;
  }
`;

export default SubmitButton;
