import React, { useState } from 'react';
import styled, { css } from 'styled-components';

// 층별안내 부분 wrapper
const FloorTopBox = styled.div`
    height: 48px;
    width: 125px;
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
    font-family: 'Kanit-Bold', Helvetica, Arial, sans-serif;
    font-weight: 700; /* Adjust weight as necessary */
    font-size: 16px; /* Adjust size as necessary */
`;
// 층 wrapper
const FloorContainer = styled.div`
    background: linear-gradient(180deg, rgb(250, 130, 130) 0%, rgb(255, 255, 255) 100%);
    height: 100vh;
    margin-top: 5px;
    position: relative;
    width: 134px;
`;
// 층 하나의 버튼
const FloorButtonBox = styled.button`
    height: 80px;
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
    font-family: 'Kanit-Bold', Helvetica, Arial, sans-serif;
    font-weight: 700; /* Adjust weight as necessary */
    font-size: 20px; /* Adjust size as necessary */

    // 선택된 층일 때 텍스트 색상을 흰색으로 변경
    ${(props) =>
        props.selected &&
        css`
            color: #ffffff;
        `}
`;

const Floor = ({ onSelectFloor, selectedFloor }) => {
    // 층 클릭 시 실행할 동작을 여기에 작성
    const handleFloorClick = (floor) => {
        onSelectFloor(floor); // 선택된 층을 Map 컴포넌트로 전달
    };

    return (
        <div>
            <FloorTopBox>
                <FloorTop>층별 안내</FloorTop>
            </FloorTopBox>

            <FloorContainer>
                <FloorButtonBox selected={selectedFloor === '6F'} onClick={() => handleFloorClick('6F')}>
                    6F
                </FloorButtonBox>
                <FloorButtonBox selected={selectedFloor === '5F'} onClick={() => handleFloorClick('5F')}>
                    5F
                </FloorButtonBox>
                <FloorButtonBox selected={selectedFloor === '4F'} onClick={() => handleFloorClick('4F')}>
                    4F
                </FloorButtonBox>
                <FloorButtonBox selected={selectedFloor === '3F'} onClick={() => handleFloorClick('3F')}>
                    3F
                </FloorButtonBox>
                <FloorButtonBox selected={selectedFloor === '2F'} onClick={() => handleFloorClick('2F')}>
                    2F
                </FloorButtonBox>
                <FloorButtonBox selected={selectedFloor === '1F'} onClick={() => handleFloorClick('1F')}>
                    1F
                </FloorButtonBox>
                <FloorButtonBox selected={selectedFloor === 'B1'} onClick={() => handleFloorClick('B1')}>
                    B1
                </FloorButtonBox>
                <FloorButtonBox selected={selectedFloor === 'B2'} onClick={() => handleFloorClick('B2')}>
                    B2
                </FloorButtonBox>
            </FloorContainer>
        </div>
    );
};

export default Floor;
