/* 예약 페이지 스타일 */
import styled from 'styled-components';
import locationImg from '../../../assets/images/location.png';

// 예약 페이지 전체 컨테이너 스타일
export const ReservationPageContainer = styled.div`
    width: 100vw; // 화면 전체 너비
    height: 100vh; // 화면 전체 높이
    display: flex;
    flex-direction: column; // 세로 방향 정렬
    position: relative; // 상대적 위치
    overflow-x: hidden;
`;
// 예약 페이지 하단 컨테이너 스타일
export const ReservationPageBottomContainer = styled.div`
    width: 100vw; // 화면 전체 너비
    height: 882px; // 고정 높이
    display: flex;
    flex-direction: column; // 세로 방향 정렬
    align-items: center; // 가로 중앙 정렬
    justify-content: center; // 세로 중앙 정렬
    //margin-top: 50px; // 상단 여백
`;

// 서비스 텍스트 스타일
export const ServiceText = styled.div`
    color: #000000; // 글자 색상
    font-family: 'Kanit-Regular', Helvetica; // 글꼴
    font-size: 25px; // 글자 크기
    font-weight: 400; // 글자 굵기
    margin-bottom: 10px;
    padding-left: 5px;
`;

// 오버랩 그룹 스타일
export const OverlapGroup = styled.div`
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
export const Container = styled.div`
    width: 618px;
    height: 100%;
    flex-direction: column;
    display: flex;
    align-items: center;
    justify-content: center;
`;

// 단계 2 스타일
export const Step2 = styled.div`
    color: transparent; // 투명한 색상
    font-family: 'Kanit-Regular', Helvetica; // 글꼴
    font-size: 25px; // 글자 크기
    font-weight: 400; // 글자 굵기
    margin-bottom: 40px;
    width: 80%;
`;
// 단계 2 텍스트 스타일
export const StepText2 = styled.span`
    color: #ff6c6c; // 글자 색상
    font-size: 25px; // 글자 크기
`;
// 단계 사각형 스타일
export const StepRectangle = styled.div`
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
export const PickupTimeText = styled.div`
    color: #000000; // 글자 색상
    font-family: 'Kanit-Regular', Helvetica; // 글꼴
    font-size: 25px; // 글자 크기
    font-weight: 400; // 글자 굵기
    width: 400px;
    margin-bottom: 20px;
`;

// 잔여 개수 사각형 스타일
export const RemainingRectangle = styled.div`
    height: 60px; // 고정 높이
    width: 402px; // 고정 너비
    background-color: #ffffff; // 배경 색상
    border: 2px solid #eeeeee; // 테두리
    border-radius: 10px; // 테두리 반경
    align-content: center;
    margin-bottom: 30px;
`;
// 잔여 개수 텍스트 스타일
export const RemainingText = styled.div`
    color: #000000; // 글자 색상
    font-family: 'Kanit-Regular', Helvetica; // 글꼴
    font-size: 20px; // 글자 크기
    font-weight: 400; // 글자 굵기
    width: 402px; // 고정 너비
    text-align: center;
`;
// 단계 구분선 스타일
export const StepLine = styled.div`
    height: 500px; // 고정 높이
    width: 0px; // 고정 너비
    border: 1px solid #eeeeee; // 테두리 // 테두리 좌측 // this
`;
// 예약 버튼 스타일
export const StepButton = styled.button`
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
export const StepButtonText = styled.div`
    color: ${(props) => (props.disabled ? '#a9a9a9' : '#ffffff')}; // 비활성화 시 회색, 활성화 시 흰색
    font-family: 'Kanit-Regular', Helvetica; // 글꼴
    font-size: 20px; // 글자 크기
    font-weight: 400; // 글자 굵기
`;
// 시간 선택기 컨테이너 스타일
export const TimeSelectorContainer = styled.div`
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
export const PickupImage = styled.div`
    height: 66px; // 고정 높이
    width: 402px; // 고정 너비
    border-radius: 10px; // 테두리 반경

    z-index: 30; // z-index 설정
`;
// 단계 내용 스타일
export const StepContent = styled.span`
    color: black; // 글자 색상
    font-size: 25px; // 글자 크기
`;
// 지점 검색 컨테이너 스타일
export const BranchSearchContainer = styled.div`
    display: flex; // Flexbox 사용
    align-items: center; // 세로 중앙 정렬
    justify-content: center; // 가로 중앙 정렬
    flex-grow: 1; // 남은 공간을 차지하도록 설정
    z-index: 300; // 층 선택 버튼 위에 오도록 설정
`;
// 지점 아이콘 스타일
export const BranchIIcon = styled.div`
    margin-top: 13px; // 상단 여백
    width: 35px; // 고정 너비
    height: 35px; // 고정 높이
    display: flex; // Flexbox 사용
    justify-content: center; // 가로 중앙 정렬
    background-image: url(${locationImg}); // 배경 이미지 설정
`;
// 지점 텍스트 스타일
export const BranchText = styled.h1`
    font-weight: 400; // 글자 굵기
    font-family: 'Kanit-Regular', Helvetica; // 글꼴
    font-size: 25px; // 글자 크기
`;
// 지점 텍스트 컨테이너 스타일
export const BranchTextContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: left; /* 수평 중앙 정렬 추가 */
`;
// 예약 페이지 하단 내부 컨테이너 스타일
export const ReservationPageBottomInContainer = styled.div`
    width: 1212px;
    height: 740px;
    display: flex;
    flex-direction: column;
    position: relative;
    justify-content: center; /* 수평 중앙 정렬 추가 */
    //align-items: center; /* 수직 중앙 정렬 추가 */
`;
