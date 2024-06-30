import React, { useState, useEffect } from 'react';
import { Modal } from 'antd';
import { Header } from '../../components/Main/Common/Header';
import BranchSearch from '../../components/Main/BranchSearch';
import ReservationMap from '../../components/Main/Common/ReservationMap';
import TimeSelection from '../../components/Reservation/TimeSelection/TimeSelection';
import ReservationCompleteModal from '../../components/Reservation/ReservationCompleteModal/ReservationCompleteModal';
import { ReservationCompleteContent } from '../../components/Reservation/ReservationCompleteModal/ReservationCompleteContent';
import ReservationAPI from '../../api/Reservation/ReservationAPI';
import { getCookie } from '../../utils/cookie';
import { useNavigate, useLocation } from 'react-router-dom';
import { deleteAllCookies } from '../../utils/cookie';
import ReservationStep1 from '../../components/Reservation/ReservationStep1';

import {
    ReservationPageContainer,
    ReservationPageBottomContainer,
    ServiceText,
    OverlapGroup,
    Container,
    Step2,
    StepText2,
    StepRectangle,
    PickupTimeText,
    RemainingRectangle,
    RemainingText,
    StepLine,
    StepButton,
    StepButtonText,
    TimeSelectorContainer,
    PickupImage,
    StepContent,
    BranchSearchContainer,
    BranchIIcon,
    BranchText,
    BranchTextContainer,
    ReservationPageBottomInContainer,
} from '../../components/Reservation/Style/Style';

// 작성자: 정은찬

// 예약페이지
const Reservation = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const { branch, key } = location.state || { branch: '더현대 서울', key: 1 };

    const date = new Date();
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    const formattedDate = `${year}-${month}-${day}`;
    const [selectedBranch, setSelectedBranch] = useState(branch); // 선택된 지점 이름 상태
    const [selectedBranchId, setSelectedBranchId] = useState(key); // 선택된 지점 ID 상태
    const [selectedDate, setSelectedDate] = useState(formattedDate); // 선택된 날짜 상태
    const [selectedTime, setSelectedTime] = useState(null); // 선택된 시간 상태
    const [isModalOpen, setIsModalOpen] = useState(false); // 예약 완료 모달 열림 여부 상태
    const [isClicked, setIsClicked] = useState(false);
    const [reservationToken, setReservationToken] = useState(null); // 예약 토큰
    const [strollerCnt, setStrollerCnt] = useState(0); // 반려견 유모차 잔여수
    const accessToken = getCookie('accessToken');

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
            // 토큰이 없으면 예약실패 모달 후 로그인 페이지 이동
            if (accessToken == null) {
                Modal.error({
                    title: '예약 실패',
                    content: '로그인이 필요한 서비스입니다.',
                    okText: '확인',
                    onOk: () => {
                        setTimeout(() => {
                            deleteAllCookies();
                            navigate('/login');
                        }, 500); // 2초 후에 /login 페이지로 이동
                    },
                });
            } else {
                // 여기에 set에 대한 로직 추가 필요
                // 날짜 선택하지 않았을 때, 오늘 날짜로 설정
                if (!selectedDate) {
                    setSelectedDate(formattedDate);
                }
                // 예약 시간을 선택하지 않았을 때 에러 모달 표시
                if (!selectedTime || strollerCnt === 0) {
                    Modal.error({
                        title: '예약 실패',
                        content: '예약 시간을 선택하거나 잔여 유모차가 없습니다.',
                    });
                    return;
                }
                // 예약 데이터 객체 생성
                const reservationInfo = {
                    branchId: selectedBranchId, // 지점 아아디
                    reservationDate: selectedDate, // 예약 날짜
                    reservationVisitTime: selectedTime, // 픽업 시간
                };
                setIsClicked(true);
                // 백엔드 서버 URL을 사용하여 예약 생성 요청
                const response = await ReservationAPI.createReservation(reservationInfo);

                setReservationToken(response.data.data.reservationToken);
                showModal();
            }
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

    // 반려견 유모차 잔여수 데이터 가져오기
    useEffect(() => {
        const fetchStrollerData = async () => {
            try {
                const response = await ReservationAPI.petStrollerCnt(selectedBranchId, selectedDate);
                setStrollerCnt(response.data.data);
            } catch (error) {
                console.error('StrollerData를 가져오는 중 오류가 발생했습니다:', error);
            }
        };
        fetchStrollerData();
    }, [selectedBranchId, selectedDate, reservationToken]);

    // 날짜 선택시 시간 선택 초기화하기
    useEffect(() => {
        setSelectedTime(null);
    }, [selectedDate]);

    const showModal = () => {
        setIsModalOpen(true);
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };

    return (
        <>
            <ReservationPageContainer>
                <Header /> {/* 헤더 컴포넌트 */}
                <ReservationMap /> {/* 지도 예약 컴포넌트 */}
                <ReservationPageBottomContainer>
                    <BranchSearchContainer>
                        <BranchSearch onSelectBranch={handleBranchChange} /> {/* 지점 검색 컴포넌트 */}
                    </BranchSearchContainer>
                    {/* 예약 페이지 하단 컨테이너 */}
                    <ReservationPageBottomInContainer>
                        <BranchTextContainer>
                            <BranchIIcon />
                            <BranchText>{selectedBranch}</BranchText>
                        </BranchTextContainer>

                        <ServiceText>개모차 대여 예약</ServiceText>
                        <OverlapGroup>
                            {/* 예약 단계 1: 날짜 선택 */}
                            <ReservationStep1 setSelectedDate={setSelectedDate} />
                            <StepLine />
                            {/* 예약 단계 2: 픽업 시간 선택 */}
                            <Container>
                                <Step2>
                                    <StepText2>
                                        STEP 2. <span>&nbsp;</span>
                                        <StepContent>픽업시간&nbsp;선택</StepContent>
                                    </StepText2>
                                </Step2>
                                <StepRectangle>
                                    <RemainingRectangle>
                                        <RemainingText>잔여 개수 : {strollerCnt} 개</RemainingText>{' '}
                                        {/* 잔여 개수 텍스트 */}
                                    </RemainingRectangle>
                                    <PickupTimeText>픽업 시간</PickupTimeText> {/* 픽업 시간 제목 */}
                                    <PickupImage>
                                        <TimeSelectorContainer>
                                            <TimeSelection
                                                onSelectTime={handleTimeSelection}
                                                selectedDate={selectedDate}
                                            />{' '}
                                            {/* 시간 선택 컴포넌트 */}
                                        </TimeSelectorContainer>
                                    </PickupImage>
                                </StepRectangle>
                                <StepButton
                                    onClick={handleReservation}
                                    disabled={isClicked || !selectedTime || strollerCnt === 0}
                                >
                                    <StepButtonText disabled={isClicked || !selectedTime || strollerCnt === 0}>
                                        예약하기
                                    </StepButtonText>
                                </StepButton>{' '}
                                {/* 예약하기 버튼 컴포넌트 */}
                                <ReservationCompleteModal isModalOpen={isModalOpen} handleCancel={handleCancel}>
                                    <ReservationCompleteContent
                                        reservationToken={reservationToken}
                                        reservationDate={selectedDate}
                                        reservationVisitTime={selectedTime}
                                    />
                                </ReservationCompleteModal>{' '}
                                {/* 예약완료 모달 컴포넌트 */}
                            </Container>
                        </OverlapGroup>
                    </ReservationPageBottomInContainer>
                </ReservationPageBottomContainer>
            </ReservationPageContainer>
        </>
    );
};
export default Reservation;
