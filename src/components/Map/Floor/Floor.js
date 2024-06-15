import React from 'react';
import styled from 'styled-components';

const Floor = () => {
    // 층 컴포넌트 전체 wrapper
    const FloorTopBox = styled.div`
        height: 48px;
        width: 125px;
        margin-top: 48px;
        position: relative; /* Absolute positioning in .floortop requires a relative parent */
    `;
    // 층별안내 부분 컴포넌트
    const FloorTop = styled.div`
        background-color: #ffffff;
        border: 5px solid #fa8282;
        height: 48px;
        width: 125px;
        position: absolute;
        text-align: center;
        line-height: 48px;
    `;
    // 층 wrapper
    const FloorContainer = styled.div`
        background: linear-gradient(180deg, rgb(250, 130, 130) 0%, rgb(255, 255, 255) 100%);
        height: 760px;
        margin-top: 5px;
        position: relative;
        width: 134px;
    `;
    // 층 하나의 버튼
    const FloorButtonBox = styled.button`
        height: 70px;
        width: 125px;
        display: flex;
        justify-content: center;
        align-items: center;
        justify-content: center;
        padding: 0;
        background: none;
        border: none;
        cursor: pointer;
        position: relative;
    `;

    // 층 클릭 시 실행할 동작을 여기에 작성
    const handleFloorClick = (floor) => {
        alert(`${floor} 버튼 클릭됨`);
    };

    return (
        <div>
            <FloorTopBox>
                <FloorTop>층별 안내</FloorTop>
            </FloorTopBox>

            <FloorContainer>
                <FloorButtonBox onClick={() => handleFloorClick('6F')}>6F</FloorButtonBox>
                <FloorButtonBox onClick={() => handleFloorClick('6F')}>6F</FloorButtonBox>
                <FloorButtonBox onClick={() => handleFloorClick('6F')}>6F</FloorButtonBox>
                <FloorButtonBox onClick={() => handleFloorClick('6F')}>6F</FloorButtonBox>
                <FloorButtonBox onClick={() => handleFloorClick('6F')}>6F</FloorButtonBox>
                <FloorButtonBox onClick={() => handleFloorClick('6F')}>6F</FloorButtonBox>
                <FloorButtonBox onClick={() => handleFloorClick('6F')}>6F</FloorButtonBox>
                <FloorButtonBox onClick={() => handleFloorClick('6F')}>6F</FloorButtonBox>
            </FloorContainer>
        </div>
    );
};

export default Floor;
