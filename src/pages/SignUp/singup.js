import React from "react";

import styled from "styled-components";

import { Divider } from "antd";
import Input from "../../components/User/Input/Input";
import PasswordInput from "../../components/User/Input/Password";
import EmailInput from "../../components/User/Input/EmailInput";
import PetSizeSelectionToggle from "../../components/User/Input/PetSizeSelection";
import PetWeightSelectionToggle from "../../components/User/Input/PetWeightSelection";

const Container = styled.div`
  // 가운데 정렬 위한 컴포넌트
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%; /* 필요에 따라 조정 */
  max-width: 800px; /* 최대 너비를 더 크게 설정 */
  margin: 0 auto;
`;

const Heading = styled.h2`
  font-size: 30px;
  font-family: "Kanit";
  font-weight: 400;
  text-align: ${({ align }) => align || "left"}; /* 기본값은 왼쪽 정렬 */
  width: 100%; /* 전체 너비로 설정하여 text-align이 작동하도록 함 */
  margin: ${({ margin }) =>
    margin || "0"}; /* 마진을 prop으로 받음, 기본값은 0 */
  margin-left: ${({ marginLeft }) =>
    marginLeft || "0"}; /* 왼쪽 마진을 prop으로 받음, 기본값은 0 */
  margin-top: ${({ marginTop }) =>
    marginTop || "0"}; /* 왼쪽 마진을 prop으로 받음, 기본값은 0 */
`;

const SectionTitle = styled.div`
  font-size: 25px;
  font-family: "Kanit";
  font-weight: 400;
`;

const StyledDivider = styled(Divider)`
  border-color: black; /* 구분선 색깔 */
`;

const DividerWrapper = styled.div`
  width: 550px; /* 구분선 길이 */
  margin: 0 auto;
`;
const Caution = styled.div`
  font-size: 15px;
  font-family: "Kanit";
  font-weight: 400;
  color: #9b9b9b;
`;

function Signup() {
  return (
    <Container>
      <Heading align="left" marginLeft="450px" marginTop="70px">
        회원가입
      </Heading>
      <DividerWrapper>
        <StyledDivider />
      </DividerWrapper>
      <SectionTitle>가입정보 입력</SectionTitle>
      <span>이메일</span>
      <EmailInput placeholder="이메일을 입력하세요" />
      <span>비밀번호</span>
      <PasswordInput placeholder="비밀번호를 입력하세요" />
      <Caution>(8자리 이상, 문자 + 숫자)</Caution>
      <span>비밀번호 확인</span>
      <PasswordInput placeholder="비밀번호를 확인하세요" />
      <DividerWrapper>
        <StyledDivider />
      </DividerWrapper>
      <SectionTitle>반려견 정보 입력</SectionTitle>
      <span>반려견 이름</span>
      <Input placeholder="반려견 이름을 입력해주세요" />
      <Caution>(*특수문자, 숫자 불가)</Caution>
      <span>반려견 몸무게</span>
      <PetSizeSelectionToggle />
      <span>반려견 체고</span>
      <PetWeightSelectionToggle />
    </Container>
  );
}

export default Signup;
