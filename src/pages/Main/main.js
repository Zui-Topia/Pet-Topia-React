import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { Spin } from "antd";
import SignUpHeader from "../../components/Main/Common/SignUpHeader";
import BranchSearch from "../../components/Map/BranchSearch/BranchSearch";
import Footer from "../../components/Main/Common/Footer";

import { MAIN_IMAGES_PATHS } from "../../constants/imagePaths";

const MainPageBodyContainer = styled.div`
  width: 100%;
  height: 100px;

  display: flex;
  flex-direction: row;
  position: relative;
`;

const BranchSearchContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-grow: 1;
  position: absolute;
  //   top: 140px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 1; /* 층 선택 버튼 위에 오도록 설정 */
`;

const FooterWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: auto;
`;

const BodyWrapper = styled.div`
  display: flex;
  position: fixed;
  width: 100vw; /* 화면 전체 너비 */
  height: calc(
    100vh - 200px
  ); /* 화면 전체 높이에서 ToggleWrapper와 FooterWrapper 사이의 높이 (200px) 빼기 */
  overflow-x: auto; /* 가로 스크롤 제공 */

  white-space: nowrap; /* 줄 바꿈 방지 */
`;

const ImageContainer = styled.button`
  width: 50vw; /* BodyWrapper의 절반 너비 */
  height: 50vh; /* BodyWrapper의 전체 높이를 채움 */
  background-image: url(${(props) => props.image}); /* 이미지 경로 설정 */
  background-size: cover; /* 이미지를 커버하도록 설정 */
  background-position: center; /* 이미지를 가운데 정렬 */
  float: left; /* 왼쪽으로 배치 */
  border: none;
  cursor: pointer; /* 마우스를 올렸을 때 포인터로 변경 */
  transition: transform 0.2s fast; /* 변화에 애니메이션 효과 추가 */

  &:hover {
    transform: scale(1.05); /* 마우스를 올렸을 때 약간 확대됨 */
  }
`;
const SpinContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(255, 255, 255, 0.7);
  z-index: 9999;
`;

const Main = () => {
  const [spinning, setSpinning] = useState(false);
  const navigate = useNavigate();

  const handleMapClick = () => {
    setSpinning(true);
    setTimeout(() => {
      setSpinning(false);
      navigate("/map");
    }, 500);
  };

  const handleReservationClick = () => {
    setSpinning(true);
    setTimeout(() => {
      setSpinning(false);
      navigate("/reservation");
    }, 500);
  };
  return (
    <div>
      {spinning && (
        <SpinContainer>
          <Spin size="large" />
        </SpinContainer>
      )}
      <SignUpHeader />
      <MainPageBodyContainer>
        <BranchSearchContainer>
          <BranchSearch />
        </BranchSearchContainer>
      </MainPageBodyContainer>

      <BodyWrapper>
        <ImageContainer
          image={MAIN_IMAGES_PATHS.MAIN_MAP}
          onClick={handleMapClick}
        />
        <ImageContainer
          image={MAIN_IMAGES_PATHS.MAIN_RES}
          onClick={handleReservationClick}
        />
      </BodyWrapper>

      <FooterWrapper>
        <Footer />
      </FooterWrapper>
    </div>
  );
};

export default Main;
