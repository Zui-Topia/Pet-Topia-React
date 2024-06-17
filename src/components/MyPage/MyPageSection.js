import React from 'react';
import styled from 'styled-components';

const MyPageSectionBlock = styled.div`
    width: 800px;

    background: #ffffff;
    position: relative;

    margin: 0 auto; /*페이지 중앙에 나타나토록 설정*/

    margin-top: 60px;
    margin-bottom: 60px;
    display: flex;
    flex-direction: column;
`;

const MyPageSection = ({ children }) => {
    return <MyPageSectionBlock>{children}</MyPageSectionBlock>;
};

export default MyPageSection;
