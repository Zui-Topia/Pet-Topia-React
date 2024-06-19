import React, { useEffect, useState } from 'react';
import axios from 'axios';
import SectionTitle from '../../components/MyPage/SectionTitle';
import MyPageSection from '../../components/MyPage/MyPageSection';
import UserInfo from '../../components/MyPage/UserInfo';
import ReservationInfo from '../../components/MyPage/ReservationInfo';
import ReservationHead from '../../components/MyPage/ReservationHead';
import ReservationBody from '../../components/MyPage/ReservationBody';
import QRModal from '../../components/MyPage/QRModal';
import MyReservationAPI from '../../api/MyPage/MyPageAPI';

const MyPage = () => {
    const [reservations, setReservations] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchReservations = async () => {
            try {
                const response = await MyReservationAPI(2);
                setReservations(response.data);
                console.log(response.data);
            } catch (error) {
                setError(error);
                console.error(error);
            }
        };

        fetchReservations();
    }, []);

    return (
        <>
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
                    <QRModal>
                        <ReservationInfo>
                            <ReservationHead />
                            <ReservationBody />
                        </ReservationInfo>
                    </QRModal>
                </MyPageSection>
            </div>
        </>
    );
};

export default MyPage;
