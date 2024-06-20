import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom'; // useNavigate 훅을 가져옵니다.
const MapReservationContainer = styled.div`
    height: 60px;
    width: 100vw;
    //background-color: red;
    display: flex; /* flex 사용 */
    justify-content: flex-start; /* 항목을 왼쪽에 정렬 */
    align-items: center; /* 항목을 세로로 중앙에 정렬 */
    gap: 10px; /* 선택 사항: 제목 사이에 약간의 공간 추가 */
`;

const MapTitleButton = styled.button`
    margin-left: 45px;
    font-size: 30px;
    font-weight: 400;
    background: none;
    border: none;
    color: #b9b9b9;
`;

const ReservationTitleButton = styled.button`
    margin-left: 45px;
    font-size: 30px;
    font-weight: 400;
    background: none;
    border: none;
    cursor: pointer;
    /* 아래쪽 테두리 추가 */
    border-bottom: 3px solid #000; /* 색상과 두께를 원하는 값으로 변경 가능 */

    /* 아래쪽 테두리 간격 조절 */
    padding-bottom: 5px; /* 버튼과 테두리 간의 간격 조절 */
`;

const ReservationMap = () => {
    const navigate = useNavigate(); // useNavigate 훅을 사용하여 navigate 함수를 가져옵니다.

    const handleMapClick = () => {
        navigate('/map'); // MAP 버튼 클릭 시 /map 경로로 이동합니다.
    };

    const handleReservationClick = () => {
        navigate('/reservation'); // RESERVATION 버튼 클릭 시 /reservation 경로로 이동합니다.
    };
    return (
        <MapReservationContainer>
            <MapTitleButton onClick={handleMapClick}>MAP</MapTitleButton>
            <ReservationTitleButton onClick={handleReservationClick}>RESERVATION</ReservationTitleButton>
        </MapReservationContainer>
    );
};

export default ReservationMap;
