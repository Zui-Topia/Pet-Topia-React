import React from 'react';
import styled from 'styled-components';

const ORModalHeadBlock = styled.div`
    background: #000000;
    width: 350px;

    border-radius: 30px;

    padding-top: 20px;
    padding-right: 40px;
    padding-left: 40px;
    padding-bottom: 20px;
    margin: 0 auto;

    .reservation-number {
        color: #ffffff;
        font-size: 18px;
    }

    .reservation-day-details {
        color: #ffffff;
        font-size: 25px;
    }
`;

const QRModalHead = ({ value }) => {
    return (
        <ORModalHeadBlock>
            <div className="reservation-number">예약번호 | {value.reservationToken} </div>
            <div className="reservation-day-details">
                {value.reservationDate} {value.reservationVisitTime}
            </div>
        </ORModalHeadBlock>
    );
};

export default QRModalHead;
