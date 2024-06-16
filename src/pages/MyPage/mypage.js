// pages/mypage.js
import React from 'react';
import Title from '../../components/Main/Title/Title';
import {MyPetoriaTitle, MyReservationTitle} from '../../components/MyPage/SectionTitle';

const MyPage = () => {
    return (
        <div>
            <Title/>
            <MyPetoriaTitle />
            <MyReservationTitle />
        </div>
    );
};

export default MyPage;