import React, { useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import { Layout, Modal } from 'antd';
import styled from 'styled-components';
import { ReservationDeleteAPI } from '../../../api/MyPage/MyPageAPI';

const ReservationBodyBlock = styled.div`
    background: #ffffff;

    border-bottom-left-radius: 20px;
    border-bottom-right-radius: 20px;
    box-shadow: 0 5px 5px 0 rgba(0, 0, 0, 0.04);

    padding-top: 20px;
    padding-right: 20px;
    padding-left: 40px;
    padding-bottom: 20px;
    margin: 0 auto;

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
        font-size: 25px;
        padding-top: 10px;
        padding-bottom: 10px;
        margin-bottom: 10px;
        font-family: 'Kanit';
    }

    .reservation-payment {
        width: 150px;
        color: #000000;
        font-size: 18px;
        font-family: 'Kanit';
    }

    .reservation-pay-amount {
        width: 150px;
        color: #fa3428;
        font-size: 18px;
        font-weight: 400px;
        font-family: 'Kanit';
    }

    span {
        width: 150px;
        color: #545454;
        font-size: 20px;
        padding-right: 10px;
    }
`;

const DeleteButton = styled.div`
    border-radius: 5px;
    cursor: 'pointer'
    color: #ffffff;
    // background-color: #000000;
    font-family: 'Kanit';
    font-size: 18px;
    padding: 5px;
    margin-left: auto;
    padding-left: 10px;
    padding-right: 10px;
    border : 1px solid #ffffff;

    &:hover {
        border-color: #FF0000;
        color: #FA8282;
        font-weight: 700;
    }
`;

const ExpiredDiv = styled.div`
    color: #999999;
    border: none;
    font-family: 'Kanit';
    font-size: 15px;
    padding: 5px 10px;
    margin-left: auto;
    padding-right: 10px;
`;

const ReservationBody = ({ value }) => {
    console.log('value ', value);
    const isExpired = value.reservationVO.reservationDelete === 1;
    const isDeleted = value.reservationVO.reservationDeleteDate !== null;
    const reservationId = value.reservationVO.reservationId;
    const navigate = useNavigate();

    const [modalVisible, setModalVisible] = useState(false);
    const [modalText, setModalText] = useState('');

    console.log('reservationId : ' + reservationId);

    const showModal = () => {
        Modal.info({
            title: '예약 취소 결과',
            content: '예약이 취소 되었습니다.',
            okText: '확인',
            onOk: () => {
                window.location.reload();
                navigate('/mypage');
            },
        });
    };

    const handleCancelReservation = async (event) => {
        event.stopPropagation();
        try {
            const reservationInfo = {
                reservationId: reservationId,
            };
            console.log('Sending reservation info:', reservationInfo); // 디버그용 로그

            const response = await ReservationDeleteAPI(reservationInfo);

            console.log(response);
            console.log(response.data);
            if (response.data.success) {
                // setModalVisible(true);
                showModal();
                //setModalText('예약이 취소 되었습니다.');
            }
        } catch (error) {
            // Handle error, e.g., show an error message
            console.error('Error cancelling reservation:', error);
        }
    };

    const handleModalClose = () => {
        // setModalVisible(false);
        window.location.reload();
        navigate('/mypage');
    };

    return (
        <ReservationBodyBlock>
            <div className="body-location">
                <span>위치</span>
                <div className="reservation-location">
                    {value.placeDTO.branchName} / {value.placeDTO.placeInfo}
                </div>
            </div>

            <div className="body-payment">
                <span>총 결제 금액</span>
                <div className="reservation-payment">
                    {value.reservationVO.reservationPayment === 0 ? '현장 결제' : '카카오페이'}
                </div>
                <div className="reservation-pay-amount">
                    {value.reservationVO.reservationPayment === 0 ? '0 원' : '5,000 원'}
                </div>
                {isDeleted ? (
                    <ExpiredDiv>취소된 예약</ExpiredDiv>
                ) : isExpired ? (
                    <ExpiredDiv>예약 만료</ExpiredDiv>
                ) : (
                    <DeleteButton onClick={handleCancelReservation}>예약 취소</DeleteButton>
                )}
            </div>
            {/* <Modal visible={modalVisible} onOk={handleModalClose} onCancel={handleModalClose}>
                <p>{modalText}</p>
            </Modal> */}
        </ReservationBodyBlock>
    );
};

export default ReservationBody;
