import React, { useEffect, useState } from 'react';
import Header from '../../components/Main/Common/Header';
import SectionTitle from '../../components/MyPage/SectionTitle';
import MyPageSection from '../../components/MyPage/MyPageSection';
import { ReservationInfo, NoReservationInfo } from '../../components/MyPage/MyReservation/ReservationInfo';
import ReservationHead from '../../components/MyPage/MyReservation/ReservationHead';
import ReservationBody from '../../components/MyPage/MyReservation/ReservationBody';
import QRModal from '../../components/MyPage/QR/QRModal';
import { ReservationHistoryAPI } from '../../api/MyPage/MyPageAPI';
import { StyledDivider, DividerWrapper } from '../../components/Main/Common/Divider';

// 사용자의 전체 예약 내역 조회하는 함수
const History = () => {
    const [reservationList, setReservationList] = useState([]);
    const [error, setError] = useState(null);

    // 전체 예약 내역 조회 API 비동기 호출
    useEffect(() => {
        const fetchHistory = async () => {
            try {
                const response = await ReservationHistoryAPI();

                if (response.data.success) {
                    // 통신 성공 시 데이터 파싱
                    setReservationList(response.data.data);
                }
            } catch (error) {
                setError(error);
                console.error(error);
            }
        };

        fetchHistory();
    }, []);

    return (
        <>
            <Header />
            <div>
                <MyPageSection>
                    <SectionTitle title="나의 예약 내역" />
                    <DividerWrapper>
                        <StyledDivider />
                    </DividerWrapper>
                    {reservationList.length > 0 ? (
                        reservationList.map((reservation, index) => (
                            <QRModal
                                key={index}
                                isActive={
                                    reservation.reservationVO &&
                                    reservation.reservationVO.reservationDelete === 0 &&
                                    reservation.reservationVO.reservationDeleteDate === null
                                }
                                value={reservation}
                            >
                                <ReservationInfo>
                                    {reservation.reservationVO && <ReservationHead value={reservation.reservationVO} />}
                                    {reservation.placeDTO && <ReservationBody value={reservation} />}
                                </ReservationInfo>
                            </QRModal>
                        ))
                    ) : (
                        <NoReservationInfo />
                    )}
                </MyPageSection>
            </div>
        </>
    );
};

export default History;
