import React from 'react';
import styled from 'styled-components';

const MyPageSectionBlock = styled.div`
    width: 700px;

    background: #ffffff;
    position: relative;

    margin: 0 auto; /*페이지 중앙에 나타나토록 설정*/

    margin-top: 30px;
    margin-bottom: 30px;
    display: flex;
    flex-direction: column;
`;

const MyPageSection = ({ children }) => {
    return <MyPageSectionBlock>{children}</MyPageSectionBlock>;
};

export default MyPageSection;
