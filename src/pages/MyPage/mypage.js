import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import styled from 'styled-components';
import { Divider } from 'antd';
import Header from '../../components/Main/Common/Header';
import SectionTitle from '../../components/MyPage/SectionTitle';
import MyPageSection from '../../components/MyPage/MyPageSection';
import UserInfo from '../../components/MyPage/MyUser/UserInfo';
import ReservationInfo from '../../components/MyPage/MyReservation/ReservationInfo';
import ReservationHead from '../../components/MyPage/MyReservation/ReservationHead';
import ReservationBody from '../../components/MyPage/MyReservation/ReservationBody';
import QRModal from '../../components/MyPage/QRModal';
import MyReservationAPI from '../../api/MyPage/MyPageAPI';

import { getCookie } from '../../utils/cookie';

const NoReservation = styled.div`
    position: relative;

    margin: 50px auto; /*페이지 중앙에 나타나토록 설정*/
`;

const StyledDivider = styled(Divider)`
    border-color: black;
`;

const DividerWrapper = styled.div`
    width: 100%;
    margin: 0;
`;

const SectionTitleWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const MoreButton = styled.div`
    cursor: pointer;
    color: black;
    font-family: 'Kanit';
    font-size: 15px;
    padding-right: 10px;
`;

const MyPage = () => {
    const navigate = useNavigate();
    const [myPageInfo, setMyPageInfo] = useState({
        myPageUserDTO: null,
        myPagePetDTO: null,
        myReservationDTO: null,
    });
    const [error, setError] = useState(null);

    const [reservationInfo, setReservationInfo] = useState({
        placeDTO: null,
        reservationVO: null,
    });

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

                    const { placeDTO, reservationVO } = myReservationDTO;
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
                            <NoReservation>진행 중인 예약 내역이 없습니다.</NoReservation>
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
