import React, { useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import { Modal } from 'antd';
import styled from 'styled-components';
import { ReservationDeleteAPI } from '../../../api/MyPage/MyPageAPI';

// 예약 내역 body 함수
// 예약 장소, 결제 내역, 예약 활성화 여부 표시
// 예약 내역 활성화 시 '예약 취소' 버튼, 비활성화 시 '취소된 예약' 혹은 '만료된 예약' 표시
const ReservationBody = ({ value }) => {
    const isExpired = value.reservationVO.reservationDelete === 1;
    const isDeleted = value.reservationVO.reservationDeleteDate !== null;
    const reservationId = value.reservationVO.reservationId;
    const navigate = useNavigate();

    // 예약 취소 모달
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

    // 예약 취소 API 비동기 호출
    const handleCancelReservation = async (event) => {
        event.stopPropagation(); // '예약 취소' 버튼 클릭 시 QR 모달 버튼이 눌리지 않게 방지하는 로직
        try {
            const reservationInfo = {
                reservationId: reservationId,
            };
            const response = await ReservationDeleteAPI(reservationInfo);

            if (response.data.success) {
                showModal(); // 예약 취소 확인용 모달 생성
            }
        } catch (error) {
            console.error('오류 발생 : ', error);
        }
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
        </ReservationBodyBlock>
    );
};

export default ReservationBody;

// 예약 내역 body css
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

    // body의 예약 위치 정보 구간 css
    .body-location {
        padding-bottom: 10px;
    }

    // body의 결제 내역 구간 css
    .body-payment {
        display: flex;
        flex-direction: row;
        padding-top: 10px;
        padding-bottom: 10px;
    }

    // 예약 위치 정보 css
    .reservation-location {
        color: #000000;
        font-size: 25px;
        padding-top: 10px;
        padding-bottom: 10px;
        margin-bottom: 10px;
        font-family: 'Kanit';
    }

    // 결제 내역 css
    .reservation-payment {
        width: 150px;
        color: #000000;
        font-size: 18px;
        font-family: 'Kanit';
    }

    // 결제 금액 css
    .reservation-pay-amount {
        width: 150px;
        color: #fa3428;
        font-size: 18px;
        font-weight: 400px;
        font-family: 'Kanit';
    }

    // 안내 문구 css
    span {
        width: 150px;
        color: #545454;
        font-size: 20px;
        padding-right: 10px;
    }
`;

// 예약 취소 버튼 css
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

// '예약 만료' 혹은 '취소된 예약' css
const ExpiredDiv = styled.div`
    color: #999999;
    border: none;
    font-family: 'Kanit';
    font-size: 15px;
    padding: 5px 10px;
    margin-left: auto;
    padding-right: 10px;
`;
