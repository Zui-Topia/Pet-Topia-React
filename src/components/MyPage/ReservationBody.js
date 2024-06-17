import React from 'react';
import styled from 'styled-components';

const ReservationBodyBlock = styled.div`
    background: #ffffff;

    border-bottom-left-radius: 20px;
    border-bottom-right-radius: 20px;
    box-shadow: 0 5px 5px 0 rgba(0, 0, 0, 0.04);

    padding-top: 20px;
    padding-right: 20px;
    padding-left: 20px;
    padding-bottom: 20px;

    .body-payment {
        display: flex;
        flex-direction: row;
        padding-top: 10px;
        padding-bottom: 10px;
    }

    .body-location {
        padding-bottom: 10px;
    }

    .reservation-location {
        color: #000000;
        font-size: 18px;
        padding-top: 10px;
        padding-bottom: 10px;
        margin-bottom: 10px;
    }

    .reservation-payment {
        width: 150px;
        color: #000000;
        font-size: 18px;
    }

    .reservation-pay-amount {
        width: 150px;
        color: #fa3428;
        font-size: 18px;
        font-weight: 400px;
    }

    span {
        width: 150px;
        color: #545454;
        font-size: 18px;
        padding-right: 10px;
    }
`;

const ReservationBody = () => {
    return (
        <ReservationBodyBlock>
            <div className="body-location">
                <span>위치</span>
                <div className="reservation-location">더현대 서울 / 1층 개모자 위탁소</div>
            </div>

            <div className="body-payment">
                <span>총 결제 금액</span>
                <div className="reservation-payment">현장 결제</div>
                <div className="reservation-pay-amount">0</div>
            </div>
        </ReservationBodyBlock>
    );
};

export default ReservationBody;
