import React from 'react';
import styled from 'styled-components';

const UserInfoBlock = styled.div`
    height: 100px;

    background: #f7f7f7;
    border-radius: 20px;

    padding-top: 40px;
    padding-right: 20px;
    padding-left: 20px;
    padding-bottom: 20px;

    margin-top: 20px;
    margin-bottom: 20px;
`;

const UserInfo = ({ children }) => {
    return <UserInfoBlock>{children}</UserInfoBlock>;
};

export default UserInfo;
