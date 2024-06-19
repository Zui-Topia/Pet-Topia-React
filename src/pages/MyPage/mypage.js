import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Header from '../../components/Main/Common/Header';
import SectionTitle from '../../components/MyPage/SectionTitle';
import MyPageSection from '../../components/MyPage/MyPageSection';
import UserInfo from '../../components/MyPage/UserInfo';
import ReservationInfo from '../../components/MyPage/MyReservation/ReservationInfo';
import ReservationHead from '../../components/MyPage/MyReservation/ReservationHead';
import ReservationBody from '../../components/MyPage/MyReservation/ReservationBody';
import QRModal from '../../components/MyPage/QRModal';
import MyReservationAPI from '../../api/MyPage/MyPageAPI';

const MyPage = () => {
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
                const response = await MyReservationAPI(2);
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

    return (
        <>
            <Header />
            <div></div>
            <div>
                <MyPageSection>
                    <SectionTitle title="마이 페토리아" />
                    <UserInfo />
                </MyPageSection>
            </div>
            <div>
                <MyPageSection>
                    <SectionTitle title="나의 예약 내역" />
                    <QRModal
                        isActive={
                            reservationInfo.reservationVO && reservationInfo.reservationVO.reservationDelete === 0
                        }
                        value={reservationInfo}
                    >
                        <ReservationInfo>
                            {reservationInfo.reservationVO && <ReservationHead value={reservationInfo.reservationVO} />}
                            {reservationInfo.placeDTO && <ReservationBody value={reservationInfo} />}
                        </ReservationInfo>
                    </QRModal>
                </MyPageSection>
            </div>
        </>
    );
};

export default MyPage;
