/* 예약페이지 step1 구성 컴포넌트 */
import React from 'react';
import styled from 'styled-components';
import ReservationCalendar from '../../components/Reservation/ReservationCalendar/ReservationCalendar';

// Container1 스타일
const Container1Styled = styled.div`
    width: 618px;
    height: 100%;
    flex-direction: column;
    display: flex;
    align-items: center;
    justify-content: center;
    padding-bottom: 28px;
`;

// 단계 1 스타일
const Step1 = styled.div`
    color: transparent; // 투명한 색상
    font-family: 'Kanit-Regular', Helvetica; // 글꼴
    font-size: 25px; // 글자 크기
    font-weight: 400; // 글자 굵기
    margin-bottom: 40px;
    width: 80%;
`;

// 단계 1 텍스트 스타일
const StepText1 = styled.span`
    color: #ff6c6c; // 글자 색상
    font-size: 25px; // 글자 크기
`;

// 단계 내용 스타일
const StepContent = styled.span`
    color: black; // 글자 색상
    font-size: 25px; // 글자 크기
`;

// 예약 달력 컨테이너 스타일
const ReservationCalendarContainer = styled.div`
    width: 450px; // 고정 너비
    height: 360px; // 고정 높이
`;

const ReservationStep1 = ({ setSelectedDate }) => {
    return (
        <Container1Styled>
            <Step1>
                <StepText1>
                    STEP 1. <span>&nbsp;</span>
                    <StepContent>날짜&nbsp;선택</StepContent>
                </StepText1>
            </Step1>

            <ReservationCalendarContainer>
                <ReservationCalendar onSelectDate={(date) => setSelectedDate(date)} /> {/* 달력 날짜 선택 컴포넌트 */}
            </ReservationCalendarContainer>
        </Container1Styled>
    );
};

export default ReservationStep1;
