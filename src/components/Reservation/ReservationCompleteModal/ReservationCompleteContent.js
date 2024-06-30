/* 예약 완료 컨텐츠 컴포넌트 */
import React from 'react';
import styled from 'styled-components';

// 작성자: 정은찬

// 스타일 정의
const ScreenContainer = styled.div`
    background-color: #ffffff;
    display: flex;
    flex-direction: row;
    justify-content: center;
    width: 500px;
    height: 300px;
    border-radius: 25px;
    margin-top: -20px;
    margin-left: -25px;
    border-top: 15px solid black;
`;

const OverlapGroup = styled.div`
    background-color: #000000;
    border-top-left-radius: 25px;
    border-top-right-radius: 25px;
    height: 70px;
    width: 100%;
    position: static;
    border-top: 80px solid black;
    margin-top: -65px;
`;

const Element = styled.div`
    color: #ffffff;
    font-family: 'Kanit-Regular', Helvetica;
    font-size: 20px;
    font-weight: 400;

    letter-spacing: 0;
    line-height: normal;
    margin-top: -40px;
    text-align: center;
`;

const TextWrapper = styled.p`
    color: #ffffff;
    font-family: 'Kanit-Regular', Helvetica;
    font-size: 30px;
    font-weight: 400;
    /* left 속성 제거 */
    letter-spacing: 0;
    line-height: normal;
    white-space: nowrap;
    margin-top: 15px;
    text-align: center;
`;

const InnerContainer = styled.div`
    background-color: #ffffff;
    height: 300px;
    justify-content: center;
    overflow: hidden;
    position: relative;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    border-bottom-left-radius: 20px;
    border-bottom-right-radius: 20px;
`;

const TextWrapper2 = styled.div`
    color: #000000;
    font-family: 'Kanit-Regular', Helvetica;
    font-size: 30px;
    font-weight: 400;
    /* left 속성 제거 */
    letter-spacing: 0;
    line-height: normal;
    white-space: nowrap;
    margin-top: 40px;
    text-align: center;
`;

const TextWrapper3 = styled.div`
    color: #000000;
    font-family: 'Kanit-Regular', Helvetica;
    font-size: 15px;
    font-weight: 400;
    /* left 속성 제거 */
    letter-spacing: 0;
    line-height: normal;
    white-space: nowrap;
    margin-top: 20px;
    text-align: center;
    border-bottom: 1px solid black;
`;

// 요일을 한국어로 변환하는 함수
const getKoreanDay = (date) => {
    const dayNames = ['일요일', '월요일', '화요일', '수요일', '목요일', '금요일', '토요일'];
    return dayNames[date.getDay()];
};

// 날짜를 원하는 형식으로 변환하는 함수
const formatDate = (dateStr) => {
    const date = new Date(dateStr);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    const koreanDay = getKoreanDay(date);
    return `${year}.${month}.${day} ${koreanDay}`;
};

// 시간을 원하는 형식으로 변환하는 함수
const formatTime = (timeStr) => {
    // 예외 처리: timeStr이 없는 경우 빈 문자열 반환
    if (!timeStr) return '';

    // 문자열 내의 공백을 제거하여 처리
    const trimmedTimeStr = timeStr.replace(/\s/g, '');

    const [time, period] = trimmedTimeStr.split(':');
    if (!time || !period) return '';

    let formattedTime = '';
    // 오전과 오후를 구별하여 처리
    if (period.slice(2, 4) === 'AM') {
        formattedTime = `오전 ${time}:${period.slice(0, 2)}`;
    } else {
        formattedTime = `오후 ${time}:${period.slice(0, 2)}`;
    }

    return formattedTime;
};

// 예약 완료 컨텐츠 컴포넌트
export const ReservationCompleteContent = ({ reservationToken, reservationDate, reservationVisitTime }) => {
    // 날짜 변환
    const formattedDate = formatDate(reservationDate);
    // 시간 변환
    const formattedTime = formatTime(reservationVisitTime);

    return (
        <ScreenContainer>
            <InnerContainer>
                <OverlapGroup>
                    <Element>예약번호&nbsp;| {reservationToken}</Element>
                    <TextWrapper>
                        {formattedDate}&nbsp;{formattedTime}
                    </TextWrapper>
                </OverlapGroup>

                <TextWrapper2>예약이 완료되었습니다.</TextWrapper2>
                <TextWrapper3>마이페이지에서 예약내역 확인이 가능합니다.</TextWrapper3>
            </InnerContainer>
        </ScreenContainer>
    );
};
