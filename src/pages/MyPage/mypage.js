// pages/mypage.js
import React from 'react';
import Title from '../../components/Main/Title/Title';
import SectionTitle from '../../components/MyPage/SectionTitle';
import MyPageSection from '../../components/MyPage/MyPageSection';
import UserInfo from '../../components/MyPage/UserInfo';

const MyPage = () => {
    return (
        <>
            <div>
                <Title />
            </div>
            <div>
                <MyPageSection>
                    <SectionTitle title="마이 페토리아" />
                    <UserInfo />
                </MyPageSection>
            </div>
        </>
    );
};

export default MyPage;
