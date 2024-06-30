import { CheckCircleOutlined } from "@ant-design/icons";
import styled from "styled-components";
import React from "react";

// Input 컴포넌트 정의
const Input = ({ placeholder }) => {
  return (
    <div style={{ width: "350px" }}>
      {" "}
      {/* 부모 div의 너비 350px */}
      <div style={{ width: "100%" }}>
        {" "}
        {/* 내부 div의 너비 100% */}
        <InputWrapper>
          <TextInput type="text" placeholder={placeholder} /> {/* 입력란 */}
          <StyledIcon /> {/* 체크 아이콘 */}
        </InputWrapper>
      </div>
    </div>
  );
};

// 입력란을 감싸는 스타일 컴포넌트 정의
const InputWrapper = styled.div`
  position: relative; // 상대 위치 지정
  display: flex; // Flexbox 사용
  width: 100%; // 너비 100%
  margin-bottom: 40px; // 하단 마진 40px
`;

// 텍스트 입력란 스타일 컴포넌트 정의
const TextInput = styled.input`
  color: black; // 글자 색상 검정
  font-size: 20px; // 글자 크기 20px
  font-family: "Kanit"; // 글꼴 Kanit
  background-color: #f9f8f8; // 배경색 연한 회색
  padding: 20px 30px; /* 패딩을 더 크게 설정: 위아래 20px, 좌우 30px */
  border: 2px solid #ccc; // 테두리 회색, 두께 2px
  outline: none; // 포커스 시 아웃라인 제거
  border-radius: 5px; // 테두리 둥글게
  width: 400px; // 너비 400px
  height: 60px; // 높이 60px
  box-sizing: border-box; // 패딩과 테두리를 포함한 박스 크기 설정

  &:focus {
    border: 1px solid transparent; // 포커스 시 테두리 투명
    box-shadow: 0 0 0 2px #000000; // 포커스 시 검정색 그림자
  }
`;

// 체크 아이콘 스타일 컴포넌트 정의
const StyledIcon = styled(CheckCircleOutlined)`
  // 체크 박스 아이콘
  position: absolute; // 절대 위치 지정
  top: 50%; // 수직 중앙 정렬
  transform: translateY(-50%); // 수직 중앙 정렬
  right: 10px; // 오른쪽에서 10px 떨어짐
  color: grey; // 아이콘 색상 회색
  font-size: 20px; // 아이콘 크기 20px
`;

export default Input;
