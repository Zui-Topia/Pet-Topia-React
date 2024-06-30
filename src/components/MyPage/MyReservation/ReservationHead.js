import React from 'react';
import styled from 'styled-components';

// 예약 내역 header 함수
// 예약 번호, 예약 날짜, 시간 배치
// 예약 내역 활성화 시 검은색 처리, 비활성화 시 회색 처리
const ReservationHead = ({ value }) => {
    const gray = value.reservationDelete === 1 || value.reservationDeleteDate !== null;

    return (
        <ReservationHeadBlock reservationDelete={gray}>
            <div className="reservation-number">예약번호 | {value.reservationToken}</div>
            <div className="reservation-day-details">
                {value.reservationDate} {value.reservationVisitTime}
            </div>
        </ReservationHeadBlock>
    );
};

export default ReservationHead;

// 예약 내역 header css
const ReservationHeadBlock = styled.div`
    background: ${(props) => (props.reservationDelete ? '#D9D9D9' : '#000000')};

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
