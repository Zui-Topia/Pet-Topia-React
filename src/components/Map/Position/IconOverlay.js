import React from 'react';
import styled from 'styled-components';

// 아이콘을 배치할 지도 상의 위치를 계산하는 함수 (임시 함수)
const calculatePosition = (floor, category) => {
    // 각 층과 카테고리에 따른 좌표 설정을 여기서 처리한다고 가정
    // 실제로는 지도 이미지와 실제 위치 계산을 기반으로 위치를 설정해야 함
    const positions = {
        '6F': {
            배변봉투: { top: '50px', left: '100px' },
            // 다른 카테고리와 위치 정보도 추가 가능
        },
        // 다른 층에 대한 정보도 추가 가능
    };

    return positions[floor][category];
};

const IconOverlay = ({ floor, category }) => {
    const { top, left } = calculatePosition(floor, category);

    const IconWrapper = styled.div`
        position: absolute;
        top: ${top};
        left: ${left};
        width: 30px;
        height: 30px;
        background-color: red; /* 임시로 배경색을 추가 */
        border-radius: 50%; /* 원 모양 아이콘 */
        z-index: 999; /* 다른 요소 위에 표시하기 위해 높은 값으로 설정 */
    `;

    return <IconWrapper />;
};

export default IconOverlay;
