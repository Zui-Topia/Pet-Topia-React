import React from 'react';
import styled from 'styled-components';
import QRCodeElement from './QRCodeElement';

// QR 모달의 body부분으로 예약 위치 정보와 QR 표시하는 함수
const QRModalBody = ({ value }) => {
    return (
        <QRModalBodyBlock>
            <div className="body-location">
                <span>위치</span>
                <div className="reservation-location">
                    {value.placeDTO.branchName} / {value.placeDTO.placeInfo}
                </div>
            </div>
            <div className="qr-location">
                <QRCodeElement reservationId={value.reservationVO.reservationId} />
            </div>
        </QRModalBodyBlock>
    );
};

export default QRModalBody;

// QR 모달의 body css
const QRModalBodyBlock = styled.div`
    background: #ffffff;
    width: 350px;

    padding-top: 20px;
    padding-right: 40px;
    padding-left: 40px;
    margin: 0 auto;

    .body-location {
        margin-bottom: 10px;
        padding-bottom: 10px;
        display: flex;
        flex-direction: row;
    }

    .qr-location {
        // background-color: #545454;
        padding-bottom: 10px;
        display: flex;
        flex-direction: row;
    }

    .reservation-location {
        color: #000000;
        font-size: 25px;
    }

    span {
        padding-top: 4px;
        width: 50px;
        color: #545454;
        font-size: 20px;
    }
`;
