import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { getCookie } from "../../../utils/cookie";
import { deleteAllCookies } from "../../../utils/cookie";

// LogInHeader 컴포넌트 정의
export const LogInHeader = () => {
  // useNavigate 훅을 사용하여 네비게이션 함수 가져오기
  const navigate = useNavigate();
  // 쿠키에서 accessToken 가져오기
  const accessToken = getCookie("accessToken");

  // 타이틀을 클릭했을 때 메인 페이지로 이동하는 함수
  const handleTitleClick = () => {
    navigate("/main");
  };

  // 로그아웃을 클릭했을 때 쿠키를 삭제하고 로그인 페이지로 이동하는 함수
  const handleLogoutClick = () => {
    deleteAllCookies(); // 쿠키 삭제 함수 호출
    navigate("/login");
  };

  // 마이페이지를 클릭했을 때 마이페이지로 이동하는 함수
  const handleMyPageClick = () => {
    navigate("/mypage");
  };

  // 로그인 페이지로 이동하는 함수
  const handleLoginClick = () => {
    navigate("/login");
  };

  // 회원가입 페이지로 이동하는 함수
  const handleSignUpClick = () => {
    navigate("/signup");
  };

  return (
    <HeaderWrapper>
      <InnerDiv>
        {/* 타이틀 클릭 이벤트 핸들러 추가 */}
        <Title onClick={handleTitleClick}>
          <span className="text-wrapper">The</span>
          <span className="text-wrapper-2">PETOPIA</span>
        </Title>
        <TextWrapper3></TextWrapper3>
      </InnerDiv>
    </HeaderWrapper>
  );
};

// 헤더 전체를 감싸는 래퍼로, 중앙에 배치하기 위해 flex 컨테이너 사용
const HeaderWrapper = styled.div`
  background-color: #ffffff;
  display: flex;
  align-items: center; // 아이템들을 수직으로 가운데 정렬
  justify-content: center; // 아이템들을 수평으로 가운데 정렬
  width: 100vw;
  padding: 15px; // 좌우 여백을 추가하여 헤더 전체 여백을 조정
  box-sizing: border-box; // 패딩을 너비에 포함
  position: relative; // 절대 위치 지정 요소를 위한 상대 위치 지정
`;

// 내부 div로, 높이를 설정하고 내부 아이템을 가운데 정렬
const InnerDiv = styled.div`
  background-color: #ffffff;
  display: flex;
  align-items: center; // 아이템들을 수직으로 가운데 정렬
  height: 100px;
  width: 100%;
  position: relative;
`;

// 타이틀을 감싸는 div로, 텍스트를 flex 컨테이너로 설정하여 수직 가운데 정렬
const Title = styled.div`
  display: flex;
  align-items: flex-end; // 아이템들을 아래쪽 끝으로 정렬
  cursor: pointer; // 커서를 포인터로 변경하여 클릭 가능함을 나타냄
  position: absolute; // 절대 위치 지정
  left: 50%; // 수평 중앙으로 이동
  transform: translateX(-50%); // 수평 중앙으로 이동

  .text-wrapper {
    color: #000000;
    font-family: "Kanit-Regular", Helvetica;
    font-size: 40px;
    font-weight: 500;
    letter-spacing: 0;
    line-height: 1; // 줄 높이를 설정하여 기준선 맞추기
    margin-right: 5px; // 텍스트 간 간격 조정
  }

  .text-wrapper-2 {
    font-size: 50px;
    line-height: 1; // 줄 높이를 설정하여 기준선 맞추기
    font-weight: 600;
  }
`;

// 로그아웃 및 마이페이지 텍스트 스타일
const TextWrapper3 = styled.div`
  color: #9b9b9b;
  font-family: "Kanit-Regular", Helvetica;
  font-size: 15px;
  font-weight: 400;
  letter-spacing: 0;
  margin-left: auto; // 오른쪽 끝으로 이동
  display: flex; // 아이템들을 flex 컨테이너로 설정
  align-items: center; // 아이템들을 수직으로 가운데 정렬
  align-self: flex-start;
  span {
    cursor: pointer;
    margin-left: 20px; // 아이템 간 간격 조정
  }
`;

export default LogInHeader;
