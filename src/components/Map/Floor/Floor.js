import React, { useState } from 'react';
import styled, { css } from 'styled-components';

// 층 wrapper
const FloorContainer = styled.div`
    background: linear-gradient(180deg, rgb(250, 130, 130) 0%, rgb(255, 255, 255) 100%);
    height: 700px;
    position: relative;
    width: 90px;
`;

const FloorInfoContainer = styled.div`
    height: 56px;
    position: relative;
    width: 90px;
    font-weight: 520;
    font-family: 'Kanit-Regular', Helvetica;
    font-size: 17px;
    display: flex;
    justify-content: center;
    align-items: center;
    justify-content: center;
    padding: 0;
`;

// 층 하나의 버튼
const FloorButtonBox = styled.button`
    height: 56px;
    width: 90px;
    display: flex;
    justify-content: center;
    align-items: center;
    justify-content: center;
    padding: 0;
    background: none;
    border: none;
    cursor: pointer;
    position: relative;
    font-weight: 500;
    font-family: 'Kanit-Regular', Helvetica;
    font-size: 17px;

    // 선택된 층일 때 텍스트 색상을 흰색으로 변경
    ${(props) =>
        props.selected &&
        css`
            background-color: #ffffff;
        `}
`;

const Floor = ({ floors, onSelectFloor, selectedFloor }) => {
    // 층 클릭 시 실행할 동작을 여기에 작성
    const handleFloorClick = (floor) => {
        onSelectFloor(floor); // 선택된 층을 Map 컴포넌트로 전달
    };

    return (
        <div>
            <FloorContainer>
                <FloorInfoContainer>층별검색</FloorInfoContainer>
                {floors.map((floor) => (
                    <FloorButtonBox
                        key={floor.mapId} // mapId를 key로 사용
                        selected={selectedFloor === floor.floor} // floor 값을 비교
                        onClick={() => handleFloorClick(floor.floor)} // floor 값을 전달
                    >
                        {floor.floor}
                    </FloorButtonBox>
                ))}
            </FloorContainer>
        </div>
    );
};

export default Floor;
