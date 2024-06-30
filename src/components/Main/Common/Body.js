/* 메인페이지에 두 개의 이미지를 배치하는 컴포넌트 */
import React from 'react';
import styled from 'styled-components';
import { MAIN_IMAGES_PATHS } from '../../../constants/imagePaths';

// 이미지를 가로로 나란히 배치하기 위한 컨테이너
const ImageContainer = styled.div`
    display: flex; // Flexbox를 사용하여 가로로 나열
    gap: 0px; // 이미지 사이의 간격을 0으로 설정
`;

// 각 이미지의 공통 스타일을 정의
const Image = styled.div`
    width: 50%; // 이미지의 너비를 컨테이너의 절반으로 설정
    height: auto; // 이미지의 높이를 자동으로 설정
    background-size: cover; // 이미지의 크기를 컨테이너에 맞추어 조정
    background-repeat: no-repeat; // 이미지 반복을 금지
`;

// MAIN_MAP 이미지를 배경으로 설정
const Image1 = styled(Image)`
    background-image: url(${MAIN_IMAGES_PATHS.MAIN_MAP}); // 첫 번째 이미지의 경로
`;

// MAIN_RES 이미지를 배경으로 설정
const Image2 = styled(Image)`
    background-image: url(${MAIN_IMAGES_PATHS.MAIN_RES}); // 두 번째 이미지의 경로
`;

const BodyImage = () => {
    return (
        <ImageContainer>
            <Image1 /> {/* 첫 번째 이미지 컴포넌트 */}
            <Image2 /> {/* 두 번째 이미지 컴포넌트 */}
        </ImageContainer>
    );
};

export default BodyImage;
