import React, { useState, useEffect } from 'react';
import { Modal } from 'antd';
import styled from 'styled-components';
import { Header } from '../../components/Main/Common/Header';
import BranchSearch from '../../components/Main/BranchSearch';
import ReservationMap from '../../components/Main/Common/ReservationMap';
import ReservationCalendar from '../../components/Reservation/ReservationCalendar/ReservationCalendar';
import TimeSelection from '../../components/Reservation/TimeSelection/TimeSelection';
import ReservationCompleteModal from '../../components/Reservation/ReservationCompleteModal/ReservationCompleteModal';
import { ReservationCompleteContent } from '../../components/Reservation/ReservationCompleteModal/ReservationCompleteContent';
import ReservationAPI from '../../api/Reservation/ReservationAPI';
import locationImg from '../../assets/images/location.png';
import { getCookie } from '../../utils/cookie';
import { useNavigate, useLocation } from 'react-router-dom';
import { deleteAllCookies } from '../../utils/cookie';

// 예약 페이지 전체 컨테이너 스타일
const ReservationPageContainer = styled.div`
    width: 100vw; // 화면 전체 너비
    height: 100vh; // 화면 전체 높이
    display: flex;
    flex-direction: column; // 세로 방향 정렬
    position: relative; // 상대적 위치
    overflow-x: hidden;
`;
// 예약 페이지 하단 컨테이너 스타일
const ReservationPageBottomContainer = styled.div`
    width: 100vw; // 화면 전체 너비
    height: 882px; // 고정 높이
    display: flex;
    flex-direction: column; // 세로 방향 정렬
    align-items: center; // 가로 중앙 정렬
    justify-content: center; // 세로 중앙 정렬
    //margin-top: 50px; // 상단 여백
`;

// 서비스 텍스트 스타일
const ServiceText = styled.div`
    color: #000000; // 글자 색상
    font-family: 'Kanit-Regular', Helvetica; // 글꼴
    font-size: 25px; // 글자 크기
    font-weight: 400; // 글자 굵기
    // margin-top: 5px;
    margin-bottom: 10px;
    padding-left: 5px;

    // margin-left: 6px;
    // padding-left: 18px;
    // padding-top: 12px;
    // padding-bottom: 8px;
    // background-color: #fa8282;

    // border-top-left-radius: 10px;
    // border-top-right-radius: 10px;

    // width: 190px;
    // align-items: center;
`;

// 오버랩 그룹 스타일
const OverlapGroup = styled.div`
    width: 1236px; // 고정 너비
    height: 550px; // 고정 높이
    border-top: 10px solid #fa8282; // 상단 테두리
    border-right: 2px solid #eeeeee; // 오른쪽 테두리
    border-bottom: 2px solid #eeeeee; // 하단 테두리
    border-left: 2px solid #eeeeee; // 왼쪽 테두리 this
    border-radius: 10px; // 테두리 반경
    display: flex;
    flex-direction: row;
    align-items: center;
    box-shadow: 5px 5px 5px #eeeeee; //this
`;
const Container = styled.div`
    width: 618px;
    height: 100%;
    flex-direction: column;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const Container1 = styled.div`
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
// 단계 2 스타일
const Step2 = styled.div`
    color: transparent; // 투명한 색상
    font-family: 'Kanit-Regular', Helvetica; // 글꼴
    font-size: 25px; // 글자 크기
    font-weight: 400; // 글자 굵기
    margin-bottom: 40px;
    width: 80%;
`;
// 단계 2 텍스트 스타일
const StepText2 = styled.span`
    color: #ff6c6c; // 글자 색상
    font-size: 25px; // 글자 크기
`;
// 단계 사각형 스타일
const StepRectangle = styled.div`
    height: 285px; // 고정 높이
    width: 450px; // 고정 너비
    border: 2px solid #eeeeee; //this
    border-radius: 20px; // 테두리 반경
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 20px;
`;
// 픽업 시간 텍스트 스타일
const PickupTimeText = styled.div`
    color: #000000; // 글자 색상
    font-family: 'Kanit-Regular', Helvetica; // 글꼴
    font-size: 25px; // 글자 크기
    font-weight: 400; // 글자 굵기
    width: 400px;
    margin-bottom: 20px;
`;

// 잔여 개수 사각형 스타일
const RemainingRectangle = styled.div`
    height: 60px; // 고정 높이
    width: 402px; // 고정 너비
    background-color: #ffffff; // 배경 색상
    border: 2px solid #eeeeee; // 테두리
    border-radius: 10px; // 테두리 반경
    align-content: center;
    margin-bottom: 30px;
`;
// 잔여 개수 텍스트 스타일
const RemainingText = styled.div`
    color: #000000; // 글자 색상
    font-family: 'Kanit-Regular', Helvetica; // 글꼴
    font-size: 20px; // 글자 크기
    font-weight: 400; // 글자 굵기
    width: 402px; // 고정 너비
    text-align: center;
`;
// 단계 구분선 스타일
const StepLine = styled.div`
    height: 500px; // 고정 높이
    width: 0px; // 고정 너비
    border: 1px solid #eeeeee; // 테두리 // 테두리 좌측 // this
`;
// 예약 버튼 스타일
const StepButton = styled.button`
    background-color: ${(props) => (props.disabled ? '#d3d3d3' : '#000000')}; // 비활성화 시 회색, 활성화 시 검정색
    border-radius: 10px; // 테두리 반경
    border: 0px solid #000000; // 테두리
    cursor: ${(props) =>
        props.disabled ? 'not-allowed' : 'pointer'}; // 비활성화 시 'not-allowed' 커서, 활성화 시 'pointer' 커서
    height: 70px; // 고정 높이
    width: 450px; // 고정 너비
    display: flex; // Flexbox 사용
    justify-content: center; // 가로 중앙 정렬
    align-items: center; // 세로 중앙 정렬
`;
// 예약 버튼 텍스트 스타일
const StepButtonText = styled.div`
    color: ${(props) => (props.disabled ? '#a9a9a9' : '#ffffff')}; // 비활성화 시 회색, 활성화 시 흰색
    font-family: 'Kanit-Regular', Helvetica; // 글꼴
    font-size: 20px; // 글자 크기
    font-weight: 400; // 글자 굵기
`;
// 시간 선택기 컨테이너 스타일
const TimeSelectorContainer = styled.div`
    input[type='text'] {
        height: 66px; // 고정 높이
        width: 402px; // 고정 너비
        font-size: 30px; // 글자 크기
        text-align: center; // 중앙 정렬
        z-index: 20; // z-index 설정
    }
    .react-datepicker-ignore-onclickoutside {
        height: 66px; // 고정 높이
        width: 402px; // 고정 너비
        border: 1px; // 테두리
    }
    .react-datepicker__input-container {
        height: 66px; // 고정 높이
        width: 402px; // 고정 너비
    }
`;
// 픽업 이미지 스타일
const PickupImage = styled.div`
    height: 66px; // 고정 높이
    width: 402px; // 고정 너비
    border-radius: 10px; // 테두리 반경

    z-index: 30; // z-index 설정
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
// 지점 검색 컨테이너 스타일
const BranchSearchContainer = styled.div`
    display: flex; // Flexbox 사용
    align-items: center; // 세로 중앙 정렬
    justify-content: center; // 가로 중앙 정렬
    flex-grow: 1; // 남은 공간을 차지하도록 설정
    z-index: 2000; // 층 선택 버튼 위에 오도록 설정
`;
// 지점 아이콘 스타일
const BranchIIcon = styled.div`
    margin-top: 13px; // 상단 여백
    width: 35px; // 고정 너비
    height: 35px; // 고정 높이
    display: flex; // Flexbox 사용
    justify-content: center; // 가로 중앙 정렬
    background-image: url(${locationImg}); // 배경 이미지 설정
`;
// 지점 텍스트 스타일
const BranchText = styled.h1`
    font-weight: 400; // 글자 굵기
    font-family: 'Kanit-Regular', Helvetica; // 글꼴
    font-size: 25px; // 글자 크기
`;
// 지점 텍스트 컨테이너 스타일
const BranchTextContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: left; /* 수평 중앙 정렬 추가 */
`;
// 예약 페이지 하단 내부 컨테이너 스타일
const ReservationPageBottomInContainer = styled.div`
    width: 1212px;
    height: 740px;
    display: flex;
    flex-direction: column;
    position: relative;
    justify-content: center; /* 수평 중앙 정렬 추가 */
    //align-items: center; /* 수직 중앙 정렬 추가 */
`;

const Reservation = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const { branch, key } = location.state || { branch: '더현대 서울', key: 1 };

    const date = new Date();
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    const formattedDate = `${year}-${month}-${day}`;
    const [selectedUserId, setUserId] = useState(1); // 유저 아이디 상태
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
                    userId: selectedUserId, // 유저 아이디
                    branchId: selectedBranchId, // 지점 아아디
                    reservationDate: selectedDate, // 예약 날짜
                    reservationVisitTime: selectedTime, // 픽업 시간
                };
                setIsClicked(true);
                // 백엔드 서버 URL을 사용하여 예약 생성 요청
                const response = await ReservationAPI.createReservation(reservationInfo);
                console.log(response.data.data);
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

                        <ServiceText>반려견 유모차 대여 예약</ServiceText>
                        <OverlapGroup>
                            {/* 예약 단계 1: 날짜 선택 */}
                            <Container1>
                                <Step1>
                                    <StepText1>
                                        STEP 1. <span>&nbsp;</span>
                                        <StepContent>날짜&nbsp;선택</StepContent>
                                    </StepText1>
                                </Step1>
                                <ReservationCalendarContainer>
                                    <ReservationCalendar onSelectDate={(date) => setSelectedDate(date)} />{' '}
                                    {/* 날짜 선택 컴포넌트 */}
                                </ReservationCalendarContainer>
                            </Container1>
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
                                </StepButton>

                                <ReservationCompleteModal isModalOpen={isModalOpen} handleCancel={handleCancel}>
                                    <ReservationCompleteContent
                                        reservationToken={reservationToken}
                                        reservationDate={selectedDate}
                                        reservationVisitTime={selectedTime}
                                    />
                                </ReservationCompleteModal>
                            </Container>
                        </OverlapGroup>
                    </ReservationPageBottomInContainer>
                </ReservationPageBottomContainer>
            </ReservationPageContainer>
        </>
    );
};
export default Reservation;
