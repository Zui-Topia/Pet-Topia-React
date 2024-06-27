import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { Divider } from 'antd';
import Header from '../../components/Main/Common/Header';
import SectionTitle from '../../components/MyPage/SectionTitle';
import MyPageSection from '../../components/MyPage/MyPageSection';
import ReservationInfo from '../../components/MyPage/MyReservation/ReservationInfo';
import ReservationHead from '../../components/MyPage/MyReservation/ReservationHead';
import ReservationBody from '../../components/MyPage/MyReservation/ReservationBody';
import QRModal from '../../components/MyPage/QRModal';
import { ReservationHistoryAPI } from '../../api/MyPage/MyPageAPI';

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

const History = () => {
    const [reservationList, setReservationList] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchHistory = async () => {
            try {
                const response = await ReservationHistoryAPI(1);
                console.log(response.data.data);
                if (response.data.success) {
                    console.log(response.data.data);

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
                        <NoReservation>예약한 내역이 없습니다.</NoReservation>
                    )}
                </MyPageSection>
            </div>
        </>
    );
};

export default History;
