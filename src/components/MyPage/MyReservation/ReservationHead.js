import React from 'react';
import styled from 'styled-components';

const ReservationHeadBlock = styled.div`
    background: #000000;

    border-top-left-radius: 30px;
    border-top-right-radius: 30px;

    padding-top: 20px;
    padding-right: 40px;
    padding-left: 40px;
    padding-bottom: 20px;

    .reservation-number {
        color: #ffffff;
        font-size: 18px;
        margin-bottom: 18px;
    }

    .reservation-day-details {
        color: #ffffff;
        font-size: 25px;
    }
`;

const ReservationHead = ({ value }) => {
    return (
        <ReservationHeadBlock>
            <div className="reservation-number">예약번호 | {value.reservationToken}</div>
            <div className="reservation-day-details">
                {value.reservationDate} {value.reservationVisitTime}
            </div>
        </ReservationHeadBlock>
    );
};

export default ReservationHead;
