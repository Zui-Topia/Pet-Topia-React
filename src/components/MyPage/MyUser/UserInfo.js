import React from 'react';
import styled from 'styled-components';
import { UserBody, PetBody } from './UserBody';
import { MYPAGE_ICON_PATHS } from '../../../constants/imagePaths';

// '마이페토피아' 최상위 함수
// 사용자 정보, 중간 구분선, 반려견 정보 세가지로 구분
const UserInfo = ({ children }) => {
    return (
        <UserInfoBlock>
            <UserBody icon={MYPAGE_ICON_PATHS.USER_ICON} value={children} />
            <VerticalLine />
            <PetBody icon={MYPAGE_ICON_PATHS.PET_ICON} value={children} />
        </UserInfoBlock>
    );
};

export default UserInfo;

// '마이페토피아' 최상위 css
const UserInfoBlock = styled.div`
    width: 88%;
    height: 170px;

    background: #f7f7f7;
    border-radius: 20px;

    margin: 0 auto;
    margin-top: 20px;
    margin-bottom: 20px;
    align-items: center;
    border-bottom: 10px solid #fa8282;
    display: flex;
    flex-direction: row;
`;

// '마이페토피아' 중간선 css
const VerticalLine = styled.div`
    width: 1px; /* 선의 두께 */
    height: 80%; /* 선의 높이 */
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #9b9b9b;
`;
