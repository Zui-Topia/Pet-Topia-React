import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Header from '../../components/Main/Common/Header';
import SectionTitle from '../../components/MyPage/SectionTitle';
import MyPageSection from '../../components/MyPage/MyPageSection';
import UserInfo from '../../components/MyPage/MyUser/UserInfo';
import { ReservationInfo, NoReservationInfo } from '../../components/MyPage/MyReservation/ReservationInfo';
import ReservationHead from '../../components/MyPage/MyReservation/ReservationHead';
import ReservationBody from '../../components/MyPage/MyReservation/ReservationBody';
import QRModal from '../../components/MyPage/QR/QRModal';
import { MyReservationAPI } from '../../api/MyPage/MyPageAPI';
import { StyledDivider, DividerWrapper } from '../../components/Main/Common/Divider';

// 마이페이지 구성하는 함수
const MyPage = () => {
    const navigate = useNavigate();
    const [myPageInfo, setMyPageInfo] = useState({
        myPageUserDTO: null, // 사용자 정보
        myPagePetDTO: null, // 반려견 정보
        myReservationDTO: null, // 예약 1건 정보
    });
    const [error, setError] = useState(null);

    const [reservationInfo, setReservationInfo] = useState({
        placeDTO: null,
        reservationVO: null,
    });

    // 마이페이지 API 비동기 호출
    useEffect(() => {
        const fetchReservations = async () => {
            try {
                const response = await MyReservationAPI();
                console.log(response.data.data);

                if (response.data.success) {
                    const { myPageUserDTO, myPagePetDTO, myReservationDTO } = response.data.data;
                    setMyPageInfo({
                        myPageUserDTO,
                        myPagePetDTO,
                        myReservationDTO,
                    });
                    console.log(myPageUserDTO, myPagePetDTO, myReservationDTO); // 데이터 확인용 로그

                    const { placeDTO, reservationVO } = myReservationDTO; // 예약 지점 정보, 예약 상세 정보
                    setReservationInfo({
                        placeDTO,
                        reservationVO,
                    });
                }
            } catch (error) {
                setError(error);
                console.error(error);
            }
        };

        fetchReservations();
    }, []);

    // '더보기' 클릭 시 /history로 이동
    const handleMoreClick = () => {
        navigate('/history');
    };

    return (
        <>
            <Header />
            <div></div>
            <div>
                <MyPageSection>
                    <SectionTitle title="마이 페토리아" />
                    {myPageInfo.myPageUserDTO ? <UserInfo>{myPageInfo}</UserInfo> : <div></div>}
                </MyPageSection>
            </div>
            <div>
                <MyPageSection>
                    <SectionTitleWrapper>
                        <SectionTitle title="나의 예약 내역" />
                        <MoreButton onClick={handleMoreClick}>더보기 &gt;</MoreButton>
                    </SectionTitleWrapper>
                    <DividerWrapper>
                        <StyledDivider />
                    </DividerWrapper>
                    {myPageInfo.myPageUserDTO ? (
                        myPageInfo.myReservationDTO ? (
                            <QRModal
                                isActive={
                                    reservationInfo.reservationVO &&
                                    reservationInfo.reservationVO.reservationDelete === 0
                                }
                                value={reservationInfo}
                            >
                                <ReservationInfo>
                                    {reservationInfo.reservationVO && (
                                        <ReservationHead value={reservationInfo.reservationVO} />
                                    )}
                                    {reservationInfo.placeDTO && <ReservationBody value={reservationInfo} />}
                                </ReservationInfo>
                            </QRModal>
                        ) : (
                            <NoReservationInfo />
                        )
                    ) : (
                        <div></div>
                    )}
                </MyPageSection>
            </div>
        </>
    );
};

export default MyPage;

// ' 나의 예약 내역'과 '더보기' 같은 라인에 위치하도록 배치
const SectionTitleWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

// '더보기' 버튼 css 적용
const MoreButton = styled.div`
    cursor: pointer;
    color: black;
    font-family: 'Kanit';
    font-size: 15px;
    padding-right: 10px;
`;
