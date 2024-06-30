import React from "react";
import styled from "styled-components";
import { MAIN_IMAGES_PATHS } from "../../../constants/imagePaths";

const BodyImage = () => {
  return (
    <ImageContainer>
      <Image1 />
      <Image2 />
    </ImageContainer>
  );
};

// 이미지를 가로로 나란히 배치할 컨테이너
const ImageContainer = styled.div`
  display: flex;
  gap: 0px; /* 이미지 사이의 간격 설정 */
`;

// 각 이미지의 공통 스타일 정의
const Image = styled.div``;

// 첫 번째 이미지
const Image1 = styled(Image)`
  background-image: url(${MAIN_IMAGES_PATHS.MAIN_MAP}); /* 첫 번째 이미지 경로 */
`;

// 두 번째 이미지
const Image2 = styled(Image)`
  background-image: url(${MAIN_IMAGES_PATHS.MAIN_RES}); /* 두 번째 이미지 경로 */
`;

export default BodyImage;
