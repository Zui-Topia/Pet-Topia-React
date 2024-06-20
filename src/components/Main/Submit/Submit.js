import React from "react";
import styled from "styled-components";
import { Button } from "antd";

const StyledButton = styled(Button)`
  width: 550px;
  height: 70px;
  background-color: black;
  color: white;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;

  &:hover {
    background-color: #313131 !important;
    color: white;
  }
`;

const SubmitButton = ({ label, onClick, ...props }) => (
  <StyledButton type="primary" onClick={onClick} {...props}>
    {label}
  </StyledButton>
);

export default SubmitButton;
