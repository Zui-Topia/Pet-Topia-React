import React from 'react';
import styled from 'styled-components';

const ScreenContainer = styled.div`
    background-color: #ffffff;
    display: flex;
    flex-direction: row;
    justify-content: center;
    width: 100%;
`;

const InnerContainer = styled.div`
    background-color: #ffffff;
    height: 395px;
    overflow: hidden;
    position: relative;
    width: 587px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const OverlapGroup = styled.div`
    background-color: #000000;
    border-radius: 5px;
    height: 194px;
    width: 100%; /* InnerContainer에 맞게 너비를 100% 설정 */
    position: relative; /* position: absolute; 제거 */
`;

const Element = styled.div`
    color: #ffffff;
    font-family: 'Inter-Regular', Helvetica;
    font-size: 23px;
    font-weight: 400;
    /* left 속성 제거 */
    letter-spacing: 0;
    line-height: normal;
    margin-top: 45px; /* 내부 여백을 조정하여 위치를 설정 */
    text-align: center; /* 가운데 정렬 추가 */
`;

const TextWrapper = styled.p`
    color: #ffffff;
    font-family: 'Inter-Regular', Helvetica;
    font-size: 35px;
    font-weight: 400;
    /* left 속성 제거 */
    letter-spacing: 0;
    line-height: normal;
    white-space: nowrap;
    text-align: center; /* 가운데 정렬 추가 */
`;

const Line = styled.img`
    height: 3px;
    left: 30px;
    object-fit: cover;
    position: absolute;
    top: 365px;
    width: 519px;
`;

const TextWrapper2 = styled.div`
    color: #000000;
    font-family: 'Inter-Regular', Helvetica;
    font-size: 30px;
    font-weight: 400;
    /* left 속성 제거 */
    letter-spacing: 0;
    line-height: normal;
    white-space: nowrap;
    text-align: center; /* 가운데 정렬 추가 */
`;

const TextWrapper3 = styled.div`
    color: #000000;
    font-family: 'Inter-Regular', Helvetica;
    font-size: 20px;
    font-weight: 400;
    /* left 속성 제거 */
    letter-spacing: 0;
    line-height: normal;
    white-space: nowrap;
    text-align: center; /* 가운데 정렬 추가 */
`;

export const ReservationCompleteContent = ({ reservationToken, reservationDate, reservationVisitTime }) => {
    return (
        <ScreenContainer>
            <InnerContainer>
                <OverlapGroup>
                    <Element>예약번호&nbsp;&nbsp;| {reservationToken}</Element>
                    <TextWrapper>
                        {reservationDate}&nbsp; {reservationVisitTime}
                    </TextWrapper>
                </OverlapGroup>

                <TextWrapper2>예약이 완료되었습니다.</TextWrapper2>
                <TextWrapper3>마이페이지에서 예약내역 확인이 가능합니다.</TextWrapper3>
            </InnerContainer>
        </ScreenContainer>
    );
};
