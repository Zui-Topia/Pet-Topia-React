// pages/mypage.js
import React from 'react';
import SectionTitle from '../../components/MyPage/SectionTitle';
import MyPageSection from '../../components/MyPage/MyPageSection';
import UserInfo from '../../components/MyPage/UserInfo';
import ReservationInfo from '../../components/MyPage/ReservationInfo';
import ReservationHead from '../../components/MyPage/ReservationHead';
import ReservationBody from '../../components/MyPage/ReservationBody';

const MyPage = () => {
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
                    <ReservationInfo>
                        <ReservationHead />
                        <ReservationBody />
                    </ReservationInfo>
                </MyPageSection>
            </div>
        </>
    );
};

export default MyPage;
