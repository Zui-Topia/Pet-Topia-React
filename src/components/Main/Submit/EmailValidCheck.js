import React from "react";
import styled from "styled-components";
import { Button } from "antd";

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

const EmailValidationCheckButton = ({ label }) => (
  <StyledButton type="primary">{label}</StyledButton>
);

export default EmailValidationCheckButton;
