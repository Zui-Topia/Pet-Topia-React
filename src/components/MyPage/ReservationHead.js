import React from 'react';
import styled from 'styled-components';

const ReservationHeadBlock = styled.div`
    background: #000000;

    border-top-left-radius: 20px;
    border-top-right-radius: 20px;

    padding-top: 20px;
    padding-right: 20px;
    padding-left: 20px;
    padding-bottom: 20px;

    .reservation-number {
        color: #ffffff;
        font-size: 14px;
        margin-bottom: 10px;
    }

    .reservation-day-details {
        color: #ffffff;
        font-size: 20px;
    }
`;

const ReservationHead = () => {
    return (
        <ReservationHeadBlock>
            <div className="reservation-number">예약번호 | 1234567</div>
            <div className="reservation-day-details">2024.06.24 월요일 오후 1:30</div>
        </ReservationHeadBlock>
    );
};

export default ReservationHead;
