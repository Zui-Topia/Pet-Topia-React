import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { Spin } from "antd";
import Header from "../../components/Main/Common/Header";
import BranchSearch from "../../components/Main/BranchSearch";
import Footer from "../../components/Main/Common/Footer";
import { MAIN_IMAGES_PATHS } from "../../constants/imagePaths";

const MainPageContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  position: relative;
`;
const MainPageBodyContainer = styled.div`
  width: 100vw;
  height: 882px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-top: 30px;
`;

const BranchSearchContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-grow: 1;
  z-index: 1; /* 층 선택 버튼 위에 오도록 설정 */
`;

const BodyWrapper = styled.div`
  display: flex;
  position: fixed;
  width: 100vw; /* 화면 전체 너비 */
  white-space: nowrap; /* 줄 바꿈 방지 */
`;

const ImageContainer = styled.button`
  width: 50vw; /* BodyWrapper의 절반 너비 */
  height: 400px; /* BodyWrapper의 전체 높이를 채움 */
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
  /* 애니메이션을 추가하여 나타날 때와 사라질 때 효과를 동일하게 유지 */
  transition: opacity 0.5s ease-in-out;
`;

const Main = () => {
  const [spinning, setSpinning] = useState(false);
  const [selectedBranch, setSelectedBranch] = useState({
    branch: "더현대 서울",
    key: 1,
  });
  const navigate = useNavigate();

  const handleMapClick = () => {
    setSpinning(true);
    setTimeout(() => {
      setSpinning(false);
      navigate("/map", { state: selectedBranch });
    }, 500);
  };

  const handleReservationClick = () => {
    setSpinning(true);
    setTimeout(() => {
      setSpinning(false);
      navigate("/reservation", { state: selectedBranch });
    }, 500);
  };

  const handleBranchSelect = (branch, key) => {
    setSelectedBranch({ branch, key });
  };

  return (
    <MainPageContainer>
      {spinning && (
        <SpinContainer>
          <Spin size="large" />
        </SpinContainer>
      )}
      <Header />
      <MainPageBodyContainer>
        <BranchSearchContainer>
          <BranchSearch onSelectBranch={handleBranchSelect} />
        </BranchSearchContainer>

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
      </MainPageBodyContainer>
    </MainPageContainer>
  );
};

export default Main;
