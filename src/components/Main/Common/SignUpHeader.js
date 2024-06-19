import React from "react";
import styled from "styled-components";

// 헤더 전체를 감싸는 래퍼로, 중앙에 배치하기 위해 flex 컨테이너 사용
const HeaderWrapper = styled.div`
  background-color: #ffffff;
  display: flex;
  justify-content: center;
  width: 100%;
  // border-radius: 2px;
  // border: none; /* 모든 테두리를 없앱니다 */
  // border-bottom: 1px solid #d9d9d9; /* 아래쪽 테두리만 추가합니다 */
  // width: 100vw;
`;

// 내부 div로, 높이를 설정하고 내부 아이템을 가운데 정렬
const InnerDiv = styled.div`
  background-color: #ffffff;
  display: flex;
  align-items: center; // 아이템들을 수직으로 가운데 정렬
  justify-content: space-between; // 아이템들을 좌우로 나누어 배치
  height: 100px;
  width: 100%;
  padding: 0 20px; // 좌우에 20px 여백 추가
`;

// 타이틀을 감싸는 div로, 텍스트를 flex 컨테이너로 설정하여 수직 가운데 정렬
const TitleWrapper = styled.div`
  flex: 1;
  display: flex;
  justify-content: center; // 아이템들을 중앙으로 정렬
  margin-right: -90px;
`;

const Title = styled.div`
  display: flex;
  align-items: flex-end; // 아이템들을 아래쪽 끝으로 정렬
  margin-top: -10px; // 타이틀을 더 위로 이동하여 위치 조정
  cursor: pointer; // 커서를 포인터로 변경하여 클릭 가능함을 나타냄

  // The 텍스트 스타일
  .text-wrapper {
    color: #000000;
    font-family: "Kanit-Regular", Helvetica;
    font-size: 20px;
    font-weight: 400;
    letter-spacing: 0;
    line-height: 1; // 줄 높이를 설정하여 기준선 맞추기
    margin-right: 5px; // 텍스트 간 간격 조정
  }

  // PETOPIA 텍스트 스타일
  .text-wrapper-2 {
    font-size: 30px;
    line-height: 1; // 줄 높이를 설정하여 기준선 맞추기
  }
`;

// 로그아웃 및 마이페이지 텍스트 스타일
const TextWrapper3 = styled.div`
  color: #9b9b9b;
  font-family: "Kanit-Regular", Helvetica;
  font-size: 15px;
  font-weight: 400;
  letter-spacing: 0;
  margin-left: auto; // 오른쪽 정렬

  // 개별 텍스트를 클릭할 수 있도록 포인터 커서를 추가
  span {
    cursor: pointer;
  }
`;

const LogoutMyPageWrapper = styled.div`
  display: flex;
  align-items: center; // 아이템들을 수직으로 가운데 정렬
`;

export const SignUpHeader = () => {
  // 타이틀을 클릭했을 때 안내창을 표시하는 함수
  const handleTitleClick = () => {
    alert("메인 페이지로 이동합니다.");
  };

  // 로그아웃을 클릭했을 때 안내창을 표시하는 함수
  const handleLogoutClick = () => {
    alert("로그아웃합니다.");
  };

  // 마이페이지를 클릭했을 때 안내창을 표시하는 함수
  const handleMyPageClick = () => {
    alert("마이페이지로 이동합니다.");
  };

  return (
    <HeaderWrapper>
      <InnerDiv>
        <TitleWrapper>
          {/* 타이틀 클릭 이벤트 핸들러 추가 */}
          <Title onClick={handleTitleClick}>
            <span className="text-wrapper">The</span>
            <span className="text-wrapper-2">PETOPIA</span>
          </Title>
        </TitleWrapper>
        <LogoutMyPageWrapper>
          <TextWrapper3>
            {/* 로그아웃 클릭 이벤트 핸들러 추가 */}
            <span onClick={handleLogoutClick}>로그아웃</span>
            &nbsp;&nbsp;
            {/* 마이페이지 클릭 이벤트 핸들러 추가 */}
            <span onClick={handleMyPageClick}>마이페이지</span>
          </TextWrapper3>
        </LogoutMyPageWrapper>
      </InnerDiv>
    </HeaderWrapper>
  );
};

export default SignUpHeader;
