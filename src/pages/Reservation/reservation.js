import React, { useState, useEffect } from 'react';
import { Modal } from 'antd';
import styled from 'styled-components';
import { Header } from '../../components/Main/Common/Header';

import BranchSearch from '../../components/Map/BranchSearch/BranchSearch';
import MapReservation from '../../components/Main/Common/MapReservation';
import ReservationCalendar from '../../components/Reservation/ReservationCalendar/ReservationCalendar';
import TimeSelection from '../../components/Reservation/TimeSelection/TimeSelection';
import ReservationCompleteModal from '../../components/Reservation/ReservationCompleteModal/ReservationCompleteModal';
import ReservationAPI from '../../api/Reservation/ReservationAPI';
import { ReservationCompleteContent } from '../../components/Reservation/ReservationCompleteModal/ReservationCompleteContent';

const ReservationPageContainer = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    position: relative;
    overflow-x: hidden;
`;

const ReservationPageBottomContainer = styled.div`
    width: 1212px;
    height: 882px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: auto; /* 가운데 정렬을 위한 마진 설정 */
`;

const ServiceText = styled.div`
    color: #000000;
    font-family: 'Kanit-Regular', Helvetica;
    font-size: 30px;
    font-weight: 400;
    position: absolute;
`;

const ReservationLink = styled.div`
    color: #000000;
    font-family: 'Kanit-Regular', Helvetica;
    font-size: 20px;
    font-weight: 400;
    height: 30px;
    left: 961px;
    position: absolute;
    text-align: center;
    top: 1135px;
    cursor: pointer;
`;

const OverlapGroup = styled.div`
    width: 1235px;
    height: 550px;
    border: 1px solid #000000;
    border-radius: 10px;
    position: absolute;
    top: 50px;
`;

const Step1 = styled.div`
    color: transparent;
    font-family: 'Kanit-Regular', Helvetica;
    font-size: 25px;
    font-weight: 400;
    left: 42px;
    position: absolute;
    top: 31px;
`;

const StepText1 = styled.span`
    color: #fa8282;
    font-size: 25px;
`;

const Step2 = styled.div`
    color: transparent;
    font-family: 'Kanit-Regular', Helvetica;
    font-size: 25px;
    font-weight: 400;
    left: 662px;
    position: absolute;
    top: 31px;
`;

const StepText2 = styled.span`
    color: #ff6c6c;
    font-size: 25px;
`;

const StepRectangle = styled.div`
    height: 285px;
    width: 450px;
    border: 1px solid #000000;
    border-radius: 20px;
    left: 704px;
    position: absolute;
    top: 99px;
`;

const PickupTimeText = styled.div`
    color: #000000;
    font-family: 'Kanit-Regular', Helvetica;
    font-size: 25px;
    font-weight: 400;
    left: 728px;
    position: absolute;
    top: 237px;
`;

const PickupRectangle = styled.div`
    height: 60px;
    width: 402px;
    background-color: #ffffff;
    border: 1px solid #000000;
    border-radius: 10px;
    left: 728px;
    position: absolute;
    top: 135px;
`;

const RemainingText = styled.div`
    color: #000000;
    font-family: 'Kanit-Regular', Helvetica;
    font-size: 20px;
    font-weight: 400;
    left: 860px;
    position: absolute;
    top: 149px;
    width: 402px;
`;

const StepLine = styled.div`
    height: 500px;
    width: 1px;
    border-left: 1px solid #000000;
    left: 622px;
    position: absolute;
    top: 32px;
`;

const StepButton = styled.button`
    background-color: #000000;
    border-radius: 10px;
    border: 1px solid #000000;
    cursor: pointer;
    height: 70px;
    width: 450px;
    display: flex;
    justify-content: center;
    align-items: center;
    left: 704px;
    position: absolute;
    top: 420px;
`;

const StepButtonText = styled.div`
    color: #ffffff;
    font-family: 'Kanit-Regular', Helvetica;
    font-size: 20px;
    font-weight: 400;
`;

const StepButtonWrapper = styled.div`
    background-color: #ffffff;
    border-radius: 35px;
    border: 1px solid #000000;
    height: 70px;
    width: 450px;
    position: relative;
`;

const StepButtonInner = styled.div`
    color: #ffffff;
    font-family: 'Kanit-Regular', Helvetica;
    font-size: 20px;
    font-weight: 400;
    left: 184px;
    position: absolute;
    top: 20px;
    width: 81px;
`;

const TimeSelectorContainer = styled.div`
    input[type='text'] {
        height: 66px;
        width: 402px;
        font-size: 30px;
        text-align: center;
        z-index: 20;
    }
    .react-datepicker-ignore-onclickoutside {
        height: 66px;
        width: 402px;
        border: 1px;
    }

    .react-datepicker__input-container {
        height: 66px;
        width: 402px;
    }
`;

const PickupImage = styled.div`
    height: 66px;
    width: 402px;
    border-radius: 10px;
    left: 728px;
    position: absolute;
    top: 282px;
    z-index: 30;
`;

const StepContent = styled.span`
    color: black;
    font-size: 25px;
`;

const ReservationCalendarContainer = styled.div`
    width: 450px;
    height: 360px;
    position: absolute;
    top: 70px;
    left: 35px;
`;

const BranchSearchContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-grow: 1;
    position: absolute;
    top: 140px;
    left: 50%;
    transform: translateX(-50%);
    z-index: 999; /* 층 선택 버튼 위에 오도록 설정 */
`;

const BranchText = styled.h1`
    font-weight: 400;
    font-family: 'Kanit-Regular', Helvetica;
    font-size: 25px;
`;
const BranchTextContainer = styled.div`
    margin-top: 50px;
    width: 100%;
`;

const ReservationPageBottomInContainer = styled.div`
    width: 1212px;
    height: 740px;
    display: flex;
    flex-direction: row;
    position: relative;
`;
const Reservation = () => {
    const date = new Date();
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    const formattedDate = `${year}-${month}-${day}`;
    const [selectedUserId, setUserId] = useState(5); // 유저 아이디 상태
    const [selectedBranch, setSelectedBranch] = useState('더현대 서울'); // 선택된 지점 이름 상태
    const [selectedBranchId, setSelectedBranchId] = useState(1); // 선택된 지점 ID 상태
    const [selectedDate, setSelectedDate] = useState(formattedDate); // 선택된 날짜 상태
    const [selectedTime, setSelectedTime] = useState(null); // 선택된 시간 상태
    const [isModalOpen, setIsModalOpen] = useState(false); // 예약 완료 모달 열림 여부 상태
    const [isClicked, setIsClicked] = useState(false);
    const [reservationToken, setReservationToken] = useState(null); // 예약 토큰
    // 지점 선택 시 처리 함수
    const handleBranchChange = (branch, key) => {
        setSelectedBranch(branch); // 선택된 지점 업데이트
        setSelectedBranchId(key); // 선택된 지점 ID 업데이트
    };

    // 예약하기 버튼 클릭 시 처리 함수
    const handleReservation = async () => {
        if (isClicked) return; // 이미 클릭된 상태라면 함수 종료
        setIsClicked(true); // 클릭 상태로 설정
        try {
            // 날짜 선택하지 않았을 때, 오늘 날짜로 설정
            if (!selectedDate) {
                setSelectedDate(formattedDate);
            }

            // 예약 시간을 선택하지 않았을 때 에러 모달 표시
            if (!selectedTime) {
                Modal.error({
                    title: '예약 실패',
                    content: '예약 시간을 선택해주세요.',
                });
                return;
            }

            // 예약 데이터 객체 생성
            const reservationInfo = {
                userId: selectedUserId, // 유저 아이디
                branchId: selectedBranchId, // 지점 아아디
                reservationDate: selectedDate, // 예약 날짜
                reservationVisitTime: selectedTime, // 픽업 시간
            };
            setIsClicked(true);

            // 백엔드 서버 URL을 사용하여 예약 생성 요청
            const response = await ReservationAPI(reservationInfo);
            console.log(response.data.data);

            setReservationToken(response.data.data.reservationToken);
            document.getElementById('modalTriggerButton').click();
        } catch (error) {
            // 예약 실패 시 에러 처리
            Modal.error({
                title: '예약 실패',
                content: '예약 중 오류가 발생했습니다.',
            });
        } finally {
            setIsClicked(false); // 클릭 상태 해제
        }
    };

    // 시간 선택 시 처리 함수
    const handleTimeSelection = (time) => {
        setSelectedTime(time); // 선택된 시간 업데이트
    };

    return (
        <ReservationPageContainer>
            <Header /> {/* 예약 페이지의 헤더 */}
            <MapReservation /> {/* 지도 예약 컴포넌트 */}
            <ReservationPageBottomContainer>
                <BranchSearchContainer>
                    <BranchSearch onSelectBranch={handleBranchChange} /> {/* 지점 검색 컴포넌트 */}
                </BranchSearchContainer>
                <BranchTextContainer>
                    <BranchText>{selectedBranch}</BranchText> {/* 선택된 지점 텍스트 */}
                </BranchTextContainer>

                {/* 예약 페이지 하단 컨테이너 */}
                <ReservationPageBottomInContainer>
                    <ServiceText>개모차 예약</ServiceText> {/* 서비스 제목 */}
                    <OverlapGroup>
                        {/* 예약 단계 1: 날짜 선택 */}
                        <Step1>
                            <StepText1>
                                STEP 1. <span>&nbsp;</span>
                                <StepContent>날짜&nbsp;선택</StepContent>
                            </StepText1>
                            <ReservationCalendarContainer>
                                <ReservationCalendar onSelectDate={(date) => setSelectedDate(date)} />{' '}
                                {/* 날짜 선택 컴포넌트 */}
                            </ReservationCalendarContainer>
                        </Step1>
                        {/* 예약 단계 2: 픽업 시간 선택 */}
                        <Step2>
                            <StepText2>
                                STEP 2. <span>&nbsp;</span>
                                <StepContent>픽업시간&nbsp;선택</StepContent>
                            </StepText2>
                        </Step2>
                        <StepRectangle />
                        <PickupTimeText>픽업 시간</PickupTimeText> {/* 픽업 시간 제목 */}
                        <PickupImage>
                            <TimeSelectorContainer>
                                <TimeSelection onSelectTime={handleTimeSelection} /> {/* 시간 선택 컴포넌트 */}
                            </TimeSelectorContainer>
                        </PickupImage>
                        <PickupRectangle />
                        <RemainingText>잔여 개수 : 1 개</RemainingText> {/* 잔여 개수 텍스트 */}
                        <StepLine />
                        <StepButton onClick={handleReservation} disabled={isClicked}>
                            <StepButtonText>예약하기</StepButtonText> {/* 예약 버튼 */}
                        </StepButton>
                        <ReservationCompleteModal isActive={true}>
                            <ReservationCompleteContent
                                reservationToken={reservationToken}
                                reservationDate={selectedDate}
                                reservationVisitTime={selectedTime}
                            />
                        </ReservationCompleteModal>
                    </OverlapGroup>
                </ReservationPageBottomInContainer>
            </ReservationPageBottomContainer>
        </ReservationPageContainer>
    );
};

export default Reservation;
