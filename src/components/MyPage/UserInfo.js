import React from 'react';
import styled from 'styled-components';

const UserInfoBlock = styled.div`
    width: 88%;
    height: 180px;

    background: #f7f7f7;
    border-radius: 20px;

    margin: 0 auto;
    margin-top: 20px;
    margin-bottom: 20px;
`;

const UserInfo = ({ children }) => {
    return <UserInfoBlock>{children}</UserInfoBlock>;
};

export default UserInfo;
