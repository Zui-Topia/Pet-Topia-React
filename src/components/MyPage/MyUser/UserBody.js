import React from 'react';
import styled from 'styled-components';

// '마이페토피아'에서 사용자 정보를 보여주는 함수
const UserBody = ({ icon, value }) => {
    return (
        <MyUserBodayBlock>
            <div className="icon">
                <img src={icon} alt="icon" width={60} />
            </div>
            <div className="info">
                <p className="info_0">강아지와 함께하기 좋은 날이에요!</p>
                <p className="info_1">
                    <strong>{value.myPagePetDTO.petName} 보호자</strong>님
                </p>
                <p className="info_2">
                    <strong>{value.myPageUserDTO.userEmail}</strong>
                </p>
                <p className="info_3">
                    <strong>&gt; 정보 수정</strong>
                </p>
            </div>
        </MyUserBodayBlock>
    );
};

// '마이페토피아'에서 반려견 정보를 보여주는 함수
const PetBody = ({ icon, value }) => {
    return (
        <MyUserBodayBlock>
            <div className="icon">
                <img src={icon} alt="icon" width={60} />
            </div>
            <div className="info">
                <p className="info_0">&nbsp;</p>
                <p className="info_1">
                    <strong>{value.myPagePetDTO.petName}</strong>
                </p>
                <p className="info_2">
                    <strong>
                        {value.myPagePetDTO.petSizeString} / {value.myPagePetDTO.petWeight} kg
                    </strong>
                </p>
                <p className="info_3">
                    <strong>&gt; 정보 수정</strong>
                </p>
            </div>
        </MyUserBodayBlock>
    );
};

export { UserBody, PetBody };

// 마이페토피아에서 공통 컴포넌트 구성 css
const MyUserBodayBlock = styled.div`
    width: 48%;
    height: 140px;

    // background-color: #ffffff;
    margin-left: 10px;
    margin-right: 10px;
    margin: 0 auto;
    align-items: center;

    display: flex;
    flex-direction: row;

    // 아이콘 배치
    .icon {
        postion: relative;
        padding: 20px;
        background-color: #d9d9d9;
        width: 30px;
        height: 30px;
        margin: 30px auto;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        overflow: hidden;
    }

    // 아이콘 내부 이미지 배치
    img {
        margin: 0 auto;
    }

    // 상세 정보
    .info {
        padding-top: 10px;
        width: 70%;
        height: 80%;
    }

    // 멘트 위치
    .info_0 {
        color: #545454;
        padding-bottom: 5px;
        font-size: 14px;
    }

    // 이름 정보
    .info_1 {
        font-size: 20px;
        font-family: 'Kanit';
    }

    // 세부 정보
    .info_2 {
        padding-left: 10px;
        padding-bottom: 5px;
        color: #9b9b9b;
        font-size: 15px;
    }

    // 정보 수정 버튼
    .info_3 {
        padding-left: 15px;
        padding-bottom: 5px;
        padding-top: 5px;
        color: #ff6c6c;
        font-size: 12px;
    }

    p {
        margin: 5px;
    }
`;
