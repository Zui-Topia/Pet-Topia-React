import React from 'react';
import styled from 'styled-components';

// '나의 예약 내역' 최상위 함수 - 예약이 있을 경우
export const ReservationInfo = ({ children }) => {
    return <ReservationInfoBlock>{children}</ReservationInfoBlock>;
};

// '나의 예약 내역' 최상위 함수 - 예약이 없을 경우
export const NoReservationInfo = () => {
    return <NoReservation>진행 중인 예약 내역이 없습니다.</NoReservation>;
};

// 예약이 있을 경우 css
const ReservationInfoBlock = styled.div`
    width: 88%;
    height: 290px;

    background: #f7f7f7;
    border-radius: 20px;
    box-shadow: 0 5px 5px 0 rgba(0, 0, 0, 0.04);

    margin: 0 auto;
    margin-top: 20px;
    margin-bottom: 20px;
`;

// 예약이 없을 경우 css
const NoReservation = styled.div`
    position: relative;

    margin: 50px auto; /*페이지 중앙에 나타나토록 설정*/
`;
